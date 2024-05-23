import express from 'express';
import { FieldPacket, ResultSetHeader } from 'mysql2';
import { DEFAULT_LIMIT, DEFAULT_OFFSET } from '../../util/common_utils';
import { _retrieveElementList, _retrieveElementsOnWatchList } from '../queries/elements_queries';

const retrieveElementList = async (req: express.Request, res: express.Response) => {
    const offset: number = req.query.offset ? parseInt(req.query.offset as string) : DEFAULT_OFFSET;
    const limit: number = req.query.limit ? parseInt(req.query.limit as string) : DEFAULT_LIMIT;
    let dbResult = _retrieveElementList(offset, limit);
}
const retrieveElementsOnWatchList = async (req: express.Request, res: express.Response) => {
    const offset: number = req.query.offset ? parseInt(req.query.offset as string) : DEFAULT_OFFSET;
    const limit: number = req.query.limit ? parseInt(req.query.limit as string) : DEFAULT_LIMIT;
    let dbResult = _retrieveElementsOnWatchList(offset, limit);
}
const addElement = async (req: express.Request, res: express.Response) => {}
const editElement = async (req: express.Request, res: express.Response) => {}
const deleteElement = async (req: express.Request, res: express.Response) => {}

export {
    retrieveElementList,
    retrieveElementsOnWatchList,
    addElement,
    editElement,
    deleteElement
}