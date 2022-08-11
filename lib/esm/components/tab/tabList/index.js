import React, { useMemo } from "react";
import { TabList as StyledTabList, TabListItem, TabListButton } from './styles';
import * as defaultTheme from "../../../styles/config";
import objectMerge from '../../../helpers/objectMerge';
var getItem = function (tab, index, className, active, theme, onClick) {
    if (className === void 0) { className = ''; }
    var isActive = index === active;
    return (React.createElement(TabListItem, { key: "item".concat(index), role: "tablist", theme: theme, className: "tab__item".concat(className ? ' ' + className : '') },
        React.createElement(TabListButton, { id: "btn-".concat(index), className: "tab__button".concat(isActive ? ' tab__button--active' : ''), active: isActive, title: tab, value: index, onClick: onClick, type: "button", role: "tab", name: tab, "aria-controls": "tabpane-".concat(index), "aria-selected": isActive, theme: theme }, tab)));
};
var TabList = function (_a) {
    var tabs = _a.tabs, active = _a.active, className = _a.className, theme = _a.theme, onClick = _a.onClick;
    var style = useMemo(function () { return objectMerge({}, defaultTheme, theme); }, [theme]);
    return (React.createElement(StyledTabList, { className: "tab__list".concat(className ? ' ' + className : ''), theme: style }, tabs.map(function (tab, index) { return getItem(tab, index, className, active, style, onClick); })));
};
export default TabList;
