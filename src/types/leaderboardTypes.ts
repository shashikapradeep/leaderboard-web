import {errorResponseType, responseType} from "./apiDataTypes";

export interface LeaderDataType {
    name: string,
    age: number,
    points: number,
    address: string,
}

export interface LeaderDBType extends LeaderDataType {
    i?: number,
    id: number;
    leader?: LeaderDBType
    created_at?: string;
    updated_at?: string;
}

export interface LeaderError {
    createLeader: errorResponseType | null
}
