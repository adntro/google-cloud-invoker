"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.composeCloudRunUrl = void 0;
function composeCloudRunUrl(serviceName, projectHash = process.env.CLOUD_RUN_PROJECT_HASH, path = '') {
    if (!projectHash) {
        throw new Error('No projectHash provided directly or indirectly (via CLOUD_RUN_PROJECT_HASH env param)');
    }
    return `https://${serviceName}-${projectHash}.a.run.app/${path}`;
}
exports.composeCloudRunUrl = composeCloudRunUrl;
//# sourceMappingURL=cloud-run.js.map