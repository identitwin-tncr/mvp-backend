import express from 'express';
import { FieldPacket, ResultSetHeader } from 'mysql2';
import {
    _addMaterial, 
    _addMonitoringVariable, 
    _deleteMaterial, 
    _deleteMonitoringVariable, 
    _editMaterial, 
    _editMonitoringVariable, 
    _retrieveBlockList, 
    _retrieveCardinalPointList, 
    _retrieveElementTypeList, 
    _retrieveInstrumentTypeList, 
    _retrieveMaterialList, 
    _retrieveMonitoringFrecuencyList, 
    _retrieveMonitoringVariableList, 
    _retrieveOrientationList, 
    _retrieveTechnicalUnitList } from '../queries/catalog_queries';
import { DEFAULT_LIMIT, DEFAULT_OFFSET } from '../../util/common_utils';
import { Block, BlockDatabase, CardinalPoint, CatalogDatabase, ElementType, ElementTypeDatabase, InstrumentType, Material, MaterialDatabase, MonitoringVariable, MonitoringVariableDatabase, Orientation, TecnicalUnit } from '../types/catalog';
import { StatusCodes } from 'http-status-codes';
import { formatBlock, formatCatalog, formatElementType, formatError, formatPagination, formatVariable } from '../../util/formatter_util';

const retrieveMonitoringVariableList = async (req: express.Request, res: express.Response) => {
    const offset: number = req.query.offset ? parseInt(req.query.offset as string) : DEFAULT_OFFSET;
    const limit: number = req.query.limit ? parseInt(req.query.limit as string) : DEFAULT_LIMIT;
    _retrieveMonitoringVariableList(offset, limit+1)
    .then(result => {
        const variables = result[0] as MonitoringVariableDatabase[];
        res.status(StatusCodes.OK).send(formatPagination(variables.map((variable: MonitoringVariableDatabase) => formatVariable(variable)),limit))
    })
    .catch(err => {
        console.error(err)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(formatError("No fue posible recuperar las variables"))
    })
}
const retrieveMaterialList = async (req: express.Request, res: express.Response) => {
    const offset: number = req.query.offset ? parseInt(req.query.offset as string) : DEFAULT_OFFSET;
    const limit: number = req.query.limit ? parseInt(req.query.limit as string) : DEFAULT_LIMIT;
    _retrieveMaterialList(offset, limit+1)
    .then(result => {
        const items = result[0] as CatalogDatabase[];
        res.status(StatusCodes.OK).send(formatPagination(items.map((material: CatalogDatabase) => formatCatalog(material)),limit))
    })
    .catch(err => {
        console.error(err)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(formatError("No fue posible recuperar los materiales"))
    })
}

const retrieveBlockList = async (req: express.Request, res: express.Response) => {
    const offset: number = req.query.offset ? parseInt(req.query.offset as string) : DEFAULT_OFFSET;
    const limit: number = req.query.limit ? parseInt(req.query.limit as string) : DEFAULT_LIMIT;
    _retrieveBlockList(offset, limit+1)
    .then(result => {
        const blocks = result[0] as BlockDatabase[];
        res.status(StatusCodes.OK).send(formatPagination(blocks.map((block: BlockDatabase) => formatBlock(block)),limit))
    })
    .catch(err => {
        console.error(err)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(formatError("No fue posible recuperar los bloques"))
    })
}

const retrieveTechnicalUnitList = async (req: express.Request, res: express.Response) => {
    const offset: number = req.query.offset ? parseInt(req.query.offset as string) : DEFAULT_OFFSET;
    const limit: number = req.query.limit ? parseInt(req.query.limit as string) : DEFAULT_LIMIT;
    _retrieveTechnicalUnitList(offset, limit+1)
    .then(result => {
        const items = result[0] as CatalogDatabase[];
        res.status(StatusCodes.OK).send(formatPagination(items.map((item: CatalogDatabase) => formatCatalog(item)),limit))
    })
    .catch(err => {
        console.error(err)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(formatError("No fue posible recuperar las unidades técnicas"))
    })
}

