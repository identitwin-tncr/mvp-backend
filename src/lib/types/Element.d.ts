import {Block, Catalog, ElementType, Orientation} from "./Catalog"
import {WoundElement} from "./Wound";

export type ElementBody = {
    code: string;
    number?: string;
    orientationId?: number;
    cardinalPointId?: number;
    elementTypeId: number;
    blockIds: number[];
}

export type ElementDatabase = {
    ID: number;
    CODE: string;
    NUMBER: number;
    ORIENTATION_ID: number;
    ORIENTATION: string;
    CARDINAL_POINT_ID: number;
    CARDINAL_POINT: string;
    ELEMENT_TYPE_ID: number;
    ELEMENT_TYPE: string;
    TECHNOLOGICAL_UNIT_ID: number;
    TECHNOLOGICAL_UNIT: string;
    BLOCK_ID: number;
    BLOCK: string;
    BLOCK_CODE: string;
    BLOCK_FLOOR: number;
}



export type Element = {
    id: number;
    code: string;
    number?: number;
    orientation: Catalog;
    cardinalPoint: Catalog;
    elementType: {
        id: number;
        value: string;
        technologicalUnit: Catalog;
    },
    block: Catalog | Catalog[] | Block
    alarms?: any[];
}

export type ElementAlarm = {
    id: number;
    code: string;
    number?: number;
    orientation: Catalog;
    cardinalPoint: Catalog;
    elementType: {
        id?: number;
        value: string;
        technologicalUnit: Catalog;
    },
    wounds?: WoundElement[]
}

export type ElementAlarmDatabase = {
    ID: number;
    CODE: string;
    NUMBER: number;
    ORIENTATION: string;
    CARDINAL_POINT: string;
    ELEMENT_TYPE: string;
    TECHNOLOGICAL_UNIT: string;
    MATERIAL: string;
    MIN_RANGE: number;
    MIN_AFFECTED: number;
    MAX_AFFECTED: number;
    MAX_RANGE: number;
    UNIT: string;
    WOUND: string;
}
