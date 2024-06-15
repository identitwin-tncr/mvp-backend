<<<<<<< HEAD
import {ElementDatabase, Element} from "types";
=======
import {ElementDatabase, Element, MonitoringVariableDatabase, MonitoringVariable, Catalog, CatalogDatabase, BlockDatabase, Block, ElementTypeDatabase, ElementType} from "types";
import {DEFAULT_LIMIT} from "./common_utils";
>>>>>>> e488c9f32bc2f0feed8eb39be26f6c5a8c6778d1


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

export {
    formatElement,
    formatPagination,
    formatError,
    formatVariable,
    formatCatalog,
    formatBlock,
    formatElementType
}