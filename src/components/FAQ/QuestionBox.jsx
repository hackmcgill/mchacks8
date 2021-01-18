import styled from "styled-components"
import * as styleVars from "../variable"

export const QuestionBox = styled.div`
  .box {
    flex-direction: row;
    display: flex;
    @media only screen and (max-width: ${styleVars.smUp}) {
      flex-direction: column;
    }
    margin: auto;
    width: 90%;
    border: 4px solid ${styleVars.hackBlack10};
    border-radius: 75px;
    padding: 20px;
    text-align: center;
    color: ${styleVars.hackBlack10};
    position: relative;
  }

  .bubble:before {
    content: "";
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 10px solid transparent;
    border-right: 10px solid ${styleVars.hackBlack10};
    border-top: 10px solid ${styleVars.hackBlack10};
    border-bottom: 10px solid transparent;
    right: 60px;
    bottom: -23px;
  }

  .bubble:after {
    content: "";
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 10px solid transparent;
    border-right: 10px solid #fff;
    border-top: 10px solid #fff;
    border-bottom: 10px solid transparent;
    right: 64px;
    bottom: -13px;
  }

  flex-direction: row;
  display: flex;
  @media only screen and (max-width: ${styleVars.smUp}) {
    flex-direction: column;
    right-margin: 40px;
  }
`

export default QuestionBox
