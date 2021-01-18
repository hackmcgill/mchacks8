import styled from "styled-components"

export const Container = styled.div`
  display: flex;

  .SocialMediaBar__icon {
    margin-left: 14px;
    transition: filter 0.2s ease-in;
    filter: invert(7%) sepia(4%) saturate(14%) hue-rotate(314deg)
      brightness(89%) contrast(86%);

    &:hover {
      filter: invert(41%) sepia(9%) saturate(3131%) hue-rotate(197deg)
        brightness(92%) contrast(84%);
    }

    > a {
      display: flex;
      padding: 5px;
    }

    img {
      height: 20px;
      width: auto;
    }
  }
`

export default Container
