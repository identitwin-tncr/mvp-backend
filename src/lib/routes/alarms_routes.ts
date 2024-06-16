import {
    retrieveAlarmDetail,
    retrieveAlarmDetailElements,
    retrieveAlarmList
} from "../controllers/alarms_controller";

const router = require('express').Router();

/*
 *****************************************************
 **************** ROUTE GET REQUESTS  ****************
 *****************************************************
 */

router.get('/', retrieveAlarmList)
router.get('/:id', retrieveAlarmDetail)
router.get('/elements/:id', retrieveAlarmDetailElements)

/*
 *****************************************************
 **************** ROUTE PUT REQUESTS  ****************
 *****************************************************
 */

router.put('/check/:id')


export default router;
