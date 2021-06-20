"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cloud_function_1 = require("../src/cloud-function");
const assert = require("assert");
describe('composeFunctionUrl', () => {
    it('Error no project provided', () => {
        assert.throws(() => cloud_function_1.composeFunctionUrl('aaa'));
    });
    it('No function provided', () => {
        assert.throws(() => cloud_function_1.composeFunctionUrl('', { projectId: 'aa' }));
    });
    it('Function and project provided', () => {
        assert.deepStrictEqual(cloud_function_1.composeFunctionUrl('bb', { projectId: 'aa' }), 'https://europe-west1-aa.cloudfunctions.net/bb');
    });
    it('Function and project and region provided', () => {
        assert.deepStrictEqual(cloud_function_1.composeFunctionUrl('bb', { projectId: 'aa', region: 'cc' }), 'https://cc-aa.cloudfunctions.net/bb');
    });
    it('Project from env', () => {
        process.env.PROJECT_ID = 'zz';
        assert.deepStrictEqual(cloud_function_1.composeFunctionUrl('bb', { region: 'cc' }), 'https://cc-zz.cloudfunctions.net/bb');
        process.env.PROJECT_ID = undefined;
    });
});
//# sourceMappingURL=cloud-function.spec.js.map