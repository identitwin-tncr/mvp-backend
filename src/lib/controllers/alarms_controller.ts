import express from 'express';
import { DEFAULT_LIMIT, DEFAULT_OFFSET } from '../../util/common_utils';
import {
    _retrieveAlarmDetail,
    _retrieveAlarmElements,
    _retrieveAlarmList
} from '../queries/alarms_queries';
import {AlarmDetailDatabase, AlarmItemDatabase, ElementAlarm, ElementAlarmDatabase, ElementDatabase} from "types";
import {StatusCodes} from "http-status-codes";
import {
    formatAlarmDetail,
    formatAlarmItem,
    formatElement, formatElementAlarm,
    formatError,
    formatPagination
} from "../../util/formatter_util";

const retrieveAlarmList = async (req: express.Request, res: express.Response) => {
    const offset: number = req.query.offset ? parseInt(req.query.offset as string) : DEFAULT_OFFSET;
    const limit: number = req.query.limit ? parseInt(req.query.limit as string) : DEFAULT_LIMIT;
    const variableId: number = req.query.variableId ? parseInt(req.query.variableId as string): null
    const blockId: number = req.query.blockId ? parseInt(req.query.blockId as string): null
    _retrieveAlarmList(offset, limit, variableId, blockId)
        .then(result => {
            const alarms = result[0][0] as AlarmItemDatabase[];
            res.status(StatusCodes.OK).send(formatPagination(alarms.map((alarm: AlarmItemDatabase) => formatAlarmItem(alarm)), limit))
        })
        .catch(err => {
            console.error(err)
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(formatError("No fue posible recuperar las alarmas solicitadas"))
        })
}

const retrieveAlarmDetail = async (req: express.Request, res: express.Response) => {
    const id = parseInt(req.params.id as string);
    _retrieveAlarmDetail(id)
        .then(result => {
            const data = result[0][0] as AlarmDetailDatabase[]
            if(data.length === 0){
                res.status(StatusCodes.NOT_FOUND).send(formatError("La alarma asociada al identificador proveído no existe"));
            }else{
                res.status(StatusCodes.OK).send(formatAlarmDetail(data[0]));
            }
        })
        .catch(err => {
            console.error(err)
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(formatError("No fue posible recuperar el detalla de alarma solicitado"))
        })
}

const retrieveAlarmDetailElements = async (req: express.Request, res: express.Response) => {
    const id = parseInt(req.params.id as string);
    _retrieveAlarmElements(id)
        .then(result => {
            const data = result[0][0] as ElementAlarmDatabase[]
            res.status(StatusCodes.OK).send(formatElementAlarm(data));

        })
        .catch(err => {
            console.error(err)
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(formatError("No fue posible recuperar los elementos afectados de la alarma solicitada"))
        })
}


export {
    retrieveAlarmList,
    retrieveAlarmDetail,
    retrieveAlarmDetailElements
}
