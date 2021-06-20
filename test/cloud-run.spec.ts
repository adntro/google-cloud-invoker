import {composeCloudRunUrl} from '../src/cloud-run';
import * as assert from 'assert';

describe('composeCloudRunUrl', () => {
  it('Error no service provided', () => {
    assert.throws(() => composeCloudRunUrl(''));
  });
  it('Error no project hash provided', () => {
    assert.throws(() => composeCloudRunUrl('aaa'));
  });
  it('Inline project hash', () => {
    assert.deepStrictEqual(
      composeCloudRunUrl('aaa', 'bbb'),
      'https://aaa-bbb.a.run.app/'
    );
    assert.deepStrictEqual(
      composeCloudRunUrl('aaa', 'bbb', 'ccc'),
      'https://aaa-bbb.a.run.app/ccc'
    );
  });
  it('Env project hash', () => {
    process.env.CLOUD_RUN_PROJECT_HASH = 'zzz';
    assert.deepStrictEqual(
      composeCloudRunUrl('aaa'),
      'https://aaa-zzz.a.run.app/'
    );
    assert.deepStrictEqual(
      composeCloudRunUrl('aaa', undefined, 'ccc'),
      'https://aaa-zzz.a.run.app/ccc'
    );
    process.env.CLOUD_RUN_PROJECT_HASH = undefined;
  });
});
