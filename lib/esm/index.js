import React from 'react';
import Tab from './components/tab';
import ReactDOM from 'react-dom/client';
var root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(React.StrictMode, null,
    React.createElement(Tab, { className: 'uncontrolled', initialActive: 0 },
        React.createElement(Tab.Pane, { title: 'First Pane' },
            React.createElement(React.Fragment, null,
                React.createElement("strong", null, "First"),
                " Pane Body")),
        React.createElement(Tab.Pane, { title: 'Second Pane' },
            React.createElement(React.Fragment, null,
                "Second ",
                React.createElement("strong", null, "Pane"),
                " Body")),
        React.createElement(Tab.Pane, { title: 'Third Pane' }, "Third Pane Body"))));
export default Tab;
