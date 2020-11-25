import styled from "styled-components"
import * as styleVars from "../variable"

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: auto;
  padding-top: 96px;
  margin-bottom: 96px;

  @media only screen and (max-width: 1345px) {
    max-width: 1000px;
  }

  @media only screen and (max-width: 1118px) {
    flex-direction: column;
    justify-content: center;
  }
`

export default Content
