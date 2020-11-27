import styled from "styled-components"
import * as styleVars from "../variable"

export const Button = styled.button`
  font-family: Brown, sans-serif;
  font-weight: 400;
  font-size: 14px;
  text-transform: none;
  color: white;
  background-color: ${styleVars.purple};
  border-radius: 36px;
  border: none;
  transition: all 0.15s ease-in-out;
  box-shadow: 2px 4px 16px 0 rgba(92, 99, 171, 0.1);
  padding-top: 14px;
  padding-bottom: 15px;
  padding-left: 25px;
  padding-right: 25px;
  //   height: 45px;
  //   width: 175px;
  display: block;
  margin: auto;
  margin-top: 40px;

  &:hover {
    background-color: ${styleVars.purple}2A;
    color: ${styleVars.purple};
  }

  @media only screen and (min-width: 1077px) {
    display: flex;
    margin-left: 0;
    margin-right: 0;
    align-items: left;
  }
`

export default Button
