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
    transition: right 0.25s ease-in-out;
    z-index: 1;

    right: ${props => (props.hasBorder ? "4rem" : "16.5rem")};
  }

  .Nav__mlh-banner {
    position: fixed;
    top: 0;
    right: 4.5rem;
    width: 90px;
    height: auto;
    transition: opacity 0.15s ease-in-out;
    opacity: ${props => (props.hasBorder ? "0" : "1")};
    z-index: 0;
  }

  @media only screen and (min-width: ${styleVars.smUp}) {
    display: flex;
  }
`

export default Links
