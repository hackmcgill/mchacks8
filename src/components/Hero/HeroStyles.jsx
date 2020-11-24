import styled from "styled-components"
import * as styleVars from "../variable"

export const HeroStyles = styled.section`
  max-width: 1440px;
  margin: auto;

  position: relative;
  padding: 0 2rem;
  margin-top: 100px;
  margin-bottom: 144px;
  padding-top: 120px;
  z-index: 1;
  top: 50px;

  @media only screen and (min-width: ${styleVars.mdUp}) {
    padding: 120px 160px;
  }

  @media only screen and (max-width: ${styleVars.smUp}) {
    margin-bottom: 8px;
    top: 0;
  }

  .hero-header {
    @media only screen and (max-width: ${styleVars.smUp}) {
      text-align: center;
    }
  }

  .hero__heading {
    text-align: left;
    margin: auto;
    font-size: 3.875em;
    font-weight: normal;
    color: ${styleVars.colorHackRed};
    position: relative;

    @media only screen and (max-width: ${styleVars.smUp}) {
      text-align: center;
      font-size: 4.8rem;
    }
  }

  .hero__shape {
    position: absolute;
    width: 38px;
    height: 26.03px;
    left: 444.03px;
    top: 404px;

    background: #F2463A;
    transform: rotate(90deg);
  }

  .hero__topsubheading {
    font-size: 1.875em;
    font-weight: 400;
    text-align: left;
    color: ${styleVars.hackBlack};
    margin-top: 0;
    margin-bottom: 0;

    @media only screen and (max-width: ${styleVars.smUp}) {
      text-align: center;
      padding-bottom: 0;
    }
  }

  .hero__subheading {
    font-size: 1.25em;
    font-weight: 400;
    text-align: left;
    color: ${styleVars.hackBlack60};
    margin-top: 0;
    margin-bottom: 0;

    @media only screen and (max-width: ${styleVars.smUp}) {
      text-align: center;
      padding-bottom: 0;
    }
  }

  .hero__cta {
    font-size: 1.4rem;
    font-weight: 400;
    text-align: center;

    @media only screen and (min-width: ${styleVars.smUp}) {
      font-size: 1.8rem;
      text-align: left;
    }
  }

  .hero__email {
    font-weight: 400;
    text-align: left;
    margin-bottom: 1rem;
    margin-top: 3rem;
    display: block;
    color: ${styleVars.hackBlack60};

    @media only screen and (max-width: ${styleVars.smUp}) {
      text-align: center;
    }
  }

  .hero__illustrations {
    position: absolute;
    top: -100px;
    right: 309px;
    width: 900px;
    max-width: 100%;
    z-index: -2;

    @media only screen and (max-width: ${styleVars.lgUp}) {
      right: 37px;
      top: -80px;
    }

    @media only screen and (max-width: ${styleVars.smUp}) {
      top: 0;
      right: 0;
      left: 0;
      position: relative;
    }
  }
`

export default HeroStyles
