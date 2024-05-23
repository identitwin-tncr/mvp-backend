import { FieldPacket, ResultSetHeader, RowDataPacket } from 'mysql2';
import pool from '../db';

const _retrieveAlarmList = async (offset: number, limit: number): Promise<[RowDataPacket[], FieldPacket[]]> => {return}
const _retrieveAlarmActionList = async (offset: number, limit: number): Promise<[RowDataPacket[], FieldPacket[]]> => {return}



export {
    _retrieveAlarmList,
    _retrieveAlarmActionList
}