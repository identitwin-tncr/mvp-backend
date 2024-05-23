import { Block, CardinalPoint, ElementType, Orientation } from "./catalog"

export type Element = 
{
    id?: number,
    name: string,
    code: string,
    number?: string,
    orientationId?: number,
    cardinalPointId?: number,
    elementTypeId?: number,
    blockId?: number
}

export type ElementItem = 
{
    id?: number,
    name: string,
    code: string,
    number?: string,
    orientation: Orientation,
    cardinalPoint: CardinalPoint,
    elementType: ElementType,
    block: Block
}