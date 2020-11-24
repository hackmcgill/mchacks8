import styled from "styled-components"
import * as styleVars from "../variable"

export const Links = styled.div`
  padding: 1.2rem 2.4rem;
  align-items: center;
  position: fixed;
  top: 2.1rem;
  left: 9.65rem; /* -4.4rem is left of screen, 5.65rem is right edge of martlet */
  display: none;

  @media only screen and (min-width: ${styleVars.smUp}) {
    display: flex;
  }
`

export default Links
