/* import React from "react"; */
import React from 'react'
import { TypeTabPaneProps } from '../types'
import StyledTabPane from './styles'

const TabPane: React.FC<TypeTabPaneProps> = ({
  className,
  title,
  children,
  index = 0,
  active = true,
  theme,
  id,
  ...rest
}: TypeTabPaneProps): JSX.Element => {
  return (
    <StyledTabPane
      title={title}
      active={active}
      index={index}
      id={`${id}-tabpane-${index}`}
      className={`tab__pane${className ? ` ${className}` : ''}${active ? ' active' : ''}`}
      role='tabpanel'
      aria-labelledby={`${id}-btn-${index}`}
      hidden={!active}
      theme={theme}
      {...rest}
    >
      {children}
    </StyledTabPane>
  )
}

export default TabPane
