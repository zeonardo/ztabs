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
import React, { cloneElement, useEffect, useState, useMemo, useCallback } from 'react';
import TabPane from './tabPane';
import TabList from './tabList';
import { default as defaultTheme } from '../../styles/config';
import StyledTab from './styles';
import objectMerge from '../../helpers/objectMerge';
var _renderedPanes = []; //cache constant instead of extra state
var Tab2 = function (_a) {
    var className = _a.className, children = _a.children, active = _a.active, initialActive = _a.initialActive, onActiveChange = _a.onActiveChange, theme = _a.theme, rest = __rest(_a, ["className", "children", "active", "initialActive", "onActiveChange", "theme"]);
    var style = useMemo(function () { return objectMerge({}, defaultTheme, theme); }, [theme]);
    var panes = useMemo(function () { return React.Children.map(children, function (child) { return child; }); }, [children]);
    var _b = useState(Math.min(initialActive === undefined ? active || 0 : initialActive, panes.length - 1)), activeIndex = _b[0], setActiveIndex = _b[1];
    var tabTitles = panes.map(function (child) { return child.props.title; });
    var activePane = React.Children.toArray(children)[activeIndex]
        ? React.Children.toArray(children)[activeIndex]
        : undefined;
    var onClick = useCallback(function (event) {
        var index = +event.currentTarget.value;
        setActiveIndex(index);
    }, []);
    useEffect(function () {
        if (active !== undefined)
            setActiveIndex(active);
    }, [active]);
    if (!_renderedPanes[activeIndex] && activePane)
        _renderedPanes[activeIndex] = activePane; //adds new render to cached list
    return panes.length ? (React.createElement(StyledTab, __assign({ className: "tab".concat(className ? ' ' + className : ''), theme: style }, rest),
        React.createElement(TabList, { tabs: tabTitles, onClick: onActiveChange || onClick, active: activeIndex, theme: style }),
        _renderedPanes.map(function (pane, index) {
            return cloneElement(pane, {
                key: "pane".concat(index),
                index: index,
                active: activeIndex === index,
                theme: style,
            });
        }))) : (React.createElement(React.Fragment, null));
};
Tab2.Pane = TabPane;
export default Tab2;
