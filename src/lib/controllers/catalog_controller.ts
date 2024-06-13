


























import express from 'express';
import { FieldPacket, ResultSetHeader } from 'mysql2';
import {
    _addMaterial, 
    _addMonitoringVariable, 
    _deleteMaterial, 
    _deleteMonitoringVariable, 
    _editMaterial, 
    _editMonitoringVariable, 
    _retrieveBlockList, 
    _retrieveCardinalPointList, 
    _retrieveElementTypeList, 
    _retrieveInstrumentTypeList, 
    _retrieveMaterialList, 
    _retrieveMonitoringFrecuencyList, 
    _retrieveMonitoringVariableList, 
    _retrieveOrientationList, 
    _retrieveTechnicalUnitList } from '../queries/catalog_queries';
import { DEFAULT_LIMIT, DEFAULT_OFFSET } from '../../util/common_utils';
import { Block, CardinalPoint, ElementType, InstrumentType, Material, MonitoringVariable, Orientation, TecnicalUnit } from '../types/catalog';

const retrieveMonitoringVariableList = async (req: express.Request, res: express.Response) => {
    const offset: number = req.query.offset ? parseInt(req.query.offset as string) : DEFAULT_OFFSET;
    const limit: number = req.query.limit ? parseInt(req.query.limit as string) : DEFAULT_LIMIT;
    let dbResult = _retrieveMonitoringVariableList(offset, limit);
    let result:MonitoringVariable[]
}
const retrieveMaterialList = async (req: express.Request, res: express.Response) => {
    const offset: number = req.query.offset ? parseInt(req.query.offset as string) : DEFAULT_OFFSET;
    const limit: number = req.query.limit ? parseInt(req.query.limit as string) : DEFAULT_LIMIT;
    let dbResult = _retrieveMaterialList(offset, limit);
    let result:Material[]
}

const retrieveBlockList = async (req: express.Request, res: express.Response) => {
    const offset: number = req.query.offset ? parseInt(req.query.offset as string) : DEFAULT_OFFSET;
    const limit: number = req.query.limit ? parseInt(req.query.limit as string) : DEFAULT_LIMIT;
    let dbResult = _retrieveBlockList(offset, limit);
    let result: Block[];
}

const retrieveTechnicalUnitList = async (req: express.Request, res: express.Response) => {
    const offset: number = req.query.offset ? parseInt(req.query.offset as string) : DEFAULT_OFFSET;
    const limit: number = req.query.limit ? parseInt(req.query.limit as string) : DEFAULT_LIMIT;
    let dbResult = _retrieveTechnicalUnitList(offset, limit);
    let result: TecnicalUnit[];
}

const retrieveOrientationList = async (req: express.Request, res: express.Response) => {
    const offset: number = req.query.offset ? parseInt(req.query.offset as string) : DEFAULT_OFFSET;
    const limit: number = req.query.limit ? parseInt(req.query.limit as string) : DEFAULT_LIMIT;
    let dbResult = _retrieveOrientationList(offset, limit);
    let result: Orientation[];
}

const retrieveCardinalPointList = async (req: express.Request, res: express.Response) => {
    const offset: number = req.query.offset ? parseInt(req.query.offset as string) : DEFAULT_OFFSET;
    const limit: number = req.query.limit ? parseInt(req.query.limit as string) : DEFAULT_LIMIT;
    let dbResult = _retrieveCardinalPointList(offset, limit);
    let result: CardinalPoint[];
}

const retrieveElementTypeList = async (req: express.Request, res: express.Response) => {
    const offset: number = req.query.offset ? parseInt(req.query.offset as string) : DEFAULT_OFFSET;
    const limit: number = req.query.limit ? parseInt(req.query.limit as string) : DEFAULT_LIMIT;
    let dbResult = _retrieveElementTypeList(offset, limit);
    let result: ElementType[];
}

const retrieveInstrumentTypeList = async (req: express.Request, res: express.Response) => {
    const offset: number = req.query.offset ? parseInt(req.query.offset as string) : DEFAULT_OFFSET;
    const limit: number = req.query.limit ? parseInt(req.query.limit as string) : DEFAULT_LIMIT;
    let dbResult = _retrieveInstrumentTypeList(offset, limit);
    let result: InstrumentType[];
}

const retrieveMonitoringFrecuencyList = async (req: express.Request, res: express.Response) => {
    const offset: number = req.query.offset ? parseInt(req.query.offset as string) : DEFAULT_OFFSET;
    const limit: number = req.query.limit ? parseInt(req.query.limit as string) : DEFAULT_LIMIT;
    let dbResult = _retrieveMonitoringFrecuencyList(offset, limit);
    let result: MonitoringVariable[];
}

const addMonitoringVariable = async (req: express.Request, res: express.Response) => {
    let data: MonitoringVariable = req.body;
    let dbResult = _addMonitoringVariable(data);
}
const addMaterial = async (req: express.Request, res: express.Response) => {
    let data: Material = req.body;
    let dbResult = _addMaterial(data);
}

const editMonitoringVariable = async (req: express.Request, res: express.Response) => {
    const id: number = parseInt(req.params.id as string);
    let data: MonitoringVariable = req.body;
    let dbResult = _editMonitoringVariable(id, data);
}
const editMaterial = async (req: express.Request, res: express.Response) => {
    const id: number = parseInt(req.params.id as string);
    let data: Material = req.body;
    let dbResult = _editMaterial(id, data);
}

const deleteMonitoringVariable = async (req: express.Request, res: express.Response) => {
    const id: number = parseInt(req.params.id as string);
    let dbResult = _deleteMonitoringVariable(id);
}
const deleteMaterial = async (req: express.Request, res: express.Response) => {
    const id: number = parseInt(req.params.id as string);
    let dbResult = _deleteMaterial(id);
}

export {
    retrieveMonitoringVariableList,
    retrieveMaterialList,
    retrieveBlockList,
    retrieveTechnicalUnitList,
    retrieveOrientationList,
    retrieveCardinalPointList,
    retrieveElementTypeList,
    retrieveInstrumentTypeList,
    retrieveMonitoringFrecuencyList,
    addMonitoringVariable,
    addMaterial,
    editMonitoringVariable,
    editMaterial,
    deleteMonitoringVariable,
    deleteMaterial
}