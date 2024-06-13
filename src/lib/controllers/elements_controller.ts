import express from 'express';
import {StatusCodes} from 'http-status-codes'

import { DEFAULT_LIMIT, DEFAULT_OFFSET } from '../../util/common_utils';
import {
    _addElement, _deleteElement,
    _editElement,
    _retrieveElementList,
} from '../queries/elements_queries';
import {ElementBody, ElementDatabase} from "types";
import {formatElement, formatError, formatPagination} from "../../util/formatter_util";
import * as http from "http";

const retrieveElementList = async (req: express.Request, res: express.Response) => {
    const offset: number = req.query.offset ? parseInt(req.query.offset as string) : DEFAULT_OFFSET;
    const limit: number = req.query.limit ? parseInt(req.query.limit as string) : DEFAULT_LIMIT;
    const blockId: number = req.query.blockId ? parseInt(req.query.blockId as string): null;
    const technologicalUnitId: number = req.query.technologicalUnitId ? parseInt(req.query.technologicalUnitId as string): null;

    // Added one to the limit to check if theres enough data for another page
    _retrieveElementList(offset, limit + 1, blockId, technologicalUnitId)
        .then(result => {
            const elements = result[0][0] as ElementDatabase[];
            res.status(StatusCodes.OK).send(formatPagination(elements.map((element: ElementDatabase) => formatElement(element)), limit))
        })
        .catch(err => {
            console.error(err)
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(formatError("No fue posible recuperar los elementos solicitados"))
        })
}

const addElement = async (req: express.Request, res: express.Response) => {
    const data = req.body as ElementBody;

    _addElement(data)
        .then(successful => {
            if(successful){
                res.sendStatus(StatusCodes.CREATED);
            }else{
                res.status(StatusCodes.BAD_REQUEST).send(formatError("El código del elemento proveído ya ha sido registrado en el sistema"))
            }
        })
        .catch(err => {
            console.error(err)
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(formatError("No fue posible crear el elemento"))
        })
}

const editElement = async (req: express.Request, res: express.Response) => {
    const id = parseInt(req.params.id as string);
    const data = req.body as ElementBody;

    _editElement(id, data)
        .then(successful => {
            switch (successful) {
                case 0: {
                    res.sendStatus(StatusCodes.ACCEPTED);
                    break;
                }
                case 1: {
                    res.status(StatusCodes.BAD_REQUEST).send(formatError("El código del elemento proveído ya ha sido registrado en el sistema"))
                    break;
                }
                case 2: {
                    res.status(StatusCodes.NOT_FOUND).send(formatError("El elemento asociado al identificador proveído no existe"));
                }
            }
        })
        .catch(err => {
            console.error(err)
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(formatError("No fue posible editar el elemento"))
        })
}

const deleteElement = async (req: express.Request, res: express.Response) => {
    const id = parseInt(req.params.id as string);

    _deleteElement(id)
        .then(result => {
            if (result[0].affectedRows >= 1) {
                res.sendStatus(StatusCodes.ACCEPTED);
            } else {
                res.status(StatusCodes.NOT_FOUND).send(formatError('El elemento a eliminar no existe.'));
            }
        })
        .catch(err => {
            console.error(err);
            res.status(StatusCodes.CONFLICT).send(formatError("El elemento no puede eliminarse debido a que se encuentra relacionado a una alarma"))
        })
}

export {
    retrieveElementList,
    addElement,
    editElement,
    deleteElement
}