import {
    ElementDatabase,
    Element,
    MonitoringVariableDatabase,
    MonitoringVariable,
    Catalog,
    CatalogDatabase,
    BlockDatabase,
    Block,
    ElementTypeDatabase,
    ElementType,
    MonitoringFrecuency,
    InstrumentType,
    InstrumentDatabase,
    InstrumentItem,
    AlarmItemDatabase,
    Alarm,
    AlarmDetailDatabase,
    ElementAlarmDatabase,
    ElementAlarm, AffectedVariable
} from "types";


const formatElement = (element: ElementDatabase) : Element => {
    return {
        id: element.ID,
        code: element.CODE,
        number: element.NUMBER,
        orientation: {
            id: element.ORIENTATION_ID,
            value: element.ORIENTATION
        },
        cardinalPoint: {
            id: element.CARDINAL_POINT_ID,
            value: element.CARDINAL_POINT
        },
        elementType: {
            id: element.ELEMENT_TYPE_ID,
            value: element.ELEMENT_TYPE,
            technologicalUnit: {
                id: element.TECHNOLOGICAL_UNIT_ID,
                value: element.TECHNOLOGICAL_UNIT
            }
        },
        block: {
            id: element.BLOCK_ID,
            value: element.BLOCK,
            code: element.BLOCK_CODE
        }
    }
}

const formatPagination = (items: any[], limit: number) => {
    // If there isn't a custom limit set, return whole list
    if (items.length > limit + 1) {
        return items;
    }

    // Check if list has next page
    let hasNext: boolean = false;
    if (items.length == limit + 1) {
        hasNext = true;
        items.pop();
    }

    // Return formatted paginated list
    return {
        items,
        hasNext
    }
}

const formatError = (message: string) => {
    return {
        message
    }
}

const formatVariable = (variable: MonitoringVariableDatabase): MonitoringVariable => {
    return {
        id: variable.ID,
        value: variable.NAME,
        code: variable.CODE,
        unit: variable.UNIT
    }
}

const formatCatalog = (item: CatalogDatabase): Catalog => {
    return {
        id: item.ID,
        value: item.NAME,
        code: item.CODE
    }
}


const formatElementType = (item: ElementTypeDatabase): ElementType => {
    return {
        id: item.ID,
        value: item.NAME,
        code: item.CODE,
        technicalUnitId: item.TECHNICAL_UNIT_ID
    }
}

const formatBlock = (item: BlockDatabase): Block => {
    return {
        id: item.ID,
        value: item.NAME,
        code: item.CODE,
        floor: item.FLOOR
    }
}

const formatInstrument = (item: InstrumentDatabase): InstrumentItem => {
    console.log(item)
    return {
        id: item.INSTRUMENT_ID,
        value: item.INSTRUMENT_NAME,
        code: item.INSTRUMENT_CODE,
        model: item.INSTRUMENT_MODEL,
        assetCode: item.INSTRUMENT_ASSET_CODE,
        monitoringFrecuency: {
            id: item.MONITORING_FREQUENCY_ID,
            value: item.MONITORING_FREQUENCY_NAME
        } as MonitoringFrecuency,
        block:{
            id: item.BLOCK_ID,
            value: item.BLOCK_NAME
        } as Block,
        instrumentType: {
            id: item.INSTRUMENT_TYPE_ID,
            value: item.INSTRUMENT_TYPE_NAME
        } as InstrumentType

    } as InstrumentItem
}

const formatAlarmItem = (alarm: AlarmItemDatabase): Alarm => {
    return {
        id: alarm.ID,
        raisedDate: alarm.RAISED_DATE,
        status: alarm.STATUS,
        variable: {
            value: alarm.VARIABLE,
            unit: alarm.VARIABLE_UNIT
        },
        instrument: alarm.INSTRUMENT,
        minValue: alarm.MIN_VALUE,
        maxValue: alarm.MAX_VALUE,
        block: {
            value: alarm.BLOCK
        }
    }
}

const formatAlarmDetail = (alarm: AlarmDetailDatabase): Alarm => {
    return {
        id: alarm.ID,
        raisedDate: alarm.RAISED_DATE,
        status: alarm.STATUS,
        variable: {
            value: alarm.VARIABLE,
            unit: alarm.VARIABLE_UNIT
        },
        instrument: alarm.INSTRUMENT,
        minValue: alarm.MIN_VALUE,
        maxValue: alarm.MAX_VALUE,
        block: {
            value: alarm.BLOCK,
            code: alarm.BLOCK_CODE
        },
        from: alarm.FROM_DATE,
        to: alarm.TO_DATE
    }
}

