import {ElementDatabase, Element} from "types";
import {DEFAULT_LIMIT} from "./common_utils";


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
    if (items.length >= limit + 1) {
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

export {
    formatElement,
    formatPagination,
    formatError
}