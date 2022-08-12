"use strict";
/*
Copy + paste the content of this file replacing the content into ./index.tsx
DO NOT FORGET to revert ./index.tsx content after development
*/
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
var tab_1 = __importDefault(require("./components/tab"));
var tab2_1 = __importDefault(require("./components/tab/tab2"));
var react_1 = __importStar(require("react"));
var client_1 = __importDefault(require("react-dom/client"));
var root = client_1.default.createRoot(document.getElementById('root'));
var TabController = function () {
    var _a = (0, react_1.useState)(1), active = _a[0], setActive = _a[1];
    var onClick = function (event) {
        var index = +event.currentTarget.value;
        setActive(index);
    };
    return (react_1.default.createElement("div", { "data-tab": active },
        react_1.default.createElement(tab_1.default, { className: 'controlled', active: active, onActiveChange: onClick, theme: { color: { primary: '#026202' } } },
            react_1.default.createElement(tab_1.default.Pane, { title: 'First Pane' }, "First Pane Body"),
            react_1.default.createElement(tab_1.default.Pane, { title: 'Second Pane' }, "Second Pane Body"),
            react_1.default.createElement(tab_1.default.Pane, { title: 'Third Pane' }, "Third Pane Body"))));
};
root.render(react_1.default.createElement(react_1.default.StrictMode, null,
    react_1.default.createElement("h1", null, "ZTABS"),
    react_1.default.createElement("h2", null, "uncontrolled"),
    react_1.default.createElement(tab_1.default, { className: 'uncontrolled', initialActive: 0, theme: { color: { primary: '#620202' } } },
        react_1.default.createElement(tab_1.default.Pane, { title: 'First Pane' },
            react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("strong", null, "First"),
                " Pane Body")),
        react_1.default.createElement(tab_1.default.Pane, { title: 'Second Pane' },
            react_1.default.createElement(react_1.default.Fragment, null,
                "Second ",
                react_1.default.createElement("strong", null, "Pane"),
                " Body")),
        react_1.default.createElement(tab_1.default.Pane, { title: 'Third Pane' }, "Third Pane Body")),
    react_1.default.createElement("hr", null),
    react_1.default.createElement("h2", null, "controlled"),
    react_1.default.createElement(TabController, null),
    react_1.default.createElement("hr", null),
    react_1.default.createElement("h2", null, "Tab2"),
    react_1.default.createElement(tab2_1.default, { className: 'uncontrolled', initialActive: 0, theme: { color: { primary: '#020262' } } },
        react_1.default.createElement(tab2_1.default.Pane, { title: 'First Pane' },
            react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("strong", null, "First"),
                " Pane Body")),
        react_1.default.createElement(tab2_1.default.Pane, { title: 'Second Pane' },
            react_1.default.createElement(react_1.default.Fragment, null,
                "Second ",
                react_1.default.createElement("strong", null, "Pane"),
                " Body")),
        react_1.default.createElement(tab2_1.default.Pane, { title: 'Third Pane' }, "Third Pane Body"))));
