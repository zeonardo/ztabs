import styled from 'styled-components'
import { TypeTabButtonProps, TypeThemeProps } from '../types'
type StyleThemeProps = {
  theme?: TypeThemeProps
}
export const TabList = styled.ul<TypeThemeProps>`
  list-style: none;
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  overflow-x: auto;
  max-width: 100%;
  overflow-scrolling: touch;
  overscroll-behavior-y: contain;
  padding-bottom: 5px;
  @media only screen and (max-width: ${(props: StyleThemeProps) => props?.theme?.breakpoint?.small?.max}) {
    justify-content: flex-start;
  }
  &::-webkit-scrollbar {
    width: 5px;
    height: 2px;
    background-color: ${(props: StyleThemeProps) => props?.theme?.color?.white};
  }
  &::-webkit-scrollbar-track {
    border: none;
    background-color: ${(props: StyleThemeProps) => props?.theme?.color?.graylight};
    border-radius: 1px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${(props: StyleThemeProps) => props?.theme?.color?.gray};
    border-radius: 1px;
  }
`

export const TabListItem = styled.li<StyleThemeProps>`
  border-bottom: 1px solid ${(props: StyleThemeProps) => props?.theme?.color?.gray};
`

export const TabListButton = styled.button<StyleThemeProps & TypeTabButtonProps>`
  color: ${(props: StyleThemeProps & TypeTabButtonProps) => (props.active ? props?.theme?.color?.primary : 'inherit')};
  background: none;
  border: none;
  border-bottom: 2px solid ${(props: TypeTabButtonProps) => (props.active ? 'currentColor' : 'transparent')};
  padding: 0.6rem 1.2rem;
  transition: all 0.1s linear;
  white-space: nowrap;

  &:hover {
    color: ${(props: StyleThemeProps) => props?.theme?.color?.primary};
  }
`
