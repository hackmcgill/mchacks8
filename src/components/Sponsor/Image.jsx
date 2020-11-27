import styled from "styled-components"

export const Image = styled.img`
  height: auto;
  object-fit: contain;
  position: relative;
  left: -120px;
  width: 558px;
  height: auto;

  @media only screen and (max-width: 1345px) {
    width: 418px;
  }

  @media only screen and (max-width: 1118px) {
    \display: none;
  }
`

export default Image
