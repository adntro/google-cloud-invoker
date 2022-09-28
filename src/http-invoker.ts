const fetch = require('node-fetch');
const { getIdToken } = require('@adntro/google-cloud-auth');

const log = (...m: unknown[]) => console.log(...m);

async function getHeaders(url: string) {
  // Trim subpaths & querystring
  const resourceUrl = url.split(/[\/\?]/g).slice(0, 4).join('/');
  const token = await getIdToken(resourceUrl);
  return {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: 'Bearer ' + token,
  };
}

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

export async function invokeEndpoint<T>(url: string, data?: unknown): Promise<InvokeResponse<T>> {
  if (!url) throw new Error('No url provided');
  const headers = await getHeaders(url);
  let requestData = {
    method: data ? 'POST' : 'GET',
    body: data ? JSON.stringify(data) : undefined,
    headers,
  }
  const res = await fetch(url, requestData);
  let result = await res.text();
  try {
    result = JSON.parse(result);
  } catch (e) {
    log('Cannot convert response to JSON', e.message, result);
  }
  return {
    isOk: res.status < 400,
    status: res.status,
    contentType: res.headers.get(['content-type']),
    response: result as T,
    request: {
      url,
      data,
    },
  };
}