const retrieveOrientationList = async (req: express.Request, res: express.Response) => {
    const offset: number = req.query.offset ? parseInt(req.query.offset as string) : DEFAULT_OFFSET;
    const limit: number = req.query.limit ? parseInt(req.query.limit as string) : DEFAULT_LIMIT;
    _retrieveOrientationList(offset, limit+1)
    .then(result => {
        const items = result[0] as CatalogDatabase[];
        res.status(StatusCodes.OK).send(formatPagination(items.map((item: CatalogDatabase) => formatCatalog(item)),limit))
    })
    .catch(err => {
        console.error(err)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(formatError("No fue posible recuperar las orientaciones"))
    })
}

const retrieveCardinalPointList = async (req: express.Request, res: express.Response) => {
    const offset: number = req.query.offset ? parseInt(req.query.offset as string) : DEFAULT_OFFSET;
    const limit: number = req.query.limit ? parseInt(req.query.limit as string) : DEFAULT_LIMIT;
    _retrieveCardinalPointList(offset, limit+1)
    .then(result => {
        const items = result[0] as CatalogDatabase[];
        res.status(StatusCodes.OK).send(formatPagination(items.map((item: CatalogDatabase) => formatCatalog(item)),limit))
    })
    .catch(err => {
        console.error(err)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(formatError("No fue posible recuperar los puntos cardinales"))
    })
}

const retrieveElementTypeList = async (req: express.Request, res: express.Response) => {
    const offset: number = req.query.offset ? parseInt(req.query.offset as string) : DEFAULT_OFFSET;
    const limit: number = req.query.limit ? parseInt(req.query.limit as string) : DEFAULT_LIMIT;
    _retrieveElementTypeList(offset, limit+1)
    .then(result => {
        const items = result[0] as ElementTypeDatabase[];
        res.status(StatusCodes.OK).send(formatPagination(items.map((item: ElementTypeDatabase) => formatElementType(item)),limit))
    })
    .catch(err => {
        console.error(err)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(formatError("No fue posible recuperar los tipos de elemento"))
    })
}

const retrieveInstrumentTypeList = async (req: express.Request, res: express.Response) => {
    const offset: number = req.query.offset ? parseInt(req.query.offset as string) : DEFAULT_OFFSET;
    const limit: number = req.query.limit ? parseInt(req.query.limit as string) : DEFAULT_LIMIT;
    _retrieveInstrumentTypeList(offset, limit)
    .then(result => {
        const items = result[0] as CatalogDatabase[];
        res.status(StatusCodes.OK).send(formatPagination(items.map((item: CatalogDatabase) => formatCatalog(item)),limit))
    })
    .catch(err => {
        console.error(err)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(formatError("No fue posible recuperar los tipos de instrumento"))
    })
}

const retrieveMonitoringFrecuencyList = async (req: express.Request, res: express.Response) => {
    const offset: number = req.query.offset ? parseInt(req.query.offset as string) : DEFAULT_OFFSET;
    const limit: number = req.query.limit ? parseInt(req.query.limit as string) : DEFAULT_LIMIT;
    _retrieveMonitoringFrecuencyList(offset, limit)
    .then(result => {
        const items = result[0] as CatalogDatabase[];
        res.status(StatusCodes.OK).send(formatPagination(items.map((item: CatalogDatabase) => formatCatalog(item)),limit))
    })
    .catch(err => {
        console.error(err)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(formatError("No fue posible recuperar las frecuencias de monitoreo"))
    })
}

