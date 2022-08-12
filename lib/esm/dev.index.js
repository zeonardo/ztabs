/*
Copy + paste the content of this file replacing the content into ./index.tsx
DO NOT FORGET to revert ./index.tsx content after development
*/
import Tab from './components/tab';
import Tab2 from './components/tab/tab2';
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
var root = ReactDOM.createRoot(document.getElementById('root'));
var TabController = function () {
    var _a = useState(1), active = _a[0], setActive = _a[1];
    var onClick = function (event) {
        var index = +event.currentTarget.value;
        setActive(index);
    };
    return (React.createElement("div", { "data-tab": active },
        React.createElement(Tab, { className: 'controlled', active: active, onActiveChange: onClick, theme: { color: { primary: '#026202' } } },
            React.createElement(Tab.Pane, { title: 'First Pane' }, "First Pane Body"),
            React.createElement(Tab.Pane, { title: 'Second Pane' }, "Second Pane Body"),
            React.createElement(Tab.Pane, { title: 'Third Pane' }, "Third Pane Body"))));
};
root.render(React.createElement(React.StrictMode, null,
    React.createElement("h1", null, "ZTABS"),
    React.createElement("h2", null, "uncontrolled"),
    React.createElement(Tab, { className: 'uncontrolled', initialActive: 0, theme: { color: { primary: '#620202' } } },
        React.createElement(Tab.Pane, { title: 'First Pane' },
            React.createElement(React.Fragment, null,
                React.createElement("strong", null, "First"),
                " Pane Body")),
        React.createElement(Tab.Pane, { title: 'Second Pane' },
            React.createElement(React.Fragment, null,
                "Second ",
                React.createElement("strong", null, "Pane"),
                " Body")),
        React.createElement(Tab.Pane, { title: 'Third Pane' }, "Third Pane Body")),
    React.createElement("hr", null),
    React.createElement("h2", null, "controlled"),
    React.createElement(TabController, null),
    React.createElement("hr", null),
    React.createElement("h2", null, "Tab2"),
    React.createElement(Tab2, { className: 'uncontrolled', initialActive: 0, theme: { color: { primary: '#020262' } } },
        React.createElement(Tab2.Pane, { title: 'First Pane' },
            React.createElement(React.Fragment, null,
                React.createElement("strong", null, "First"),
                " Pane Body")),
        React.createElement(Tab2.Pane, { title: 'Second Pane' },
            React.createElement(React.Fragment, null,
                "Second ",
                React.createElement("strong", null, "Pane"),
                " Body")),
        React.createElement(Tab2.Pane, { title: 'Third Pane' }, "Third Pane Body"))));
