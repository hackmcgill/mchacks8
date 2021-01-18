import styled from "styled-components"
import * as styleVars from "../variable"

export const QuestionColumn = styled.div`
  width: 50%;
  @media only screen and (max-width: ${styleVars.smUp}) {
    width: 100%;
  }
`

export default QuestionColumn
