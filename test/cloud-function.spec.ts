import {composeFunctionUrl} from '../src/cloud-function';
import * as assert from 'assert';

describe('composeFunctionUrl', () => {
  it('Error no project provided', () => {
    assert.throws(() => composeFunctionUrl('aaa'));
  });
  it('No function provided', () => {
    assert.throws(() => composeFunctionUrl('', {projectId: 'aa'}));
  });
  it('Function and project provided', () => {
    assert.deepStrictEqual(
      composeFunctionUrl('bb', {projectId: 'aa'}),
      'https://europe-west1-aa.cloudfunctions.net/bb'
    );
  });
  it('Function and project and region provided', () => {
    assert.deepStrictEqual(
      composeFunctionUrl('bb', {projectId: 'aa', region: 'cc'}),
      'https://cc-aa.cloudfunctions.net/bb'
    );
  });
  it('Project from env', () => {
    process.env.PROJECT_ID = 'zz';
    assert.deepStrictEqual(
      composeFunctionUrl('bb', {region: 'cc'}),
      'https://cc-zz.cloudfunctions.net/bb'
    );
    process.env.PROJECT_ID = undefined;
  });
});
