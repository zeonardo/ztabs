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
var react_1 = __importStar(require("react"));
var tabPane_1 = __importDefault(require("./tabPane"));
var tabList_1 = __importDefault(require("./tabList"));
var styles_1 = __importDefault(require("./styles"));
var config_1 = __importDefault(require("../../styles/config"));
var objectMerge_1 = __importDefault(require("../../helpers/objectMerge"));
var Tab = function (_a) {
    var className = _a.className, children = _a.children, active = _a.active, initialActive = _a.initialActive, onActiveChange = _a.onActiveChange, theme = _a.theme, rest = __rest(_a, ["className", "children", "active", "initialActive", "onActiveChange", "theme"]);
    var style = (0, react_1.useMemo)(function () { return (0, objectMerge_1.default)({}, config_1.default, theme); }, [theme]);
    var panes = (0, react_1.useMemo)(function () { return react_1.default.Children.map(children, function (child) { return child; }); }, [children]);
    var _b = (0, react_1.useState)(Math.min(initialActive === undefined ? active || 0 : initialActive, panes.length - 1)), activeIndex = _b[0], setActiveIndex = _b[1];
    var tabTitles = panes.map(function (child) { return child.props.title; });
    var pane = panes[activeIndex];
    var activePane = pane
        ? (0, react_1.cloneElement)(pane, { key: "pane".concat(activeIndex), index: activeIndex, active: true, theme: style })
        : undefined;
    var onClick = (0, react_1.useCallback)(function (event) {
        var index = +event.currentTarget.value;
        setActiveIndex(index);
    }, []);
    (0, react_1.useEffect)(function () {
        if (active !== undefined)
            setActiveIndex(active);
    }, [active]);
    return panes.length ? (react_1.default.createElement(styles_1.default, __assign({ className: "tab".concat(className ? " ".concat(className) : ''), theme: style }, rest),
        react_1.default.createElement(tabList_1.default, { tabs: tabTitles, onClick: onActiveChange || onClick, active: activeIndex, theme: style }),
        activePane)) : (react_1.default.createElement(react_1.default.Fragment, null));
};
Tab.Pane = tabPane_1.default;
exports.default = Tab;
