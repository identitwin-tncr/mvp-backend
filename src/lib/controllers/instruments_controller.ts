import express from 'express';
import { DEFAULT_LIMIT, DEFAULT_OFFSET } from '../../util/common_utils';
import { 
    _addInstrument, 
    _deleteInstrument, 
    _editInstrument, 
    _retrieveInstrumentList } from '../queries/instruments_queries';

import { StatusCodes } from 'http-status-codes';
import {InstrumentBody, InstrumentDatabase} from 'types';
import { formatError, formatInstrument, formatPagination } from '../../util/formatter_util';

const retrieveInstrumentList = async (req: express.Request, res: express.Response) => {
    const offset: number = req.query.offset ? parseInt(req.query.offset as string) : DEFAULT_OFFSET;
    const limit: number = req.query.limit ? parseInt(req.query.limit as string) : DEFAULT_LIMIT;
    const blockId: number = req.query.blockId ? parseInt(req.query.blockId as string) : null;
    _retrieveInstrumentList(offset, limit+1,blockId)
    .then(result => {
        const items = result[0][0] as InstrumentDatabase[];
        res.status(StatusCodes.OK).send(formatPagination(items.map((item: InstrumentDatabase) => formatInstrument(item)),limit))
    })
    .catch(err => {
        console.error(err)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(formatError("No fue posible recuperar las frecuencias de monitoreo"))
    })
}
const addInstrument = async (req: express.Request, res: express.Response) => {
    let data: InstrumentBody = req.body; 
    _addInstrument(data)
    .then(successful => {
        if(successful){
            res.sendStatus(StatusCodes.CREATED);
        }else{
            res.status(StatusCodes.BAD_REQUEST).send(formatError("El código o nombre del instrumento proveído ya ha sido registrado en el sistema"))
        }
    })
    .catch(err => {
        console.error(err)
        switch (err.errno) {
            case 1062:
                res.status(StatusCodes.BAD_REQUEST).send(formatError("El código o nombre del instrumento ya ha sido registrado en el sistema"))
                break;
            default:
                res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(formatError("No fue posible crear el instrumento"))
        }
    })

}
const editInstrument = async (req: express.Request, res: express.Response) => {
    const id: number = parseInt(req.params.id as string);
    let data: InstrumentBody = req.body; 
    _editInstrument(id, data)
    .then(successful => {
        switch (successful) {
            case 0: {
                res.sendStatus(StatusCodes.ACCEPTED);
                break;
            }
            case 1: {
                res.status(StatusCodes.BAD_REQUEST).send(formatError("El código del instrumento proveído ya ha sido registrado en el sistema"))
                break;
            }
            case 2: {
                res.status(StatusCodes.NOT_FOUND).send(formatError("El instrumento asociado al identificador proveído no existe"));
            }
        }
    })
    .catch(err => {
        console.error(err)
        switch (err.errno) {
            case 1452:
                res.status(StatusCodes.CONFLICT).send(formatError("El instrumento a actualizar trata de referenciar a una variable no registrada en el sistema"));
                break;
            default:
                res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(formatError("No fue posible editar el elemento"))
                break;
        }
    })

}
const deleteInstrument = async (req: express.Request, res: express.Response) => {
    const id: number = parseInt(req.params.id as string);
    _deleteInstrument(id)
    .then(result => {
        if (result[0].affectedRows >= 1) {
            res.sendStatus(StatusCodes.ACCEPTED);
        } else {
            res.status(StatusCodes.NOT_FOUND).send(formatError('El instrumento a eliminar no existe.'));
        }
    })
    .catch(err => {
        console.error(err);
        res.status(StatusCodes.CONFLICT).send(formatError("El instrumento no puede eliminarse"))
    })

}

export {
    retrieveInstrumentList,
    addInstrument,
    editInstrument,
    deleteInstrument
}