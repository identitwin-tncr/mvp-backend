import { Material, MonitoringVariable } from "./catalog"
import { Element, ElementItem } from "./element"
import { Instrument } from "./instrument"

export type AlarmItem =
{
    id: number,
    element: Element,
    variable: MonitoringVariable,
    instrument: Instrument,
    raisedDate: Date,
    avgValue: number,
    reasonOfRaise: string,
    material: Material,
    varianceValue: number
}