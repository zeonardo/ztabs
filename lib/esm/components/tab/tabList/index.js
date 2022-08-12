import React from 'react';
import { TabList as StyledTabList, TabListItem, TabListButton } from './styles';
var getItem = function (tab, index, className, active, onClick, id, theme) {
    var isActive = index === active;
    return (React.createElement(TabListItem, { key: "".concat(id, "item").concat(index), role: 'presentation', theme: theme, className: "tab__item".concat(className ? ' ' + className : '') },
        React.createElement(TabListButton, { id: "".concat(id, "-btn-").concat(index), className: "tab__button".concat(isActive ? ' tab__button--active' : ''), active: isActive, title: tab, value: index, onClick: onClick, type: 'button', role: 'tab', name: tab, "aria-controls": "".concat(id, "-tabpane-").concat(index), "aria-selected": isActive, tabIndex: isActive ? 0 : -1, theme: theme }, tab)));
};
var TabList = function (_a) {
    var tabs = _a.tabs, active = _a.active, _b = _a.className, className = _b === void 0 ? '' : _b, onClick = _a.onClick, id = _a.id, theme = _a.theme;
    return (React.createElement(StyledTabList, { role: 'tablist', className: "tab__list".concat(className ? ' ' + className : ''), theme: theme }, tabs.map(function (tab, index) { return getItem(tab, index, className, active, onClick, id, theme); })));
};
export default TabList;
