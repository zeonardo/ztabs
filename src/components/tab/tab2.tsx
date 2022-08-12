import React, { cloneElement, useEffect, useState, useMemo, useCallback } from 'react'
import TabPane from './tabPane'
import TabList from './tabList'
import { TypeTabPaneChild, TypeTabProps, TypeThemeProps } from './types'
import { default as defaultTheme } from '../../styles/config'
import StyledTab from './styles'
import objectMerge from '../../helpers/objectMerge'

const _renderedPanes: TypeTabPaneChild[] = [] //cache constant instead of extra state

const Tab2 = ({
  className,
  children,
  active,
  initialActive,
  onActiveChange,
  theme,
  ...rest
}: TypeTabProps): JSX.Element => {
  const style = useMemo(() => objectMerge({}, defaultTheme, theme) as TypeThemeProps, [theme])
  const tabPaneArray = useMemo(() => React.Children.map(children, (child) => child), [children])

  const [activeIndex, setActiveIndex] = useState(
    Math.min(initialActive === undefined ? active || 0 : initialActive, tabPaneArray.length - 1),
  )

  const tabTitles = tabPaneArray.map((child) => child.props.title)
  const tabPaneActive = tabPaneArray[activeIndex] ? (tabPaneArray[activeIndex] as TypeTabPaneChild) : undefined

  const onClick = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    const index = +event.currentTarget.value
    setActiveIndex(index)
  }, [])

  useEffect(() => {
    if (active !== undefined) setActiveIndex(active)
  }, [active])

  if (!_renderedPanes[activeIndex] && tabPaneActive) _renderedPanes[activeIndex] = tabPaneActive //adds new render to cached list

  return tabPaneActive ? (
    <StyledTab className={`tab${className ? ' ' + className : ''}`} theme={style} {...rest}>
      <TabList tabs={tabTitles} onClick={onActiveChange || onClick} active={activeIndex} theme={style} />
      {_renderedPanes.map((pane, index) =>
        cloneElement(pane, {
          key: `pane${index}`,
          index: index,
          active: activeIndex === index,
          theme: style,
        }),
      )}
    </StyledTab>
  ) : (
    <></>
  )
}

Tab2.Pane = TabPane

export default Tab2
