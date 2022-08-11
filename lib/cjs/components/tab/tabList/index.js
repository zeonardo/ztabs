"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var styles_1 = require("./styles");
var defaultTheme = __importStar(require("../../../styles/config"));
var objectMerge_1 = __importDefault(require("../../../helpers/objectMerge"));
var getItem = function (tab, index, className, active, theme, onClick) {
    var isActive = index === active;
    return (react_1.default.createElement(styles_1.TabListItem, { key: "item".concat(index), role: 'tablist', theme: theme, className: "tab__item".concat(className ? ' ' + className : '') },
        react_1.default.createElement(styles_1.TabListButton, { id: "btn-".concat(index), className: "tab__button".concat(isActive ? ' tab__button--active' : ''), active: isActive, title: tab, value: index, onClick: onClick, type: 'button', role: 'tab', name: tab, "aria-controls": "tabpane-".concat(index), "aria-selected": isActive, theme: theme }, tab)));
};
var TabList = function (_a) {
    var tabs = _a.tabs, active = _a.active, _b = _a.className, className = _b === void 0 ? '' : _b, theme = _a.theme, onClick = _a.onClick;
    var style = (0, react_1.useMemo)(function () { return (0, objectMerge_1.default)({}, defaultTheme, theme); }, [theme]);
    return (react_1.default.createElement(styles_1.TabList, { className: "tab__list".concat(className ? ' ' + className : ''), theme: style }, tabs.map(function (tab, index) { return getItem(tab, index, className, active, style, onClick); })));
};
exports.default = TabList;
