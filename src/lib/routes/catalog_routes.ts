import { 
    addMaterial, 
    addMonitoringVariable, 
    deleteMaterial, 
    deleteMonitoringVariable, 
    editMaterial, 
    editMonitoringVariable, 
    retrieveBlockList, 
    retrieveCardinalPointList, 
    retrieveElementTypeList, 
    retrieveInstrumentTypeList, 
    retrieveMaterialList, 
    retrieveMonitoringFrecuencyList, 
    retrieveMonitoringVariableList, 
    retrieveOrientationList, 
    retrieveTechnicalUnitList} from "../controllers/catalog_controller";

const router = require('express').Router();

/*
 *****************************************************
 **************** ROUTE GET REQUESTS  ****************
 *****************************************************
 */

router.get('/monitoring-variables', retrieveMonitoringVariableList)
router.get('/materials', retrieveMaterialList)
router.get('/blocks', retrieveBlockList)
router.get('/technical-units', retrieveTechnicalUnitList)
router.get('/orientations', retrieveOrientationList)
router.get('/cardinal-points', retrieveCardinalPointList)
router.get('/element-types', retrieveElementTypeList)
router.get('/instrument-types', retrieveInstrumentTypeList)
router.get('/monitoring-frecuencies', retrieveMonitoringFrecuencyList)

/*
 ******************************************************
 **************** ROUTE POST REQUESTS  ****************
 ******************************************************
 */

router.post('/monitoring-variable', addMonitoringVariable)
router.post('/material', addMaterial)
 
/*
 *****************************************************
 **************** ROUTE PUT REQUESTS  ****************
 *****************************************************
 */

router.put('/monitoring-variable/:id', editMonitoringVariable)
router.put('/material/:id', editMaterial)

/*
 ********************************************************
 **************** ROUTE DELETE REQUESTS  ****************
 ********************************************************
 */

router.delete('/monitoring-variable/:id', deleteMonitoringVariable)
router.delete('/material/:id', deleteMaterial)

export default router;
