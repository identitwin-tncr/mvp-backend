import { FieldPacket, ResultSetHeader, RowDataPacket } from 'mysql2';
import pool from '../db';
import { Material, MonitoringVariable } from '../types/catalog';

const _retrieveMonitoringVariableList = async (offset: number, limit: number): Promise<[RowDataPacket[], FieldPacket[]]> => {return}
const _retrieveMaterialList = async (offset: number, limit: number): Promise<[RowDataPacket[], FieldPacket[]]> => {return}
const _retrieveBlockList = async (offset: number, limit: number): Promise<[RowDataPacket[], FieldPacket[]]> => {return}
const _retrieveTechnicalUnitList = async (offset: number, limit: number): Promise<[RowDataPacket[], FieldPacket[]]> => {return}
const _retrieveOrientationList = async (offset: number, limit: number): Promise<[RowDataPacket[], FieldPacket[]]> => {return}
const _retrieveCardinalPointList = async (offset: number, limit: number): Promise<[RowDataPacket[], FieldPacket[]]> => {return}
const _retrieveElementTypeList = async (offset: number, limit: number): Promise<[RowDataPacket[], FieldPacket[]]> => {return}
const _retrieveInstrumentTypeList = async (offset: number, limit: number): Promise<[RowDataPacket[], FieldPacket[]]> => {return}
const _retrieveMonitoringFrecuencyList = async (offset: number, limit: number): Promise<[RowDataPacket[], FieldPacket[]]> => {return}

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