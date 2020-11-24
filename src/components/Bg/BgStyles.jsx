import styled from "styled-components"
import * as styleVars from "../variable"

export const BgStyles = styled.section`
  margin-bottom: 60px;
  background: ${styleVars.hackBlack5};

  @media only screen and (max-width: ${styleVars.smUp}) {
    background-position: 95% 400px;
  }
`

export default BgStyles
