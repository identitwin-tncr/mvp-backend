export type MonitoringVariable = 
{
    id?: number,
    value: string,
    code: string,
    unit: string
}

export type MonitoringVariableDatabase =
{
    ID: number,
    NAME: string,
    CODE: string,
    UNIT: string
}

export type Catalog =
{
    id?: number,
    value: string,
    code?: string
}
export type CatalogDatabase =
{
    ID: number,
    NAME: string,
    CODE: string,
}

export type Material =
{
    id?: number,
    name: string,
    code: string
}

export type MaterialDatabase =
{
    ID: number,
    NAME: string,
    CODE: string,
}

export type Block =
{
    id?: number,
    value: string,
    code?: string,
    floor?: number
}

export type BlockDatabase =
{
    ID: number,
    NAME: string,
    CODE: string,
    FLOOR: number
}

export type TecnicalUnit =
{
    id?: number,
    name: string,
    code: string
}

export type Orientation =
{
    id?: number,
    name: string,
    code: string
}

export type CardinalPoint =
{
    id?: number,
    name: string,
    code: string
}

export type ElementType =
{
    id?: number,
    value: string,
    code: string,
    technicalUnitId: TecnicalUnit
}


export type ElementTypeDatabase =
{
    ID: number,
    NAME: string,
    CODE: string,
    TECHNICAL_UNIT_ID: TecnicalUnit
}

export type InstrumentType =
{
    id: number,
    value: string
}

export type MonitoringFrecuency =
{
    id: number,
    value: string
}
