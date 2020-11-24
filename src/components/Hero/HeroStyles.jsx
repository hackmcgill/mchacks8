import styled from "styled-components"
import * as styleVars from "../variable"

export const HeroStyles = styled.section`
  max-width: 1440px;
  margin: auto;

  position: relative;
  padding: 120px 144px;
  margin-top: 120px;
  margin-bottom: 144px;
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
  }

  .hero__subheading {
    font-size: 1.25em;
    font-weight: 400;
    text-align: left;
    color: ${styleVars.hackBlack60};
    margin-top: 0;
    margin-bottom: 0;
  }

  .hero__cta {
    font-size: 1.8rem;
    font-weight: 400;
    text-align: left;
  }

  .hero__email {
    font-weight: 400;
    text-align: left;
    margin-bottom: 1rem;
    margin-top: 3rem;
    display: block;
    color: ${styleVars.hackBlack60};
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
    margin-bottom: 89px;

    .hero__cta {
      font-size: 1.4rem;
    }

    .hero__email {
      font-size: 1.4rem;
    }
    
    .hero__illustrations {
      width: 880px;
      top: 40px;
    }
  }

  @media only screen and (max-width: 1077px) {
    padding: 0 2rem;
    margin-top: 80px;
    margin-bottom: 43px;
    text-align: center;

    .hero__heading {
      font-size: 4.8rem;
    }

    .hero__subheading {
      text-align: center;
      padding-bottom: 0;
    }

    .hero__topsubheading {
      text-align: center;
      padding-bottom: 0;
    }

    .hero__cta {
      font-size: 1.4rem;
      text-align: center;
    }

    .hero__email {
      font-size: 1.4rem;
      text-align: center;
    }

    .hero__illustrations {
      max-width: 100%;
      margin-top: 80px;

      position: static;
      top: 0;
      right: 0;
      left: 0;
    }
  }
`

export default HeroStyles
