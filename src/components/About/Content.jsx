import styled from "styled-components"
import * as styleVars from "../variable"

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: auto;
  padding-top: 96px;
  margin-bottom: 66px;

  @media only screen and (max-width: ${styleVars.smUp}) {
    flex-direction: column;
  }
`

export default Content
