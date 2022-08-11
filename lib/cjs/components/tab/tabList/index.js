"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styles_1 = require("./styles");
var getItem = function (tab, index, className, active, onClick, theme) {
    var isActive = index === active;
    return (react_1.default.createElement(styles_1.TabListItem, { key: "item".concat(index), role: 'tablist', theme: theme, className: "tab__item".concat(className ? ' ' + className : '') },
        react_1.default.createElement(styles_1.TabListButton, { id: "btn-".concat(index), className: "tab__button".concat(isActive ? ' tab__button--active' : ''), active: isActive, title: tab, value: index, onClick: onClick, type: 'button', role: 'tab', name: tab, "aria-controls": "tabpane-".concat(index), "aria-selected": isActive, theme: theme }, tab)));
};
var TabList = function (_a) {
    var tabs = _a.tabs, active = _a.active, _b = _a.className, className = _b === void 0 ? '' : _b, theme = _a.theme, onClick = _a.onClick;
    return (react_1.default.createElement(styles_1.TabList, { className: "tab__list".concat(className ? ' ' + className : ''), theme: theme }, tabs.map(function (tab, index) { return getItem(tab, index, className, active, onClick, theme); })));
};
exports.default = TabList;
