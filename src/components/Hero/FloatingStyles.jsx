import styled from "styled-components"
import * as styleVars from "../variable"

export const ArrowStyles = styled.img`
position: relative;
left: 20px;
`

export const BirdStyles = styled.img`
position: absolute;
width: 150px;
top: 120px;
right: -150px;

@media only screen and (max-width: ${styleVars.lgUp}) {
  top: 80px;
  right: 50px;
}

@media only screen and (max-width: ${styleVars.mdUp}) {
  top: 100px;
  right: 110px;
  width: 100px;
}

@media only screen and (max-width: ${styleVars.smUp}) {
  top: -340px;
  right: 20px;
  width: 100px;
}
`
