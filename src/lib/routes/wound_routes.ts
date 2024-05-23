import { addWound, deleteWound, editWound, retrieveWoundList } from "../controllers/wounds_controller";

const router = require('express').Router();

/*
 *****************************************************
 **************** ROUTE GET REQUESTS  ****************
 *****************************************************
 */

router.get('/', retrieveWoundList)

/*
 ******************************************************
 **************** ROUTE POST REQUESTS  ****************
 ******************************************************
 */

router.post('/', addWound)

/*
 *****************************************************
 **************** ROUTE PUT REQUESTS  ****************
 *****************************************************
 */

router.put('/:id', editWound)

/*
 ********************************************************
 **************** ROUTE DELETE REQUESTS  ****************
 ********************************************************
 */

router.delete('/:id', deleteWound)

export default router;
