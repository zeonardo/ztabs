import React, { useMemo } from "react";
import { TypeTabListProps, TypeThemeProps } from "../types";
import { TabList as StyledTabList, TabListItem, TabListButton } from './styles'
import * as defaultTheme from "../../../styles/config";
import objectMerge from '../../../helpers/objectMerge'



const getItem = (
  tab: string,
  index: number,
  className: string = '',
  active: number,
  theme: TypeThemeProps,
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
): JSX.Element => {
  const isActive = index === active
  return (
    <TabListItem key={`item${index}`} role="tablist" theme={theme} className={`tab__item${className ? ' ' + className : ''}`}>
      <TabListButton
        id={`btn-${index}`}
        className={`tab__button${isActive ? ' tab__button--active' : ''}`}
        active={isActive}
        title={tab}
        value={index}
        onClick={onClick}
        type="button"
        role="tab"
        name={tab}
        aria-controls={`tabpane-${index}`}
        aria-selected={isActive}
        theme={theme}
      >
        {tab}
      </TabListButton>
    </TabListItem>
  )
}

const TabList: React.FC<TypeTabListProps> = ({ tabs, active, className, theme, onClick }) => {
  const style = useMemo(() => objectMerge({}, defaultTheme, theme) as TypeThemeProps, [theme])
  return (
    <StyledTabList className={`tab__list${className ? ' ' + className : ''}`} theme={style}>
      {tabs.map((tab, index) =>  getItem(tab, index, className, active, style, onClick))}
    </StyledTabList>
  )
}

export default TabList