const formatElementAlarm = (elements: ElementAlarmDatabase[]): ElementAlarm[] => {
    let currentElementId = -1;
    let parsedElements: ElementAlarm[] = []

    elements.forEach((element: ElementAlarmDatabase) => {
        if(element.ID === currentElementId){
            parsedElements[parsedElements.length - 1].wounds.push({
                value: element.WOUND,
                material: element.MATERIAL,
                maxRange: {
                    value: element.MAX_RANGE.toString(10) + " " + element.UNIT,
                    affected: Boolean(element.MAX_AFFECTED)
                },
                minRange:{
                    value: element.MIN_RANGE.toString(10) + " " + element.UNIT,
                    affected: Boolean(element.MIN_AFFECTED)
                },
            })
        }else{
            parsedElements.push({
                id: element.ID,
                code: element.CODE,
                number: element.NUMBER,DROP PROCEDURE IF EXISTS RETRIEVE_ALARM_ELEMENTS;
CREATE PROCEDURE RETRIEVE_ALARM_ELEMENTS(
    IN P_IN_ALARM_ID INT
) BEGIN
    SELECT E.ID, E.CODE, ET.NAME ELEMENT_TYPE, TU.NAME TECHNOLOGICAL_UNIT, E.NUMBER, CP.NAME CARDINAL_POINT, O.NAME ORIENTATION, M.NAME MATERIAL, MR.MIN_RANGE, MR.MAX_RANGE, V.UNIT, W.NAME WOUND, MR.MIN_RANGE >= A.MIN_VALUE MIN_AFFECTED, MR.MAX_RANGE <= A.MAX_VALUE MAX_AFFECTED
    FROM ELEMENT E
        INNER JOIN ELEMENT_MATERIAL EM on E.ID = EM.ELEMENT_ID
        INNER JOIN MATERIAL M on EM.MATERIAL_ID = M.ID
        INNER JOIN MATERIAL_RANGE MR on M.ID = MR.MATERIAL_ID
        INNER JOIN VARIABLE V on MR.VARIABLE_ID = V.ID
        INNER JOIN BLOCK_ELEMENT BE on E.ID = BE.ELEMENT_ID
        INNER JOIN BLOCK B on BE.BLOCK_ID = B.ID
        INNER JOIN INSTRUMENT I on B.ID = I.BLOCK_ID
        INNER JOIN (SELECT * FROM ALARM WHERE ID = P_IN_ALARM_ID) A ON I.ID = A.INSTRUMENT_ID AND A.VARIABLE_ID = V.ID
        LEFT JOIN WOUND_MATERIAL WM on M.ID = WM.MATERIAL_ID
        LEFT JOIN WOUND W ON WM.WOUND_ID = W.ID
        INNER JOIN ELEMENT_TYPE ET on E.ELEMENT_TYPE_ID = ET.ID
        INNER JOIN TECHNICAL_UNIT TU on ET.TECHNICAL_UNIT_ID = TU.ID
        LEFT JOIN CARDINAL_POINT CP on E.CARDINAL_POINT_ID = CP.ID
        LEFT JOIN ORIENTATION O on E.ORIENTATION_ID = O.ID
    WHERE MR.MIN_RANGE >= A.MIN_VALUE OR MR.MAX_RANGE <= A.MAX_VALUE
    ORDER BY E.ID;
END;
                orientation: {
                    value: element.ORIENTATION
                },
                cardinalPoint: {
                    value: element.CARDINAL_POINT
                },
                elementType: {
                    value: element.ELEMENT_TYPE,
                    technologicalUnit: {
                        value: element.TECHNOLOGICAL_UNIT
                    }
                },
                wounds: [{
                    value: element.WOUND? element.WOUND : "Lesión",
                    material: element.MATERIAL,
                    maxRange: {
                        value: element.MAX_RANGE.toString(10) + element.UNIT,
                        affected: Boolean(element.MAX_AFFECTED)
                    },
                    minRange: {
                        value: element.MIN_RANGE.toString(10) + element.UNIT,
                        affected: Boolean(element.MIN_AFFECTED)
                    }
                }]
            })
        }
    })

    return parsedElements;
}

export {
    formatElement,
    formatPagination,
    formatError,
    formatVariable,
    formatCatalog,
    formatBlock,
    formatElementType,
    formatInstrument,
    formatAlarmItem,
    formatAlarmDetail,
    formatElementAlarm
}