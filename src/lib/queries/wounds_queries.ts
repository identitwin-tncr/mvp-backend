import { FieldPacket, ResultSetHeader, RowDataPacket } from 'mysql2';
import pool from '../db';
import { Wound } from '../types/wound';

const _retrieveWoundList = async (offset: number, limit: number): Promise<[RowDataPacket[], FieldPacket[]]> => {return}

const _addWound = async (dara: Wound): Promise<[ResultSetHeader, FieldPacket[]]> => {return}

const _editWound = async (id: number, data:Wound): Promise<[ResultSetHeader, FieldPacket[]]> => {return}

const _deleteWound = async (id: number): Promise<[ResultSetHeader, FieldPacket[]]> => {return}

export {
    _retrieveWoundList,
    _addWound,
    _editWound,
    _deleteWound
}