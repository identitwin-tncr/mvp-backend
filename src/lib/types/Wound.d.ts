export type Wound =
{
    id?: number,
    name: string,
    code: string
}

export type AffectedVariable = {
    value: string;
    affected: boolean;
}

export type WoundElement = {
    value: string;
    material: string;
    maxRange: AffectedVariable;
    minRange: AffectedVariable;
}
