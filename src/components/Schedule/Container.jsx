import styled from "styled-components"
import * as styleVars from "../variable"

export const Container = styled.section`
  max-width: 1080px;
  text-align: center;
  margin: auto;
  margin-bottom: 100px;
  margin-top: 100px;

  &.hidden {
    display: none !important;
  }

  h2 {
    color: ${styleVars.colorHackRed};
    font-size: 3rem;
    font-weight: 400;
    margin-bottom: 0px;
  }

  p {
    margin-top: 0px;
    margin-bottom: 25px;
  }

  .sticky-inner-wrapper {
    z-index: 1000;
  }

  .DayTabNav {
    display: flex;
    background: ${styleVars.hackWhite};
    margin-top: -10px;

    .DayTab {
      text-align: center;
      flex: 1;
      cursor: pointer;
      border-bottom: 2px solid ${styleVars.hackBlack20};
      padding: 20px 0 10px 0;
      font-size: 1.2em;
      color: ${styleVars.hackBlack60};
      font-weight: normal;

      &.active {
        color: ${styleVars.hackBlack80};
        border-color: ${styleVars.colorHackRed};
      }
    }
  }

  .Event {
    display: flex;
    border-bottom: 2px solid ${styleVars.hackBlack10};

    .time {
      flex: 1;
      padding: 24px 32px 24px 32px;
      box-sizing: border-box;
      text-align: left;
      display: flex;
      align-items: center;

      .to {
        font-size: 0.85em;
      }

      .type {
        color: ${styleVars.colorHackRed};
      }
    }

    .detail {
      flex: 1;
      padding: 24px 32px 24px 32px;
      box-sizing: border-box;
      text-align: left;
      display: flex;
      align-items: center;

      .overview {
        flex: 1;

        .name {
          font-size: 1.5em;
          margin-top: -4px;

          small {
            font-size: 0.8em;
          }
        }

        .type {
          font-size: 0.85em;
          text-transform: uppercase;
        }

        .description {
          color: ${styleVars.hackBlack70};
          font-family: "Hind Siliguri", sans-serif;
          margin-top: 8px;
        }

        .location {
          margin-top: 8px;
          font-family: "Hind Siliguri", sans-serif;
        }
      }
    }
    .icon {
      flex: 1;
      padding: 24px 32px 24px 32px;
      box-sizing: border-box;
      font-size: 2.4em;
      display: block;
      margin-left: auto;
      margin-right: auto;
      margin-top: auto;
      margin-bottom: auto;
    }

    .icon > *:before {
      background: linear-gradient(#f2463a, #f2463a55);
      background-clip: text;
      text-fill-color: transparent;
    }

    &.type-main-event {
      .icon {
        color: ${styleVars.colorHackRed};
      }
      .activityType {
        color: ${styleVars.colorHackRed};
      }
    }

    &.type-activity {
      .icon {
        color: ${styleVars.colorPurplePale};
      }
      .activityType {
        color: ${styleVars.colorPurple};
      }
    }

    &.type-food,
    &.type-workshop,
    &.type-travel,
    &.type-rest {
      .icon {
        color: ${styleVars.colorPurple};
      }
      .activityType {
        color: ${styleVars.colorPurple};
      }
    }
  }

  @media only screen and (max-width: ${styleVars.smUp}) {
    display: block;
  }
`

export default Container
