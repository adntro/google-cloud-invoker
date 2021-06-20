import {invokeEndpoint} from '../src/http-invoker';
import * as assert from 'assert';

interface PostmanEchoResponse {
  data: {[key: string]: string};
  headers: {[key: string]: string};
}

describe('Http Invoke', () => {
  it('Error if no url', async () => {
    assert.rejects(() => invokeEndpoint(''));
    return;
  });
  it('Invoke endpoint with auth headers', async () => {
    const data = {hello: 'World'};
    const res = await invokeEndpoint<PostmanEchoResponse>(
      'https://postman-echo.com/post',
      data
    );
    assert.equal(res.status, 200);
    assert.deepStrictEqual(res.response.data, data);
    assert.deepStrictEqual(res.isOk, true);
    assert.deepStrictEqual(
      res.response.headers['content-type'],
      'application/json'
    );
    assert.deepStrictEqual(res.response.headers['accept'], 'application/json');
    assert.deepStrictEqual(
      res.response.headers['authorization'].indexOf('Bearer'),
      0
    );
    // TODO stub getIdToken method and test
    return;
  });
  it('Invoke endpoint that fails', async () => {
    const data = {hello: 'World'};
    const res = await invokeEndpoint<PostmanEchoResponse>(
      'https://postman-echo.com/post404',
      data
    );
    assert.equal(res.status, 404);
    assert.deepStrictEqual(res.isOk, false);
    return;
  });
});
