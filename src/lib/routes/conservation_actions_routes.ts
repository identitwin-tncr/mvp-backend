import { 
    addConservationAction, 
    deleteConservationAction, 
    editConservationAction, 
    retrieveConservationActionList } from "../controllers/conservation_actions_controller";

const router = require('express').Router();

/*
 *****************************************************
 **************** ROUTE GET REQUESTS  ****************
 *****************************************************
 */

router.get('/', retrieveConservationActionList)

/*
 ******************************************************
 **************** ROUTE POST REQUESTS  ****************
 ******************************************************
 */

router.post('/', addConservationAction)

/*
 *****************************************************
 **************** ROUTE PUT REQUESTS  ****************
 *****************************************************
 */

router.put('/:id', editConservationAction)

/*
 ********************************************************
 **************** ROUTE DELETE REQUESTS  ****************
 ********************************************************
 */

router.delete('/:id', deleteConservationAction)

export default router;
