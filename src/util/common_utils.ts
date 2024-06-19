/**
 * PAGINATION CONSTANTS
 */
const DEFAULT_LIMIT: number = 1000;
const DEFAULT_OFFSET: number = 0;

let alarms:number = 0;

const addAlarm = () => {
    alarms = alarms + 1;
}

export {
    DEFAULT_LIMIT,
    DEFAULT_OFFSET,
    alarms,
    addAlarm
}