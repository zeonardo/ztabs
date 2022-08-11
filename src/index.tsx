import React from "react";
import Tab from "./components/tab";
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Tab className="uncontrolled" initialActive={0}>
      <Tab.Pane title="First Pane">
        <>
          <strong>First</strong> Pane Body
        </>
      </Tab.Pane>
      <Tab.Pane title="Second Pane">
        <>
          Second <strong>Pane</strong> Body
        </>
      </Tab.Pane>
      <Tab.Pane title="Third Pane">
        Third Pane Body
      </Tab.Pane>
    </Tab>
  </React.StrictMode>
);

export default Tab;