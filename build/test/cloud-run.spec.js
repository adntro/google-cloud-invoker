"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cloud_run_1 = require("../src/cloud-run");
const assert = require("assert");
describe('composeCloudRunUrl', () => {
    it('Error no service provided', () => {
        assert.throws(() => cloud_run_1.composeCloudRunUrl(''));
    });
    it('Error no project hash provided', () => {
        assert.throws(() => cloud_run_1.composeCloudRunUrl('aaa'));
    });
    it('Inline project hash', () => {
        assert.deepStrictEqual(cloud_run_1.composeCloudRunUrl('aaa', 'bbb'), 'https://aaa-bbb.a.run.app/');
        assert.deepStrictEqual(cloud_run_1.composeCloudRunUrl('aaa', 'bbb', 'ccc'), 'https://aaa-bbb.a.run.app/ccc');
    });
    it('Env project hash', () => {
        process.env.CLOUD_RUN_PROJECT_HASH = 'zzz';
        assert.deepStrictEqual(cloud_run_1.composeCloudRunUrl('aaa'), 'https://aaa-zzz.a.run.app/');
        assert.deepStrictEqual(cloud_run_1.composeCloudRunUrl('aaa', undefined, 'ccc'), 'https://aaa-zzz.a.run.app/ccc');
        process.env.CLOUD_RUN_PROJECT_HASH = undefined;
    });
});
//# sourceMappingURL=cloud-run.spec.js.map