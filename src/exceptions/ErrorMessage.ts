import { AxiosError } from 'axios';

import {
    ALLOWED_ERROR_CODES,
    DEFAULT_ERROR_MESSAGE,
    INVALID_REQUEST_ERROR_CODES,
    INVALID_REQUEST_ERROR_MESSAGE,
    SKIP_ERROR_CODES,
    UNKNOWN_ERROR_MESSAGE,
    VALIDATION_ERROR_CODES,
} from '../configs/constants';

class ErrorMessage {
    private error: AxiosError;

    constructor(error: AxiosError) {
        this.error = error;
    }

    private checkErrorMessage(): void {
        const statusCode = this.error.response?.status;
        const statusMessage: string = this.error.message;
        console.log('Status Code ==> ', statusCode, statusMessage);
    }

    private getErrorMessage(): string {
        this.checkErrorMessage();
        let errorMessage = '';
        try {
            const statusCode: number = this.error.response?.status || 400;
            if (ALLOWED_ERROR_CODES.includes(statusCode)) {
                console.log('Error ==> ', statusCode, this.error);
                errorMessage = this.error.message ?? DEFAULT_ERROR_MESSAGE;
            } else if (INVALID_REQUEST_ERROR_CODES?.includes(statusCode)) {
                errorMessage = INVALID_REQUEST_ERROR_MESSAGE;
            } else if (VALIDATION_ERROR_CODES.includes(statusCode)) {
                if (this.error.message) {
                    errorMessage = this.error.message;
                }
            } else if (SKIP_ERROR_CODES.includes(statusCode)) {
                errorMessage = '';
            }
        } catch (e) {
            console.log('Error ==> ', e);
            errorMessage = UNKNOWN_ERROR_MESSAGE;
        }
        return errorMessage;
    }

    public showMessage(message = ''): void {
        const errorMessage: string = message.length > 0 ? message : this.getErrorMessage().toString();
        if (errorMessage.length) {
            // toast will replace once toast component is customized in JIRA task 86
        }
    }
}

export default ErrorMessage;