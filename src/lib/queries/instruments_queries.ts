import { FieldPacket, ResultSetHeader, RowDataPacket } from 'mysql2';
import pool from '../db';

const _retrieveInstrumentList = async (offset: number, limit: number): Promise<[RowDataPacket[], FieldPacket[]]> => {return}

const _addInstrument = async (): Promise<[ResultSetHeader, FieldPacket[]]> => {return}

const _editInstrument = async (id: number): Promise<[ResultSetHeader, FieldPacket[]]> => {return}

const _deleteInstrument = async (id: number): Promise<[ResultSetHeader, FieldPacket[]]> => {return}

export {
    _retrieveInstrumentList,
    _addInstrument,
    _editInstrument,
    _deleteInstrument
}