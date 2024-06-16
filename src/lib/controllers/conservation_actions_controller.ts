import express from 'express';
import { DEFAULT_LIMIT, DEFAULT_OFFSET } from '../../util/common_utils';
import { 
    _addConservationAction, 
    _deleteConservationAction, 
    _editConservationAction, 
    _retrieveConservationActionList } from '../queries/conservation_actions_queries';
import { ConservationAction } from 'types';

const retrieveConservationActionList = async (req: express.Request, res: express.Response) => {
    const offset: number = req.query.offset ? parseInt(req.query.offset as string) : DEFAULT_OFFSET;
    const limit: number = req.query.limit ? parseInt(req.query.limit as string) : DEFAULT_LIMIT;
    let dbResult = _retrieveConservationActionList(offset, limit);
}
const addConservationAction = async (req: express.Request, res: express.Response) => {
    let data: ConservationAction = req.body;
    let dbResult = _addConservationAction(data);

}
const editConservationAction = async (req: express.Request, res: express.Response) => {
    const id: number = parseInt(req.params.id as string);
    let data: ConservationAction = req.body;
    let dbResult = _editConservationAction(id, data);

}
const deleteConservationAction = async (req: express.Request, res: express.Response) => {
    const id: number = parseInt(req.params.id as string);
    let dbResult = _deleteConservationAction(id);

}

export {
    retrieveConservationActionList,
    addConservationAction,
    editConservationAction,
    deleteConservationAction
}