/* import React from "react"; */
import React, { useMemo } from 'react'
import { TypeTabPaneProps, TypeThemeProps } from '../types'
import StyledTabPane from './styles'
import * as defaultTheme from '../../../styles/config'
import objectMerge from '../../../helpers/objectMerge'

const TabPane: React.FC<TypeTabPaneProps> = ({
  className,
  title,
  children,
  index = 0,
  active = true,
  theme,
  ...rest
}: TypeTabPaneProps): JSX.Element => {
  const style = useMemo(() => objectMerge({}, defaultTheme, theme) as TypeThemeProps, [theme])
  return (
    <StyledTabPane
      title={title}
      active={active}
      index={index}
      id={`tabpane-${index}`}
      className={`tab__pane${className ? ` ${className}` : ''}${active ? ' active' : ''}`}
      theme={style}
      {...rest}
    >
      {children}
    </StyledTabPane>
  )
}

export default TabPane
