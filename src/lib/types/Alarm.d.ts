import {Catalog, MonitoringVariable} from "./catalog"

export type AlarmItem = {
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
    elements: ElementAlarm[]
}