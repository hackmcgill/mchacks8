import styled from "styled-components"
import * as styleVars from "../variable"

export const Text = styled.div`
  margin-bottom: 1rem;
  padding: 26px;
  h2 {
    color: #f2463a;
    font-size: 3rem;
    font-weight: 400;
    margin-bottom: 0.22rem;

    @media only screen and (min-width: ${styleVars.smUp}) {
      font-size: 3rem;
    }
  }
  b {
    color: #f2463a;
  }
  a {
    :hover {
      color: #f2463a;
    }
  }
`

export default Text
