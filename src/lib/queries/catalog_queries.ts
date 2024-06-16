import { FieldPacket, ResultSetHeader, RowDataPacket } from 'mysql2';
import pool from '../db';
import { Material, MonitoringVariable } from 'types';

const _retrieveMonitoringVariableList = async (offset: number, limit: number): Promise<[RowDataPacket[], FieldPacket[]]> => {
    const query: string = "SELECT * FROM VARIABLE LIMIT ? OFFSET ?";
    return pool.query(query, [limit, offset])
}

const _retrieveMaterialList = async (offset: number, limit: number): Promise<[RowDataPacket[], FieldPacket[]]> => {
    const query: string = "SELECT * FROM MATERIAL LIMIT ? OFFSET ?";
    return pool.query(query, [limit, offset])
}
const _retrieveBlockList = async (offset: number, limit: number): Promise<[RowDataPacket[], FieldPacket[]]> => {
    const query: string = "SELECT * FROM BLOCK LIMIT ? OFFSET ?";
    return pool.query(query, [limit, offset])
}
const _retrieveTechnicalUnitList = async (offset: number, limit: number): Promise<[RowDataPacket[], FieldPacket[]]> => {
    const query: string = "SELECT * FROM TECHNICAL_UNIT LIMIT ? OFFSET ?";
    return pool.query(query, [limit, offset])
}
const _retrieveOrientationList = async (offset: number, limit: number): Promise<[RowDataPacket[], FieldPacket[]]> => {
    const query: string = "SELECT * FROM ORIENTATION LIMIT ? OFFSET ?";
    return pool.query(query, [limit, offset])
}
const _retrieveCardinalPointList = async (offset: number, limit: number): Promise<[RowDataPacket[], FieldPacket[]]> => {
    const query: string = "SELECT * FROM CARDINAL_POINT LIMIT ? OFFSET ?";
    return pool.query(query, [limit, offset])
}
const _retrieveElementTypeList = async (offset: number, limit: number): Promise<[RowDataPacket[], FieldPacket[]]> => {
    const query: string = "SELECT * FROM ELEMENT_TYPE LIMIT ? OFFSET ?";
    return pool.query(query, [limit, offset])
}
const _retrieveInstrumentTypeList = async (offset: number, limit: number): Promise<[RowDataPacket[], FieldPacket[]]> => {
    const query: string = "SELECT ID, TYPE AS NAME FROM INSTRUMENT_TYPE LIMIT ? OFFSET ?";
    return pool.query(query, [limit, offset])
}
const _retrieveMonitoringFrecuencyList = async (offset: number, limit: number): Promise<[RowDataPacket[], FieldPacket[]]> => {
    const query: string = "SELECT ID, FREQUENCY AS NAME FROM MONITORING_FREQUENCY LIMIT ? OFFSET ?";
    return pool.query(query, [limit, offset])
}

const _addMonitoringVariable = async (data: MonitoringVariable): Promise<[ResultSetHeader, FieldPacket[]]> => {return}
const _addMaterial = async (data: Material): Promise<[ResultSetHeader, FieldPacket[]]> => {return}

const _editMonitoringVariable = async (id: number, data: MonitoringVariable): Promise<[ResultSetHeader, FieldPacket[]]> => {return}
const _editMaterial = async (id: number, data: Material): Promise<[ResultSetHeader, FieldPacket[]]> => {return}

const _deleteMonitoringVariable = async (id: number): Promise<[ResultSetHeader, FieldPacket[]]> => {return}
const _deleteMaterial = async (id: number): Promise<[ResultSetHeader, FieldPacket[]]> => {return}

export {
    _retrieveMonitoringVariableList,
    _retrieveMaterialList,
    _retrieveBlockList,
    _retrieveTechnicalUnitList,
    _retrieveOrientationList,
    _retrieveCardinalPointList,
    _retrieveElementTypeList,
    _retrieveInstrumentTypeList,
    _retrieveMonitoringFrecuencyList,
    _addMonitoringVariable,
    _addMaterial,
    _editMonitoringVariable,
    _editMaterial,
    _deleteMonitoringVariable,
    _deleteMaterial
}