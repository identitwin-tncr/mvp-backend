import express from 'express';
import { DEFAULT_LIMIT, DEFAULT_OFFSET } from '../../util/common_utils';
import { 
    _addWound, 
    _deleteWound, 
    _editWound, 
    _retrieveWoundList } from '../queries/wounds_queries';
import { Wound } from 'types';

const retrieveWoundList = async (req: express.Request, res: express.Response) => {
    const offset: number = req.query.offset ? parseInt(req.query.offset as string) : DEFAULT_OFFSET;
    const limit: number = req.query.limit ? parseInt(req.query.limit as string) : DEFAULT_LIMIT;
    let dbResult = _retrieveWoundList(offset, limit);
    let resul: Wound;
}

const addWound = async (req: express.Request, res: express.Response) => {
    let data: Wound = req.body; 
    let dbResult = _addWound(data);
}
const editWound = async (req: express.Request, res: express.Response) => {
    const id: number = parseInt(req.params.id as string);
    let data: Wound = req.body; 
    let dbResult = _editWound(id, data);

}
const deleteWound = async (req: express.Request, res: express.Response) => {
    const id: number = parseInt(req.params.id as string);
    let dbResult = _deleteWound(id);

}

export {
    retrieveWoundList,
    addWound,
    editWound,
    deleteWound
}