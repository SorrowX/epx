'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('./configs/index.js');
var transformComponent = require('./shared/transform-component.js');
var resolveComponent = require('./shared/resolve-component.js');
var createContext = require('./shared/create-context.js');
var utils = require('./shared/utils.js');
var portal = require('./shared/portal.js');
var loading = require('./shared/loading.js');
var style = require('./shared/style.js');



exports.stylePrefix = index.stylePrefix;
exports.transformComponent = transformComponent.transformComponent;
exports.resolveComponent = resolveComponent.resolveComponent;
exports.createContext = createContext.createContext;
exports.useContext = createContext.useContext;
exports.composeExport = utils.composeExport;
exports.isValidElement = utils.isValidElement;
exports.isVnode = utils.isVnode;
exports.isVueOptions = utils.isVueOptions;
exports.createPortalProvider = portal.createPortalProvider;
exports.getPortalContext = portal.getPortalContext;
exports.loading = loading.loading;
exports.getStyleNumber = style.getStyleNumber;
//# sourceMappingURL=index.js.map
