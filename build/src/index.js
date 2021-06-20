"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.composeFunctionUrl = exports.composeCloudRunUrl = exports.invokeEndpoint = void 0;
var http_invoker_1 = require("./http-invoker");
Object.defineProperty(exports, "invokeEndpoint", { enumerable: true, get: function () { return http_invoker_1.invokeEndpoint; } });
var cloud_run_1 = require("./cloud-run");
Object.defineProperty(exports, "composeCloudRunUrl", { enumerable: true, get: function () { return cloud_run_1.composeCloudRunUrl; } });
var cloud_function_1 = require("./cloud-function");
Object.defineProperty(exports, "composeFunctionUrl", { enumerable: true, get: function () { return cloud_function_1.composeFunctionUrl; } });
//# sourceMappingURL=index.js.map