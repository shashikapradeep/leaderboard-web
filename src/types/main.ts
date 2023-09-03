export interface LeaderType{
    name: string;
    age: number;
    points: number;
    address: string;
}

export interface LeaderDBType extends LeaderType{
    id: number;
    created_at?: string;
    updated_at?: string;
}
