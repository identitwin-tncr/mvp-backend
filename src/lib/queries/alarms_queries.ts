import { FieldPacket, ResultSetHeader, RowDataPacket } from 'mysql2';
import pool from '../db';

const _retrieveAlarmList = (offset: number, limit: number, variableId: number, blockId:number): Promise<[RowDataPacket[], FieldPacket[]]> => {
    const query:string = 'CALL TNCR.RETRIEVE_ALARMS(?, ?, ?, ?);';
    return pool.query(query, [limit, offset, variableId, blockId])
}
const _retrieveAlarmDetail = (id: number): Promise<[RowDataPacket[], FieldPacket[]]> => {
    const query:string = 'CALL TNCR.RETRIEVE_ALARM_DETAIL(?);';
    return pool.query(query, [id])
}

const _retrieveAlarmElements = (id: number): Promise<[RowDataPacket[], FieldPacket[]]> => {
    const query:string = 'CALL TNCR.RETRIEVE_ALARM_ELEMENTS(?);';
    return pool.query(query, [id])
}

const _insertAlarm = (data: InsertAlarm)


export {
    _retrieveAlarmList,
    _retrieveAlarmDetail,
    _retrieveAlarmElements
}