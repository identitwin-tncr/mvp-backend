import express from 'express';
import { FieldPacket, ResultSetHeader } from 'mysql2';
import { DEFAULT_LIMIT, DEFAULT_OFFSET } from '../../util/common_utils';
import { _retrieveWoundList } from '../queries/wounds_queries';

const retrieveWoundList = async (req: express.Request, res: express.Response) => {
    const offset: number = req.query.offset ? parseInt(req.query.offset as string) : DEFAULT_OFFSET;
    const limit: number = req.query.limit ? parseInt(req.query.limit as string) : DEFAULT_LIMIT;
    let dbResult = _retrieveWoundList(offset, limit);
}

const addWound = async (req: express.Request, res: express.Response) => {}
const editWound = async (req: express.Request, res: express.Response) => {}
const deleteWound = async (req: express.Request, res: express.Response) => {}

export {
    retrieveWoundList,
    addWound,
    editWound,
    deleteWound
}