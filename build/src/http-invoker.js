"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invokeEndpoint = void 0;
const fetch = require('node-fetch');
const { getIdToken } = require('@adntro/google-cloud-auth');
const log = (...m) => console.log(...m);
async function getHeaders(url) {
    // Trim subpaths & querystring
    const resourceUrl = url.split(/[\/\?]/g).slice(0, 4).join('/');
    const token = await getIdToken(resourceUrl);
    return {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer ' + token,
    };
}
async function invokeEndpoint(url, data) {
    if (!url)
        throw new Error('No url provided');
    const headers = await getHeaders(url);
    const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers,
    });
    let result = await res.text();
    try {
        result = JSON.parse(result);
    }
    catch (e) {
        log('Cannot convert response to JSON', e.message, result);
    }
    return {
        isOk: res.status < 400,
        status: res.status,
        contentType: res.headers.get(['content-type']),
        response: result,
        request: {
            url,
            data,
        },
    };
}
exports.invokeEndpoint = invokeEndpoint;
//# sourceMappingURL=http-invoker.js.map