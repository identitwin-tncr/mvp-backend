


























import express from 'express';
import { FieldPacket, ResultSetHeader } from 'mysql2';
import { _retrieveBlockList, _retrieveCardinalPointList, _retrieveElementTypeList, _retrieveInstrumentTypeList, _retrieveMaterialList, _retrieveMonitoringFrecuencyList, _retrieveMonitoringVariableList, _retrieveOrientationList, _retrieveTechnicalUnitList } from '../queries/catalog_queries';
import { DEFAULT_LIMIT, DEFAULT_OFFSET } from '../../util/common_utils';

const retrieveMonitoringVariableList = async (req: express.Request, res: express.Response) => {
    const offset: number = req.query.offset ? parseInt(req.query.offset as string) : DEFAULT_OFFSET;
    const limit: number = req.query.limit ? parseInt(req.query.limit as string) : DEFAULT_LIMIT;
    let dbResult = _retrieveMonitoringVariableList(offset, limit);
}
const retrieveMaterialList = async (req: express.Request, res: express.Response) => {
    const offset: number = req.query.offset ? parseInt(req.query.offset as string) : DEFAULT_OFFSET;
    const limit: number = req.query.limit ? parseInt(req.query.limit as string) : DEFAULT_LIMIT;
    let dbResult = _retrieveMaterialList(offset, limit);
}

const retrieveBlockList = async (req: express.Request, res: express.Response) => {
    const offset: number = req.query.offset ? parseInt(req.query.offset as string) : DEFAULT_OFFSET;
    const limit: number = req.query.limit ? parseInt(req.query.limit as string) : DEFAULT_LIMIT;
    let dbResult = _retrieveBlockList(offset, limit);
}

const retrieveTechnicalUnitList = async (req: express.Request, res: express.Response) => {
    const offset: number = req.query.offset ? parseInt(req.query.offset as string) : DEFAULT_OFFSET;
    const limit: number = req.query.limit ? parseInt(req.query.limit as string) : DEFAULT_LIMIT;
    let dbResult = _retrieveTechnicalUnitList(offset, limit);
}

const retrieveOrientationList = async (req: express.Request, res: express.Response) => {
    const offset: number = req.query.offset ? parseInt(req.query.offset as string) : DEFAULT_OFFSET;
    const limit: number = req.query.limit ? parseInt(req.query.limit as string) : DEFAULT_LIMIT;
    let dbResult = _retrieveOrientationList(offset, limit);
}

const retrieveCardinalPointList = async (req: express.Request, res: express.Response) => {
    const offset: number = req.query.offset ? parseInt(req.query.offset as string) : DEFAULT_OFFSET;
    const limit: number = req.query.limit ? parseInt(req.query.limit as string) : DEFAULT_LIMIT;
    let dbResult = _retrieveCardinalPointList(offset, limit);
}

const retrieveElementTypeList = async (req: express.Request, res: express.Response) => {
    const offset: number = req.query.offset ? parseInt(req.query.offset as string) : DEFAULT_OFFSET;
    const limit: number = req.query.limit ? parseInt(req.query.limit as string) : DEFAULT_LIMIT;
    let dbResult = _retrieveElementTypeList(offset, limit);
}

const retrieveInstrumentTypeList = async (req: express.Request, res: express.Response) => {
    const offset: number = req.query.offset ? parseInt(req.query.offset as string) : DEFAULT_OFFSET;
    const limit: number = req.query.limit ? parseInt(req.query.limit as string) : DEFAULT_LIMIT;
    let dbResult = _retrieveInstrumentTypeList(offset, limit);
}

const retrieveMonitoringFrecuencyList = async (req: express.Request, res: express.Response) => {
    const offset: number = req.query.offset ? parseInt(req.query.offset as string) : DEFAULT_OFFSET;
    const limit: number = req.query.limit ? parseInt(req.query.limit as string) : DEFAULT_LIMIT;
    let dbResult = _retrieveMonitoringFrecuencyList(offset, limit);
}

const addMonitoringVariable = async (req: express.Request, res: express.Response) => {}
const addMaterial = async (req: express.Request, res: express.Response) => {}

const editMonitoringVariable = async (req: express.Request, res: express.Response) => {}
const editMaterial = async (req: express.Request, res: express.Response) => {}

const deleteMonitoringVariable = async (req: express.Request, res: express.Response) => {}
const deleteMaterial = async (req: express.Request, res: express.Response) => {}

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