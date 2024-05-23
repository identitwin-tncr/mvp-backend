import { addInstrument, deleteInstrument, editInstrument, retrieveInstrumentList } from "../controllers/instruments_controller";

const router = require('express').Router();

/*
 *****************************************************
 **************** ROUTE GET REQUESTS  ****************
 *****************************************************
 */

router.get('/', retrieveInstrumentList)

/*
 ******************************************************
 **************** ROUTE POST REQUESTS  ****************
 ******************************************************
 */

router.post('/', addInstrument)

/*
 *****************************************************
 **************** ROUTE PUT REQUESTS  ****************
 *****************************************************
 */

router.put('/:id', editInstrument)

/*
 ********************************************************
 **************** ROUTE DELETE REQUESTS  ****************
 ********************************************************
 */

router.delete('/:id', deleteInstrument)

export default router;
