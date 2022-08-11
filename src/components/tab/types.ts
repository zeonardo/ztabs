import React from 'react'

//START tab
//TODO: Update types to prevent out-of-bound active / initialActive values (if it's technically possible)
type TabDefaultProps = React.HTMLAttributes<HTMLElement> & {
  //intersection for controlled and uncontrolled mode
  children: [TypeTabPaneChild, ...TypeTabPaneChild[]]
  theme?: TypeThemeProps
  // children?: never;
}
type TabControlledProps = TabDefaultProps & {
  //controlled mode
  active: number
  onActiveChange: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  initialActive?: never //or undefined,
}
type TabUncontrolledProps = TabDefaultProps & {
  //uncontrolled mode
  initialActive: number
  active?: never
  onActiveChange?: never
}

export interface TypeThemeProps {
  //TODO: use ThemeProvider
  breakpoint?: {
    small?: {
      min?: string
      mid?: string
      max?: string
    }
    medium: {
      min?: string
      mid?: string
      max?: string
    }
    large?: {
      min?: string
      mid?: string
      max?: string
    }
  }
  color?: {
    white?: string
    black?: string
    primary?: string
    secondary?: string
    gray?: string
    graylight?: string
    graydark?: string
  }
}

export type TypeTabProps = TabControlledProps | TabUncontrolledProps //types merge
//END tab

//START pane
export type TypeTabPaneProps = React.HTMLAttributes<HTMLDivElement> & {
  title: string
  index?: number
  active?: boolean
  theme?: TypeThemeProps
}

export type TypeTabPaneChild = React.ReactElement<TypeTabPaneProps>

export type TypeTabButtonProps = {
  active: boolean
}
//END pane

export type TypeTabListProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'> & {
  tabs: string[]
  active: number
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  theme?: TypeThemeProps
}
