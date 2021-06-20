export interface InvokeResponse<T> {
    isOk: boolean;
    status: number;
    contentType: string;
    response: T;
    request: {
        url: string;
        data?: unknown;
    };
}
export declare function invokeEndpoint<T>(url: string, data?: unknown): Promise<InvokeResponse<T>>;
