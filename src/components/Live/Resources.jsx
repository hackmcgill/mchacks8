import React from "react"

import Container from "../FAQ/Container"
import Question from "../FAQ/Question"

const Resources = ({ visible }) => (
  <Container className={!visible ? "hidden" : ""}>
    <h2>Sponsor Resources</h2>
    <Question question="Balsamiq API">
      Balsamiq Wireframes is the perfect first UX design tool for anyone interested in getting into UX. It's by far the most approachable: you just drag, drop, and arrange controls on the page, and voila', you made your first User Interface! They even have online courses and articles to teach you all about UI design.
      <br/>
      Get a free 90 days trial (expires May 1st) using code BQJHGBGXG010521{" "}
      <a
        href="https://balsamiq.com/wireframes/cloud/sales/promo/"
        target="_blank"
        rel="noopener noreferrer"
      >
        here
      </a>
      .
    </Question>

    <Question question="Twilio API">
      Facilitate your app's communication functions with the Twilio API found{" "}
      <a
        href="https://www.twilio.com/blog/apply-promo-code"
        target="_blank"
        rel="noopener noreferrer"
      >
        here
      </a>
      .
      <br/>
      Get 25$ worth of Twilio credits valid for 5 days starting January 29th with code McHacks_2021
      .
    </Question>

    <Question question="echoAR API">
    echoAR is a cloud platform for augmented and virtual reality (AR/VR) that provides tools and server-side infrastructure to help developers & companies quickly build and deploy AR/VR apps and experience. For FREE access to all Business Plan features of the echoAR platform, register{" "}
      <a
        href="https://console.echoar.xyz/#/auth/register-promo?code=McHacks"
        target="_blank"
        rel="noopener noreferrer"
      >
        here
      </a>
      .
    </Question>
  </Container>
)

export default Resources
