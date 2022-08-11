import React from 'react';
import { TabList as StyledTabList, TabListItem, TabListButton } from './styles';
var getItem = function (tab, index, className, active, onClick, theme) {
    var isActive = index === active;
    return (React.createElement(TabListItem, { key: "item".concat(index), theme: theme, className: "tab__item".concat(className ? ' ' + className : '') },
        React.createElement(TabListButton, { id: "btn-".concat(index), className: "tab__button".concat(isActive ? ' tab__button--active' : ''), active: isActive, title: tab, value: index, onClick: onClick, type: 'button', role: 'tab', name: tab, "aria-controls": "tabpane-".concat(index), "aria-selected": isActive, theme: theme }, tab)));
};
var TabList = function (_a) {
    var tabs = _a.tabs, active = _a.active, _b = _a.className, className = _b === void 0 ? '' : _b, theme = _a.theme, onClick = _a.onClick;
    return (React.createElement(StyledTabList, { role: 'tablist', className: "tab__list".concat(className ? ' ' + className : ''), theme: theme }, tabs.map(function (tab, index) { return getItem(tab, index, className, active, onClick, theme); })));
};
export default TabList;
