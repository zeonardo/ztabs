import Tab from './components/tab'
import Tab2 from './components/tab/tab2'

import React from 'react'
import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <h1>ZTABS</h1>
    <Tab className='uncontrolled' initialActive={0} theme={{ color: { primary: '#00f' } }}>
      <Tab.Pane title='First Pane'>
        <>
          <strong>First</strong> Pane Body
        </>
      </Tab.Pane>
      <Tab.Pane title='Second Pane'>
        <>
          Second <strong>Pane</strong> Body
        </>
      </Tab.Pane>
      <Tab.Pane title='Third Pane'>Third Pane Body</Tab.Pane>
    </Tab>
    <hr />
    <Tab2 className='uncontrolled' initialActive={0} theme={{ color: { primary: '#00f' } }}>
      <Tab2.Pane title='First Pane'>
        <>
          <strong>First</strong> Pane Body
        </>
      </Tab2.Pane>
      <Tab2.Pane title='Second Pane'>
        <>
          Second <strong>Pane</strong> Body
        </>
      </Tab2.Pane>
      <Tab2.Pane title='Third Pane'>Third Pane Body</Tab2.Pane>
    </Tab2>
  </React.StrictMode>,
)
