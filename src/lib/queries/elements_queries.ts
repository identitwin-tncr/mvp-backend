import { FieldPacket, ResultSetHeader, RowDataPacket } from 'mysql2';
import pool from '../db';
import { Element } from '../types/element';

const _retrieveElementList = async (offset: number, limit: number): Promise<[RowDataPacket[], FieldPacket[]]> => {return}
const _retrieveElementsOnWatchList = async (offset: number, limit: number): Promise<[RowDataPacket[], FieldPacket[]]> => {return}

const _addElement = async (data: Element): Promise<[ResultSetHeader, FieldPacket[]]> => {return}

const _editElement = async (id: number, data: Element): Promise<[ResultSetHeader, FieldPacket[]]> => {return}

const _deleteElement = async (id: number): Promise<[ResultSetHeader, FieldPacket[]]> => {return}

export {
    _retrieveElementsOnWatchList,
    _retrieveElementList,
    _addElement,
    _editElement,
    _deleteElement
}