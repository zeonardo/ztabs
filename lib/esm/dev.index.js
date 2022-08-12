import Tab from './components/tab';
import Tab2 from './components/tab/tab2';
import React from 'react';
import ReactDOM from 'react-dom/client';
var root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(React.StrictMode, null,
    React.createElement("h1", null, "ZTABS"),
    React.createElement(Tab, { className: 'uncontrolled', initialActive: 0, theme: { color: { primary: '#00f' } } },
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
    React.createElement(Tab2, { className: 'uncontrolled', initialActive: 0, theme: { color: { primary: '#00f' } } },
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
