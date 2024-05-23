export type MonitoringVariable = 
{
    id?: number,
    name: string,
    code: string
}

export type Material =
{
    id?: number,
    name: string,
    code: string
}

export type Block =
{
    id?: number,
    name: string,
    code: string,
    floor: number
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
    name: string,
    code: string,
    TechnicalUnit: TecnicalUnit
}

export type InstrumentType =
{
    id?: number,
    type: string
}

export type MonitoringFrecuency =
{
    id?: number,
    frecuency: string
}