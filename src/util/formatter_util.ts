import {
    ElementDatabase,
    Element,
    MonitoringVariableDatabase,
    MonitoringVariable,
    Catalog,
    CatalogDatabase,
    BlockDatabase,
    Block,
    ElementTypeDatabase,
    ElementType,
    MonitoringFrecuency,
    InstrumentType,
    InstrumentDatabase, InstrumentItem
} from "types";


const formatElement = (element: ElementDatabase) : Element => {
    return {
        id: element.ID,
        code: element.CODE,
        number: element.NUMBER,
        orientation: {
            id: element.ORIENTATION_ID,
            value: element.ORIENTATION
        },
        cardinalPoint: {
            id: element.CARDINAL_POINT_ID,
            value: element.CARDINAL_POINT
        },
        elementType: {
            id: element.ELEMENT_TYPE_ID,
            value: element.ELEMENT_TYPE,
            technologicalUnit: {
                id: element.TECHNOLOGICAL_UNIT_ID,
                value: element.TECHNOLOGICAL_UNIT
            }
        },
        block: {
            id: element.BLOCK_ID,
            value: element.BLOCK,
            code: element.BLOCK_CODE
        }
    }
}

const formatPagination = (items: any[], limit: number) => {
    // If there isn't a custom limit set, return whole list
    if (items.length > limit + 1) {
        return items;
    }

    // Check if list has next page
    let hasNext: boolean = false;
    if (items.length == limit + 1) {
        hasNext = true;
        items.pop();
    }

    // Return formatted paginated list
    return {
        items,
        hasNext
    }
}

const formatError = (message: string) => {
    return {
        message
    }
}

const formatVariable = (variable: MonitoringVariableDatabase): MonitoringVariable => {
    return {
        id: variable.ID,
        value: variable.NAME,
        code: variable.CODE,
        unit: variable.UNIT
    }
}

const formatCatalog = (item: CatalogDatabase): Catalog => {
    return {
        id: item.ID,
        value: item.NAME,
        code: item.CODE
    }
}


const formatElementType = (item: ElementTypeDatabase): ElementType => {
    return {
        id: item.ID,
        value: item.NAME,
        code: item.CODE,
        technicalUnitId: item.TECHNICAL_UNIT_ID
    }
}

const formatBlock = (item: BlockDatabase): Block => {
    return {
        id: item.ID,
        value: item.NAME,
        code: item.CODE,
        floor: item.FLOOR
    }
}

const formatInstrument = (item: InstrumentDatabase): InstrumentItem => {
    console.log(item)
    return {
        id: item.INSTRUMENT_ID,
        value: item.INSTRUMENT_NAME,
        code: item.INSTRUMENT_CODE,
        model: item.INSTRUMENT_MODEL,
        assetCode: item.INSTRUMENT_ASSET_CODE,
        monitoringFrecuency: {
            id: item.MONITORING_FREQUENCY_ID,
            value: item.MONITORING_FREQUENCY_NAME
        } as MonitoringFrecuency,
        block:{
            id: item.BLOCK_ID,
            value: item.BLOCK_NAME
        } as Block,
        instrumentType: {
            id: item.INSTRUMENT_TYPE_ID,
            value: item.INSTRUMENT_TYPE_NAME
        } as InstrumentType

    } as InstrumentItem
}

export {
    formatElement,
    formatPagination,
    formatError,
    formatVariable,
    formatCatalog,
    formatBlock,
    formatElementType,
    formatInstrument
}