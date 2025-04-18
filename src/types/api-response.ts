// Type for a successfull response
interface SuccessResponse<T> {
    success: true;
    data: T;
}

// Type for a failed response
interface ErrorResponse {
    success: false;
    error: {
        message: string;
        code?: string;
    };
}

// Generic type for API responses
type ApiResponse<T> = SuccessResponse<T> | ErrorResponse;

export default ApiResponse;