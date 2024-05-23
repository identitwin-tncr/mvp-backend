import { FieldPacket, ResultSetHeader, RowDataPacket } from 'mysql2';
import pool from '../db';
import { ConservationAction } from '../types/conservation_action';

const _retrieveConservationActionList = async (offset: number, limit: number): Promise<[RowDataPacket[], FieldPacket[]]> => {return}

const _addConservationAction = async (data: ConservationAction): Promise<[ResultSetHeader, FieldPacket[]]> => {return}

const _editConservationAction = async (id: number, data: ConservationAction): Promise<[ResultSetHeader, FieldPacket[]]> => {return}

const _deleteConservationAction = async (id: number): Promise<[ResultSetHeader, FieldPacket[]]> => {return}

export {
    _retrieveConservationActionList,
    _addConservationAction,
    _editConservationAction,
    _deleteConservationAction
}