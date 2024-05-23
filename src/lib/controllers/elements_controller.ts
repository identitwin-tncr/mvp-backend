import express from 'express';
import { FieldPacket, ResultSetHeader } from 'mysql2';
import { DEFAULT_LIMIT, DEFAULT_OFFSET } from '../../util/common_utils';
import { _addElement, _deleteElement, _editElement, _retrieveElementList, _retrieveElementsOnWatchList } from '../queries/elements_queries';
import { Element, ElementItem } from '../types/element';

const retrieveElementList = async (req: express.Request, res: express.Response) => {
    const offset: number = req.query.offset ? parseInt(req.query.offset as string) : DEFAULT_OFFSET;
    const limit: number = req.query.limit ? parseInt(req.query.limit as string) : DEFAULT_LIMIT;
    let dbResult = _retrieveElementList(offset, limit);
    let result: ElementItem;
}
const retrieveElementsOnWatchList = async (req: express.Request, res: express.Response) => {
    const offset: number = req.query.offset ? parseInt(req.query.offset as string) : DEFAULT_OFFSET;
    const limit: number = req.query.limit ? parseInt(req.query.limit as string) : DEFAULT_LIMIT;
    let dbResult = _retrieveElementsOnWatchList(offset, limit);
}
const addElement = async (req: express.Request, res: express.Response) => {
    let data: Element = req.body; 
    let dbResult = _addElement(data);

}
const editElement = async (req: express.Request, res: express.Response) => {
    const id: number = parseInt(req.params.id as string);
    let data: Element = req.body; 
    let dbResult = _editElement(id, data);

}
const deleteElement = async (req: express.Request, res: express.Response) => {
    const id: number = parseInt(req.params.id as string);
    let dbResult = _deleteElement(id);

}

export {
    retrieveElementList,
    retrieveElementsOnWatchList,
    addElement,
    editElement,
    deleteElement
}