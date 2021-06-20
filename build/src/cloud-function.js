"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.composeFunctionUrl = void 0;
function composeFunctionUrl(functionName, extra) {
    extra = {
        projectId: process.env.PROJECT_ID,
        region: 'europe-west1',
        ...(extra || {}),
    };
    if (!functionName)
        throw new Error('No function name provided');
    if (!extra.projectId)
        throw new Error('No projectId provided (or via PROJECT_ID)');
    return `https://${extra.region}-${extra.projectId}.cloudfunctions.net/${functionName}`;
}
exports.composeFunctionUrl = composeFunctionUrl;
//# sourceMappingURL=cloud-function.js.map