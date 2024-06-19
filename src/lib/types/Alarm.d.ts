import {Catalog, MonitoringVariable} from "./catalog"

export type Alarm = {
    id: number;
    raisedDate: string;
    status: string;
    variable: MonitoringVariable;
    instrument: string;
    maxValue: number;
    minValue: number;
    block: Catalog;
    from?: string;
    to?: string;
    averageValue?: number;
    varianceValue?: number;
}

export type AlarmItemDatabase = {
    ID: number;
    RAISED_DATE: string;
    STATUS: string;
    VARIABLE: string;
    VARIABLE_UNIT: string;
    INSTRUMENT: string;
    MIN_VALUE: number;
    MAX_VALUE: number;
    BLOCK: string;
}

export type AlarmDetailDatabase = {
    ID: number;
    BLOCK: string;
    BLOCK_CODE: string;
    RAISED_DATE: string;
    INSTRUMENT: string;
    FROM_DATE: string;
    TO_DATE: string;
    VARIABLE: string;
    VARIABLE_UNIT: string;
    AVG_VALUE: number;
    VARIANCE_VALUE: number;
    MIN_VALUE: number;
    MAX_VALUE: number;
    STATUS: string;
}

export type InsertAlarm = {
    variableId: number;
    instrumentId: number;

}
