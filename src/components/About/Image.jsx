import styled from "styled-components"
import * as styleVars from "../variable"

export const Image = styled.img`
  height: auto;
  object-fit: contain;
  position: relative;
  left: 43px;
  top: 24px;

  @media only screen and (max-width: ${styleVars.smUp}) {
    max-width: 80%;
    margin: 0 auto;
    padding: 0;
  }
`

export default Image
