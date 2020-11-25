import styled from "styled-components"
import * as styleVars from "../variable"

export const Links = styled.div`
  padding: 1.2rem 0;
  align-items: center;
  position: fixed;
  top: 2.1rem;
  left: 13.6rem;
  display: none;

  .Nav__socials {
    position: fixed;
    right: 3.5rem;
  }

  @media only screen and (min-width: ${styleVars.smUp}) {
    display: flex;
  }
`

export default Links
