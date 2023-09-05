import {responseType} from '../../types/apiDataTypes';

export const ResponseData = (response: responseType) => {
    return response?.data ? ((response.data.result) ?? response.data) : response;
};
