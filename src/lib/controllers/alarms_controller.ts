import express from 'express';
import { FieldPacket, ResultSetHeader } from 'mysql2';
import { DEFAULT_LIMIT, DEFAULT_OFFSET } from '../../util/common_utils';
import { _retrieveAlarmList} from '../queries/alarms_queries';

const retrieveAlarmList = async (req: express.Request, res: express.Response) => {
    const offset: number = req.query.offset ? parseInt(req.query.offset as string) : DEFAULT_OFFSET;
    const limit: number = req.query.limit ? parseInt(req.query.limit as string) : DEFAULT_LIMIT;
    let dbResult = _retrieveAlarmList(offset, limit);
}

const retrieveAlarmActionList = async (req: express.Request, res: express.Response) => {}

export {
    retrieveAlarmList,
    retrieveAlarmActionList
}
