import {FieldPacket, QueryResult, ResultSetHeader, RowDataPacket} from 'mysql2';

import pool from '../db';
import {ElementBody} from "types";


const _retrieveElementList = async (offset: number, limit: number, blockId: number, technologicalUnitId: number): Promise<[RowDataPacket[], FieldPacket[]]> => {
    const query: string = "CALL TNCR.RETRIEVE_ELEMENTS(?, ?, ?, ?);";
    return pool.query(query, [limit, offset, blockId, technologicalUnitId])
}

const _addElement = async (data: ElementBody): Promise<boolean> => {
    const connection = await pool.getConnection();
    await connection.beginTransaction()

    let query: string = "INSERT INTO TNCR.ELEMENT(CODE, NUMBER, ORIENTATION_ID, CARDINAL_POINT_ID, ELEMENT_TYPE_ID) VALUES (?, ?, ?, ?, ?);";

    let results: [QueryResult,];
    try{
        //@ts-ignore
        results = await pool.query(query, [data.code, data.number, data.orientationId, data.cardinalPointId, data.elementTypeId])
    }catch (e) {
        await connection.rollback();
        return false;
    }

    //@ts-ignore
    const elementId = results[0].insertId;

    query = "INSERT INTO TNCR.BLOCK_ELEMENT(BLOCK_ID, ELEMENT_ID) VALUES ?;";
    await pool.query(query, [data.blockIds.map((blockId: number) => [blockId, elementId])]);

    await connection.commit();
    connection.release();

    return true;
}

/**
 *
 * @param id
 * @param data
 */
const _editElement = async (id: number, data: ElementBody): Promise<number> => {
    const connection = await pool.getConnection();
    await connection.beginTransaction()

    let query: string = "UPDATE TNCR.ELEMENT SET CODE=?, NUMBER=?, ORIENTATION_ID=?, CARDINAL_POINT_ID=?, ELEMENT_TYPE_ID=? WHERE ID = ?;";

    try{
        const results = await pool.query(query, [data.code, data.number, data.orientationId, data.cardinalPointId, data.elementTypeId, id]);
        //@ts-ignore
        if(results[0].affectedRows === 0){
            return 2;
        }
    }catch (e) {
        await connection.rollback();
        return 1;
    }

    query = "DELETE FROM TNCR.BLOCK_ELEMENT WHERE ELEMENT_ID=?;";
    await pool.query(query, [id])

    query = "INSERT INTO TNCR.BLOCK_ELEMENT(BLOCK_ID, ELEMENT_ID) VALUES ?;";
    await pool.query(query, [data.blockIds.map((blockId: number) => [blockId, id])]);

    await connection.commit();
    connection.release();

    return 0;
}

const _deleteElement = (id: number): Promise<[ResultSetHeader, FieldPacket[]]> => {
    const query: string = "DELETE FROM TNCR.ELEMENT WHERE ID=?;";
    return pool.query(query, [id])
}

export {
    _retrieveElementList,
    _addElement,
    _editElement,
    _deleteElement
}