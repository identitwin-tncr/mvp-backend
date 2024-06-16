import express from 'express';
import { DEFAULT_LIMIT, DEFAULT_OFFSET } from '../../util/common_utils';
import { 
    _addInstrument, 
    _deleteInstrument, 
    _editInstrument, 
    _retrieveInstrumentList } from '../queries/instruments_queries';
import { Instrument } from 'types';

const retrieveInstrumentList = async (req: express.Request, res: express.Response) => {
    const offset: number = req.query.offset ? parseInt(req.query.offset as string) : DEFAULT_OFFSET;
    const limit: number = req.query.limit ? parseInt(req.query.limit as string) : DEFAULT_LIMIT;
    let dbResult = _retrieveInstrumentList(offset, limit);
}
const addInstrument = async (req: express.Request, res: express.Response) => {
    let data: Instrument = req.body; 
    let dbResult = _addInstrument(data);

}
const editInstrument = async (req: express.Request, res: express.Response) => {
    const id: number = parseInt(req.params.id as string);
    let data: Instrument = req.body; 
    let dbResult = _editInstrument(id, data);

}
const deleteInstrument = async (req: express.Request, res: express.Response) => {
    const id: number = parseInt(req.params.id as string);
    let dbResult = _deleteInstrument(id);

}

export {
    retrieveInstrumentList,
    addInstrument,
    editInstrument,
    deleteInstrument
}