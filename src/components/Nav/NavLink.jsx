import styled from "styled-components"
import * as styleVars from "../variable"

export const NavLink = styled.a`
  margin-right: 2.8rem;
  cursor: pointer;
  color: ${styleVars.purple};
  text-decoration: none;

  &.active,
  &:focus,
  &:hover,
  &:active {
    color: ${styleVars.colorHackRed};
    background: transparent;
  }
`

export default NavLink
