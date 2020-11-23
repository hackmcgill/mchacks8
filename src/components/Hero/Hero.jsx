import React from "react"

import HeroStyles from "./HeroStyles"
import { ArrowStyles, BirdStyles } from "./FloatingStyles";

import Buildings from "./Buildings"
// import Button from "./Button"
import SignUpForm from "./SignUpForm"

import BuildingImg from "../../assets/images/designs/buildings.svg"
import BirdsImg from "../../assets/images/designs/birds.svg"
import ArrowImg from "../../assets/images/designs/arrow.svg"

// const Dashboard = () => {
//   window.location = "https://app.mchacks.ca"
// }

// const Live = () => {
//   window.location = "/live"
// }

const Hero = () => (
  <>
    <HeroStyles>
      <h2 class="hero__topsubheading">Create, build, and play</h2>
      <div class="hero-header">
        <h1 class="hero__heading" style={{ display: 'inline' }}>McHacks</h1>
        <ArrowStyles src={ArrowImg} />
        <ArrowStyles src={ArrowImg} style={{ left: 25 }} />
      </div>
      <p class="hero__subheading"> McGill University · Feb 1-3, 2021</p>
      <p class="hero__email">
        Sign up for updates about McHacks. No spam, we promise.
      </p>
      <SignUpForm />
      {/* <Button onClick={Dashboard}>Apply →</Button>
      <Button onClick={Live}>Live Site</Button> */}
      <div class="hero__illustrations">
        <Buildings src={BuildingImg} />
        <BirdStyles src={BirdsImg} />
      </div>
    </HeroStyles>
  </>
)

export default Hero
