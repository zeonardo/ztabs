import React, { cloneElement, useEffect, useState, useMemo, useCallback } from 'react'
import TabPane from './tabPane'
import TabList from './tabList'
import { TypeTabProps, TypeThemeProps } from './types'
import StyledTab from './styles'
import { default as defaultTheme } from '../../styles/config'
import objectMerge from '../../helpers/objectMerge'

const Tab = ({
  className,
  children,
  active,
  initialActive,
  onActiveChange,
  theme,
  ...rest
}: TypeTabProps): JSX.Element => {
  const style = useMemo(() => objectMerge({}, defaultTheme, theme) as TypeThemeProps, [theme])
  const panes = useMemo(() => React.Children.map(children, (child) => child), [children])

  const [activeIndex, setActiveIndex] = useState(
    Math.min(initialActive === undefined ? active || 0 : initialActive, panes.length - 1),
  )

  const tabTitles = panes.map((child) => child.props.title)
  const pane = panes[activeIndex]
  const activePane = pane
    ? cloneElement(pane, { key: `pane${activeIndex}`, index: activeIndex, active: true, theme: style })
    : undefined

  const onClick = useCallback((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const index = +event.currentTarget.value
    setActiveIndex(index)
  }, [])

  useEffect(() => {
    if (active !== undefined) setActiveIndex(active)
  }, [active])

  return panes.length ? (
    <StyledTab className={`tab${className ? ` ${className}` : ''}`} theme={style} {...rest}>
      <TabList tabs={tabTitles} onClick={onActiveChange || onClick} active={activeIndex} theme={style} />
      {activePane}
    </StyledTab>
  ) : (
    <></>
  )
}

Tab.Pane = TabPane

export default Tab
