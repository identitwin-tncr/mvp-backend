import { addElement, deleteElement, editElement, retrieveElementList, retrieveElementsOnWatchList } from "../controllers/elements_controller";

const router = require('express').Router();

/*
 *****************************************************
 **************** ROUTE GET REQUESTS  ****************
 *****************************************************
 */


router.get('/', retrieveElementList)
router.get('/elements-on-watch', retrieveElementsOnWatchList)

/*
 ******************************************************
 **************** ROUTE POST REQUESTS  ****************
 ******************************************************
 */

router.post('/', addElement)

/*
 *****************************************************
 **************** ROUTE PUT REQUESTS  ****************
 *****************************************************
 */

router.put('/:id', editElement)

/*
 ********************************************************
 **************** ROUTE DELETE REQUESTS  ****************
 ********************************************************
 */

router.delete('/:id', deleteElement)

export default router;
