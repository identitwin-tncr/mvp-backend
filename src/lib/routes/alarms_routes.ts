import { retrieveAlarmActionList, retrieveAlarmList} from "../controllers/alarms_controller";

const router = require('express').Router();

/*
 *****************************************************
 **************** ROUTE GET REQUESTS  ****************
 *****************************************************
 */

router.get('/', retrieveAlarmList)
router.get('/actions', retrieveAlarmActionList) //check a specific alarm actions

/*
 ******************************************************
 **************** ROUTE POST REQUESTS  ****************
 ******************************************************
 */

router.post('/')

/*
 *****************************************************
 **************** ROUTE PUT REQUESTS  ****************
 *****************************************************
 */

router.put('/:id')

/*
 ********************************************************
 **************** ROUTE DELETE REQUESTS  ****************
 ********************************************************
 */

router.delete('/:id')

export default router;
