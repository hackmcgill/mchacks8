import React from "react"

import Container from "./Container"
import Content from "./Content"
import Image from "./Image"
import Text from "./Text"
import Button from "./Button"

import SponsorImg from "../../assets/images/designs/sponsor.svg"

const mailTo = () => {
  window.location = "mailto:sponsorship@mchacks.ca?Subject=Hello!"
}

const Sponsor = ({ scrollRef }) => (
  <Container ref={scrollRef}>
    <Content>
      <Image src={SponsorImg} />
      <Text>
        <h2>Interested in sponsoring McHacks?</h2>
        <p>
          This winter, the best and brightest students from around the
          world will connect remotely for 36 hours to shake the world
          of technology. We want you to be a part of this incredible
          experience, and we need your help to bring it to life!
        </p>
        <p>
          Spend a weekend with McHacks and witness tomorrow’s leaders
          using your technologies to solve real problems from the ground
          up. We've got a virtual table with your name on it!
        </p>
        <Button onClick={mailTo}>Become a Sponsor</Button>
      </Text>
    </Content>
  </Container>
)

export default Sponsor
