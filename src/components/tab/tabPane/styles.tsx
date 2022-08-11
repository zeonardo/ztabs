import styled from 'styled-components'
import { TypeTabPaneProps, TypeThemeProps } from '../types'

const StyledTabPane = styled.div<TypeTabPaneProps & TypeThemeProps>`
  display: ${(props: TypeTabPaneProps) => (props?.active ? 'block' : 'none')};
  width: 90vw;
  max-width: 100%;
  padding: 2rem 3rem;
  text-align: center;
  cursor: default;
`

export default StyledTabPane
