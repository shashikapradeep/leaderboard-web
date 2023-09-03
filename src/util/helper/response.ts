interface responseType {
    data: {
        result: object
    }
}

export const ResponseData = (response: responseType) => {
    return response?.data ? ((response.data.result) ?? response.data) : response;
};
