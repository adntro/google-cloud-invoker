"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_invoker_1 = require("../src/http-invoker");
const assert = require("assert");
describe('Http Invoke', () => {
    it('Error if no url', async () => {
        assert.rejects(() => http_invoker_1.invokeEndpoint(''));
        return;
    });
    it('Invoke endpoint with auth headers', async () => {
        const data = { hello: 'World' };
        const res = await http_invoker_1.invokeEndpoint('https://postman-echo.com/post', data);
        assert.equal(res.status, 200);
        assert.deepStrictEqual(res.response.data, data);
        assert.deepStrictEqual(res.isOk, true);
        assert.deepStrictEqual(res.response.headers['content-type'], 'application/json');
        assert.deepStrictEqual(res.response.headers['accept'], 'application/json');
        assert.deepStrictEqual(res.response.headers['authorization'].indexOf('Bearer'), 0);
        // TODO stub getIdToken method and test
        return;
    });
    it('Invoke endpoint that fails', async () => {
        const data = { hello: 'World' };
        const res = await http_invoker_1.invokeEndpoint('https://postman-echo.com/post404', data);
        assert.equal(res.status, 404);
        assert.deepStrictEqual(res.isOk, false);
        return;
    });
});
//# sourceMappingURL=http-invoker.spec.js.map