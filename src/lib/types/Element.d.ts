import {Catalog, ElementType, Orientation} from "./Catalog"

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
    block: Catalog | Catalog[]
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
    block?: Catalog | Catalog[]
    alarms?: any[];
    wounds?: WoundElement[]
}