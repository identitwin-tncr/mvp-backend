import express from 'express';
import { FieldPacket, ResultSetHeader } from 'mysql2';
import { DEFAULT_LIMIT, DEFAULT_OFFSET } from '../../util/common_utils';
import { _retrieveInstrumentList } from '../queries/instruments_queries';

const retrieveInstrumentList = async (req: express.Request, res: express.Response) => {
    const offset: number = req.query.offset ? parseInt(req.query.offset as string) : DEFAULT_OFFSET;
    const limit: number = req.query.limit ? parseInt(req.query.limit as string) : DEFAULT_LIMIT;
    let dbResult = _retrieveInstrumentList(offset, limit);
}
const addInstrument = async (req: express.Request, res: express.Response) => {}
const editInstrument = async (req: express.Request, res: express.Response) => {}
const deleteInstrument = async (req: express.Request, res: express.Response) => {}

export {
    retrieveInstrumentList,
    addInstrument,
    editInstrument,
    deleteInstrument
}