
import { Block, InstrumentType, MonitoringFrecuency, MonitoringVariable } from "./Catalog"

export type InstrumentDatabase =
{
    INSTRUMENT_ID: number,
    INSTRUMENT_NAME: string,
    INSTRUMENT_CODE: string,
    INSTRUMENT_MODEL: string,
    INSTRUMENT_ASSET_CODE: string,
    BLOCK_ID: number,
    BLOCK_NAME: string,
    MONITORING_FREQUENCY_ID: number,
    MONITORING_FREQUENCY_NAME: string,
    INSTRUMENT_TYPE_ID: number,
    INSTRUMENT_TYPE_NAME: string
}

export type InstrumentBody =
{
    id?: number,
    name: string,
    code: string
    model: string,
    assetCode?: string,
    monitoringFrecuencyId?: number,
    blockId?: number,
    instrumentTypeId?: number,
    monitoringVariableIds: number[]
}

export type InstrumentItem =
{
    id: number,
    value: string,
    code: string
    model: string,
    assetCode: string,
    monitoringFrecuency: MonitoringFrecuency,
    block: Block,
    instrumentType: InstrumentType
}