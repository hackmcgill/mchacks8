import styled from "styled-components"
import * as styleVars from "../variable"

export const HeroStyles = styled.section`
  max-width: 1440px;
  margin: auto;

  position: relative;
  padding: 128px 144px;
  margin-top: 120px;
  margin-bottom: 148px;
  z-index: 1;
  top: 50px;

  .hero__heading {
    text-align: left;
    margin: auto;
    font-size: 3.875em;
    font-weight: normal;
    color: ${styleVars.colorHackRed};
    position: relative;
  }

  .hero__topsubheading {
    font-size: 1.875em;
    font-weight: 400;
    text-align: left;
    color: ${styleVars.hackBlack};
    margin-top: 0;
    margin-bottom: -1.6rem;
  }

  .hero__subheading {
    font-size: 1.25em;
    font-weight: 400;
    text-align: left;
    color: ${styleVars.hackBlack60};
    margin-top: 1rem;
    margin-bottom: 0;
    font-family: "Brown", san-serif;
  }

  .hero__cta {
    font-size: 1.8rem;
    font-weight: 400;
    text-align: left;
  }

  .hero__email {
    font-weight: 400;
    text-align: left;
    margin-bottom: 1.2rem;
    margin-top: 4.8rem;
    display: block;
    color: ${styleVars.hackBlack60};
    font-family: "Brown", san-serif;
    font-size: 1.4rem;
  }

  .hero__illustrations {
    position: absolute;
    top: -18px;
    right: 34px;
    width: 1173px;
    z-index: -2;
  }

  @media only screen and (min-width: 1078px) and (max-width: 1399px) {
    max-width: 1280px;
    padding: 100px 60px;
    margin-top: 40px;
    margin-bottom: 117px;

    .hero__cta {
      font-size: 1.4rem;
    }

    .hero__illustrations {
      width: 880px;
      top: 50px;
    }
  }

  @media only screen and (max-width: 1077px) {
    padding: 0 2rem;
    margin-top: 80px;
    margin-bottom: 43px;
    text-align: center;

    .hero__heading {
      font-size: 48px;
    }

    .hero__topsubheading {
      text-align: center;
      padding-bottom: 0;
      font-size: 20px;
      margin-bottom: -10px;
    }

    .hero__subheading {
      display: block;
      text-align: center;
      margin: auto;
      margin-top: 16px;
      font-size: 18px;
      border-top: 2px solid ${styleVars.colorPurpleLight};
      border-bottom: 2px solid ${styleVars.colorPurpleLight};
      padding: 8px 0;
      max-width: 440px;
    }

    .hero__cta {
      font-size: 14px;
      text-align: center;
    }

    .hero__email {
      text-align: center;
      margin-top: 36px;
    }

    .hero__illustrations {
      max-width: 100%;
      margin-top: 120px;

      position: static;
      top: 0;
      right: 0;
      left: 0;
    }
  }

  @media only screen and (max-width: 410px) {
    .hero__line {
      display: block;
    }
  }
`

export default HeroStyles
