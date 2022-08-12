import React from 'react'
import { TypeTabListProps, TypeThemeProps } from '../types'
import { TabList as StyledTabList, TabListItem, TabListButton } from './styles'

const getItem = (
  tab: string,
  index: number,
  className: string,
  active: number,
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
  id?: string,
  theme?: TypeThemeProps,
): JSX.Element => {
  const isActive = index === active
  return (
    <TabListItem
      key={`${id}item${index}`}
      role='presentation'
      theme={theme}
      className={`tab__item${className ? ' ' + className : ''}`}
    >
      <TabListButton
        id={`${id}-btn-${index}`}
        className={`tab__button${isActive ? ' tab__button--active' : ''}`}
        active={isActive}
        title={tab}
        value={index}
        onClick={onClick}
        type='button'
        role='tab'
        name={tab}
        aria-controls={`${id}-tabpane-${index}`}
        aria-selected={isActive}
        tabIndex={isActive ? 0 : -1}
        theme={theme}
      >
        {tab}
      </TabListButton>
    </TabListItem>
  )
}

const TabList: React.FC<TypeTabListProps> = ({ tabs, active, className = '', onClick, id, theme }) => {
  return (
    <StyledTabList role='tablist' className={`tab__list${className ? ' ' + className : ''}`} theme={theme}>
      {tabs.map((tab, index) => getItem(tab, index, className, active, onClick, id, theme))}
    </StyledTabList>
  )
}

export default TabList
