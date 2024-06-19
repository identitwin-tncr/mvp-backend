import { FieldPacket, ResultSetHeader, RowDataPacket } from 'mysql2';
import pool from '../db';
import {InsertAlarm} from "types";

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

const _insertAlarm = (data: (string|number)[]) => {
    const query:string = "INSERT INTO TNCR.ALARM(ID, VARIABLE_ID, STATUS_ID, INSTRUMENT_ID, RAISED_DATE, REASON_OF_RAISE, AVG_VALUE, VARIANCE_VALUE, MAX_VALUE, MIN_VALUE, FROM_DATE, TO_DATE) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    return pool.query(query, [...data]);
}


export {
    _retrieveAlarmList,
    _retrieveAlarmDetail,
    _retrieveAlarmElements,
    _insertAlarm
}