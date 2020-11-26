import styled from "styled-components"

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1000px;
  margin: auto;
  padding-top: 96px;
  margin-bottom: 96px;

  @media only screen and (max-width: 1345px) {
    max-width: 880px;
  }

  @media only screen and (max-width: 1118px) {
    flex-direction: column-reverse;
    justify-content: center;
    padding: 0 30px;
  }
`

export default Content
