"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* import React from "react"; */
var react_1 = __importDefault(require("react"));
var styles_1 = __importDefault(require("./styles"));
var TabPane = function (_a) {
    var className = _a.className, title = _a.title, children = _a.children, _b = _a.index, index = _b === void 0 ? 0 : _b, _c = _a.active, active = _c === void 0 ? true : _c, theme = _a.theme, rest = __rest(_a, ["className", "title", "children", "index", "active", "theme"]);
    return (react_1.default.createElement(styles_1.default, __assign({ title: title, active: active, index: index, id: "tabpane-".concat(index), className: "tab__pane".concat(className ? " ".concat(className) : '').concat(active ? ' active' : ''), role: 'tabpanel', "aria-labelledby": "btn".concat(index), hidden: !active, theme: theme }, rest), children));
};
exports.default = TabPane;
