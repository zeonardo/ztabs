"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(require("styled-components"));
var StyledTabPane = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: ", ";\n  width: 90vw;\n  max-width: 100%;\n  padding: 2rem 3rem;\n  text-align: center;\n  cursor: default;\n"], ["\n  display: ", ";\n  width: 90vw;\n  max-width: 100%;\n  padding: 2rem 3rem;\n  text-align: center;\n  cursor: default;\n"])), function (props) { return ((props === null || props === void 0 ? void 0 : props.active) ? 'block' : 'none'); });
exports.default = StyledTabPane;
var templateObject_1;
