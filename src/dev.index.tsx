import Tab from './components/tab'
import Tab2 from './components/tab/tab2'

import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const TabController: React.FC = () => {
  const [active, setActive] = useState(1)

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const index = +event.currentTarget.value
    setActive(index)
  }

  return (
    <div data-tab={active}>
      <Tab className='controlled' active={active} onActiveChange={onClick} theme={{ color: { primary: '#0f0' } }}>
        <Tab.Pane title='First Pane'>First Pane Body</Tab.Pane>
        <Tab.Pane title='Second Pane'>Second Pane Body</Tab.Pane>
        <Tab.Pane title='Third Pane'>Third Pane Body</Tab.Pane>
      </Tab>
    </div>
  )
}

root.render(
  <React.StrictMode>
    <h1>ZTABS</h1>
    <h2>uncontrolled</h2>
    <Tab className='uncontrolled' initialActive={0} theme={{ color: { primary: '#f00' } }}>
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
    <h2>controlled</h2>
    <TabController />
    <hr />
    <h2>Tab2</h2>
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
