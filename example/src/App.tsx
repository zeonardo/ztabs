import React from 'react'
import './App.css'
import Tab from 'ztabs'

function App() {
  return (
    <div className='App'>
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
    </div>
  )
}

export default App
