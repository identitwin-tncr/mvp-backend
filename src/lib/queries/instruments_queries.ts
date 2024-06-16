import { FieldPacket, QueryResult, ResultSetHeader, RowDataPacket } from 'mysql2';
import pool from '../db';
import { InstrumentBody } from 'types';

const _retrieveInstrumentList = async (offset: number, limit: number, blockId: number): Promise<[RowDataPacket[], FieldPacket[]]> => {
    const query: string = "CALL RETRIEVE_INSTRUMENTS(?,?,?);"
    return pool.query(query, [limit, offset, blockId])
}

const _addInstrument = async (data:InstrumentBody): Promise<boolean> => {
    const connection = await pool.getConnection();
    await connection.beginTransaction()
    let query: string =`INSERT INTO INSTRUMENT(NAME, CODE, MODEL, ASSET_CODE, MONITORING_FREQUENCY_ID, BLOCK_ID, INSTRUMENT_TYPE_ID) 
                        VALUES (?, ?, ?, ?, ?, ?, ?);`;
    let results: [QueryResult,];
    try{
        //@ts-ignore
        results = await pool.query(query, [data.name, data.code, data.model, data.assetCode, data.monitoringFrecuencyId, data.blockId, data.instrumentTypeId])
    }catch (e) {
        await connection.rollback();
        return false;
    }
    //@ts-ignore
    const elementId = results[0].insertId;
    query = "INSERT INTO INSTRUMENT_VARIABLE(VARIABLE_ID, INSTRUMENT_ID) VALUES ?;";
    await pool.query(query, [data.monitoringVariableIds.map((id: number) => [id, elementId])]);

    await connection.commit();
    connection.release();

    return true;

}

const _editInstrument = async (id: number, data: InstrumentBody) => {
    const connection = await pool.getConnection();
    await connection.beginTransaction()

    let query: string = "UPDATE INSTRUMENT SET NAME=?, CODE=?, MODEL=?, ASSET_CODE=?, MONITORING_FREQUENCY_ID=?, BLOCK_ID=?, INSTRUMENT_TYPE_ID=? WHERE ID = ?;";

    try{
        const results = await pool.query(query, [data.name, data.code, data.model, data.assetCode, data.monitoringFrecuencyId, data.blockId, data.instrumentTypeId, id]);
        //@ts-ignore
        if(results[0].affectedRows === 0){
            return 2;
        }
    }catch (e) {
        await connection.rollback();
        return 1;
    }

    query = "DELETE FROM INSTRUMENT_VARIABLE WHERE INSTRUMENT_ID=?;";
    await pool.query(query, [id])

    query = "INSERT INTO INSTRUMENT_VARIABLE(VARIABLE_ID, INSTRUMENT_ID) VALUES ?;";
    await pool.query(query, [data.monitoringVariableIds.map((varId: number) => [varId, id])]);

    await connection.commit();
    connection.release();

    return 0;
}

const _deleteInstrument = async (id: number) : Promise<[ResultSetHeader, FieldPacket[]]> =>  {
    const query = "DELETE FROM INSTRUMENT WHERE ID=?;";
    return pool.query(query, [id]);
}

export {
    _retrieveInstrumentList,
    _addInstrument,
    _editInstrument,
    _deleteInstrument
}