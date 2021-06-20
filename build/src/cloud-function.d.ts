interface InvokeFunctionParams {
    projectId?: string;
    region?: string;
}
export declare function composeFunctionUrl(functionName: string, extra?: InvokeFunctionParams): string;
export {};
