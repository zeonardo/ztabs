import React, { cloneElement, useEffect, useState, useMemo, useCallback, useId } from 'react'
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
  const uniqueId = useId()
  const style = useMemo(() => objectMerge({}, defaultTheme, theme) as TypeThemeProps, [theme])
  const tabPaneArray = useMemo(() => React.Children.map(children, (child) => child), [children])

  const [activeIndex, setActiveIndex] = useState(
    Math.min(initialActive === undefined ? active || 0 : initialActive, tabPaneArray.length - 1),
  )

  const tabTitles = tabPaneArray.map((child) => child.props.title)
  const tabPane = tabPaneArray[activeIndex]
  const tabPaneActive = tabPane
    ? cloneElement(tabPane, { key: `pane${activeIndex}`, index: activeIndex, active: true, theme: style, id: uniqueId })
    : undefined

  const onClick = useCallback((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const index = +event.currentTarget.value
    setActiveIndex(index)
  }, [])

  useEffect(() => {
    if (active !== undefined) setActiveIndex(active)
  }, [active])

  return tabPaneActive ? (
    <StyledTab className={`tab${className ? ` ${className}` : ''}`} theme={style} {...rest}>
      <TabList tabs={tabTitles} onClick={onActiveChange || onClick} active={activeIndex} theme={style} id={uniqueId} />
      {tabPaneActive}
    </StyledTab>
  ) : (
    <></>
  )
}

Tab.Pane = TabPane

export default Tab
