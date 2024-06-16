import { Block, MonitoringFrecuency } from "./Catalog"

export type Instrument =
{
    id?: number,
    name: string,
    code: string
    model: string,
    activeCode?: string,
    monitoringFrecuencyId?: number,
    blockId?: number,
    instrumentTypeId?: number
}

export type InstrumentItem =
{
    id: number,
    name: string,
    code: string
    model: string,
    activeCode: string,
    monitoringFrecuency: MonitoringFrecuency,
    blockId: Block,
    instrumentTypeId: InstanceType
}