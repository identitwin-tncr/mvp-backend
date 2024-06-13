import {Catalog} from "./Catalog";

export type ElementDatabase = {
    ID: number;
    CODE: string;
    NUMBER: number;
    ORIENTATION: string;
    ORIENTATION_ID: number;
    CARDINAL_POINT: string;
    CARDINAL_POINT_ID: number;
    ELEMENT_TYPE: string;
    ELEMENT_TYPE_ID: number;
    TECHNOLOGICAL_UNIT: string;
    TECHNOLOGICAL_UNIT_ID: number;
    BLOCK: string;
    BLOCK_ID: number;
    BLOCK_CODE: string;
}

export type Element = {
    id: number;
    code: string;
    number: number;
    orientation: Catalog;
    cardinalPoint: Catalog;
    elementType: {
        id: number;
        value: string;
        technologicalUnit: Catalog
    }
    block: Catalog | [Catalog]
}

export type ElementBody = {
    code: string;
    number: number;
    orientationId: number;
    cardinalPointId: number;
    elementTypeId: number;
    blockIds: number[]
}