const addMonitoringVariable = async (req: express.Request, res: express.Response) => {
    let data = req.body as MonitoringVariable;
    _addMonitoringVariable(data)
        .then(result => {
            if(result[0].affectedRows >= 1){
                res.sendStatus(StatusCodes.CREATED);
            }else{
                res.status(StatusCodes.BAD_REQUEST).send(formatError("El código o nombre de la variable proveída ya ha sido registrado en el sistema"))
            }
        })
        .catch(err => {
            console.error(err)
            switch (err.errno) {
                case 1062:
                    res.status(StatusCodes.BAD_REQUEST).send(formatError("El código o nombre de la variable proveída ya ha sido registrado en el sistema"))
                    break;
                default:
                    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(formatError("No fue posible crear la variable"))
            }
        })
}
const addMaterial = async (req: express.Request, res: express.Response) => {
    let data: Material = req.body;
    _addMaterial(data)
        .then(result => {
            if(result[0].affectedRows >= 1){
                res.sendStatus(StatusCodes.CREATED);
            }else{
                res.status(StatusCodes.BAD_REQUEST).send(formatError("El código o nombre del material proveído ya ha sido registrado en el sistema"))
            }
        })
        .catch(err => {
            console.error(err)
            switch (err.errno) {
                case 1062:
                    res.status(StatusCodes.BAD_REQUEST).send(formatError("El código o nombre del material proveído ya ha sido registrado en el sistema"))
                    break;
                default:
                    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(formatError("No fue posible crear el material"))
            }
        })
}

const editMonitoringVariable = async (req: express.Request, res: express.Response) => {
    const id: number = parseInt(req.params.id as string);
    let data: MonitoringVariable = req.body;
    _editMonitoringVariable(id, data)
        .then(result => {
            if(result[0].affectedRows >= 1){
                res.sendStatus(StatusCodes.OK);
            }else{
                res.status(StatusCodes.NOT_FOUND).send(formatError("La variable de monitoreo a editar no fue encontrada en el sistema"))
            }
        })
        .catch(err => {
            console.error(err)
            switch (err.errno) {
                case 1062:
                    res.status(StatusCodes.BAD_REQUEST).send(formatError("El código o nombre de la variable proveída ya está registrado en el sistema"))
                    break;
                default:
                    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(formatError("No fue posible editar la variable"))
            }
        })
}
const editMaterial = async (req: express.Request, res: express.Response) => {
    const id: number = parseInt(req.params.id as string);
    let data: Material = req.body;
    _editMaterial(id, data)
    .then(result => {
        if(result[0].affectedRows >= 1){
            res.sendStatus(StatusCodes.OK);
        }else{
            res.status(StatusCodes.NOT_FOUND).send(formatError("El material a editar no fue encontrado en el sistema"))
        }
    })
    .catch(err => {
        console.error(err)
        switch (err.errno) {
            case 1062:
                res.status(StatusCodes.BAD_REQUEST).send(formatError("El código o nombre del material proveído ya está registrado en el sistema"))
                break;
            default:
                res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(formatError("No fue posible editar el material"))
        }
    })
}

const deleteMonitoringVariable = async (req: express.Request, res: express.Response) => {
    const id: number = parseInt(req.params.id as string);
    _deleteMonitoringVariable(id)
    .then(result => {
        if(result[0].affectedRows >= 1){
            res.sendStatus(StatusCodes.OK);
        }else{
            res.status(StatusCodes.NOT_FOUND).send(formatError("La variable a eliminar no fue encontrada en el sistema"))
        }
    })
    .catch(err => {
        console.error(err)
        switch (err.errno) {
            default:
                res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(formatError("No fue posible eliminar la variable"))
        }
    })
}
const deleteMaterial = async (req: express.Request, res: express.Response) => {
    const id: number = parseInt(req.params.id as string);
    _deleteMaterial(id)
    .then(result => {
        if(result[0].affectedRows >= 1){
            res.sendStatus(StatusCodes.OK);
        }else{
            res.status(StatusCodes.NOT_FOUND).send(formatError("El material a eliminar no fue encontrado en el sistema"))
        }
    })
    .catch(err => {
        console.error(err)
        switch (err.errno) {
            default:
                res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(formatError("No fue posible eliminar el material"))
        }
    })
}

export {
    retrieveMonitoringVariableList,
    retrieveMaterialList,
    retrieveBlockList,
    retrieveTechnicalUnitList,
    retrieveOrientationList,
    retrieveCardinalPointList,
    retrieveElementTypeList,
    retrieveInstrumentTypeList,
    retrieveMonitoringFrecuencyList,
    addMonitoringVariable,
    addMaterial,
    editMonitoringVariable,
    editMaterial,
    deleteMonitoringVariable,
    deleteMaterial
}