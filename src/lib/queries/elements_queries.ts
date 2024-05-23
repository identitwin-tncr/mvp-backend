import { FieldPacket, ResultSetHeader, RowDataPacket } from 'mysql2';
import pool from '../db';

const _retrieveElementList = async (offset: number, limit: number): Promise<[RowDataPacket[], FieldPacket[]]> => {return}
const _retrieveElementsOnWatchList = async (offset: number, limit: number): Promise<[RowDataPacket[], FieldPacket[]]> => {return}

const _addElement = async (): Promise<[ResultSetHeader, FieldPacket[]]> => {return}

const _editElement = async (id: number): Promise<[ResultSetHeader, FieldPacket[]]> => {return}

const _deleteElement = async (id: number): Promise<[ResultSetHeader, FieldPacket[]]> => {return}

export {
    _retrieveElementsOnWatchList,
    _retrieveElementList,
    _addElement,
    _editElement,
    _deleteElement
}