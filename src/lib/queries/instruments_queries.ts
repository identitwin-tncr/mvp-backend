import { FieldPacket, ResultSetHeader, RowDataPacket } from 'mysql2';
import pool from '../db';
import { Instrument } from '../types/instrument';

const _retrieveInstrumentList = async (offset: number, limit: number): Promise<[RowDataPacket[], FieldPacket[]]> => {return}

const _addInstrument = async (data:Instrument): Promise<[ResultSetHeader, FieldPacket[]]> => {return}

const _editInstrument = async (id: number, data: Instrument): Promise<[ResultSetHeader, FieldPacket[]]> => {return}

const _deleteInstrument = async (id: number): Promise<[ResultSetHeader, FieldPacket[]]> => {return}

export {
    _retrieveInstrumentList,
    _addInstrument,
    _editInstrument,
    _deleteInstrument
}