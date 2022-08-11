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
  const panes = useMemo(() => React.Children.map(children, (child) => child), [children])

  const [activeIndex, setActiveIndex] = useState(
    Math.min(initialActive === undefined ? active || 0 : initialActive, panes.length - 1),
  )

  const tabTitles = panes.map((child) => child.props.title)

  const activePane = React.Children.toArray(children)[activeIndex]
    ? (React.Children.toArray(children)[activeIndex] as TypeTabPaneChild)
    : undefined

  const onClick = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    const index = +event.currentTarget.value
    setActiveIndex(index)
  }, [])

  useEffect(() => {
    if (active !== undefined) setActiveIndex(active)
  }, [active])

  if (!_renderedPanes[activeIndex] && activePane) _renderedPanes[activeIndex] = activePane //adds new render to cached list

  return panes.length ? (
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
