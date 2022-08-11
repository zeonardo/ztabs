"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var tab_1 = __importDefault(require("./components/tab"));
var client_1 = __importDefault(require("react-dom/client"));
var root = client_1.default.createRoot(document.getElementById('root'));
root.render(react_1.default.createElement(react_1.default.StrictMode, null,
    react_1.default.createElement(tab_1.default, { className: "uncontrolled", initialActive: 0 },
        react_1.default.createElement(tab_1.default.Pane, { title: "First Pane" },
            react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("strong", null, "First"),
                " Pane Body")),
        react_1.default.createElement(tab_1.default.Pane, { title: "Second Pane" },
            react_1.default.createElement(react_1.default.Fragment, null,
                "Second ",
                react_1.default.createElement("strong", null, "Pane"),
                " Body")),
        react_1.default.createElement(tab_1.default.Pane, { title: "Third Pane" }, "Third Pane Body"))));
exports.default = tab_1.default;
