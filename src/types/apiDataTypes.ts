export interface responseType {
    data: {
        result: object,
        message: string,
        status: string,
        status_code: number
    }
}

export interface errorResponseType {
    status: string,
    status_code: number,
    message: string,
    result: {
        errors?: any
    }
}
