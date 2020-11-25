import React from "react"

import HeroStyles from "./HeroStyles"
import { ArrowStyles } from "./FloatingStyles"

import Buildings from "./Buildings"
// import Button from "./Button"
import SignUpForm from "./SignUpForm"

import BuildingImg from "../../assets/images/designs/buildings.svg"
import RoadImg from "../../assets/images/designs/road.svg"
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
      <p class="hero__subheading">Virtual Event · Jan 29-31, 2021</p>
      <p class="hero__email">
        <span class="hero__line">Sign up for updates on McHacks.</span> <span class="hero__line">No spam, we promise.</span>
      </p>
      <SignUpForm />
      {/* <Button onClick={Dashboard}>Apply →</Button>
      <Button onClick={Live}>Live Site</Button> */}
      <div class="hero__illustrations">
        <Buildings src={BuildingImg} />
      </div>
    </HeroStyles>
    <img src={RoadImg} style={{width: '100%', marginBottom: '-7px'}} />
  </>
)

export default Hero
