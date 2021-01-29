import React from "react"

import Container from "../FAQ/Container"
import Question from "../FAQ/Question"

const Resources = ({ visible }) => (
  <Container className={!visible ? "hidden" : ""}>
    <h2>Sponsor Resources</h2>
    <Question question="Balsamiq API">
      Balsamiq Wireframes is the perfect first UX design tool for anyone
      interested in getting into UX. It's by far the most approachable: you just
      drag, drop, and arrange controls on the page, and voila', you made your
      first User Interface! They even have online courses and articles to teach
      you all about UI design.
      <br />
      Learn more{" "}
      <a
        href="https://balsamiq.com/wireframes/cloud/"
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
    </Question>

    <Question question="echoAR API">
      echoAR is a cloud platform for augmented and virtual reality (AR/VR) that
      provides tools and server-side infrastructure to help developers &
      companies quickly build and deploy AR/VR apps and experience.
      <br />
      Learn more{" "}
      <a
        href="https://console.echoar.xyz/"
        target="_blank"
        rel="noopener noreferrer"
      >
        here
      </a>
      .
    </Question>

    <Question question="Big Bang API">
      This prediction Service from Salesforce is one of Big Bang's core
      products!
      <br />
      Learn more{" "}
      <a
        href="https://help.salesforce.com/articleView?id=bi_edd_prediction_service.htm&type=5Einstein"
        target="_blank"
        rel="noopener noreferrer"
      >
        here
      </a>
      .
      <br />
      The API resource for Big Bang's productivity challenge can also be found{" "}
      <a
        href="https://developers.google.com/drive/api/v3/reference"
        target="_blank"
        rel="noopener noreferrer"
      >
        here
      </a>
      .
    </Question>

    <Question question="Business-in-a-Box API">
      Over 2,000 high-quality fill-in the blanks templates created by business
      experts & lawyers. Get your business-in-a-box toolkit. Save money on legal
      fees. Build your dream business. Save your time & money.
      <br />
      Learn more{" "}
      <a
        href="https://app.business-in-a-box.com/account/create"
        target="_blank"
        rel="noopener noreferrer"
      >
        here
      </a>
      .
    </Question>

    <Question question="Voiceflow API">
      Visually design, prototype and publish Alex Skills and Google Actions
      without writing code!
      <br />
      Learn more{" "}
      <a
        href="https://www.voiceflow.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        here
      </a>
      .
    </Question>

    <Question question="The Codex">
      Jumpstart your programming journey with The Codex's engaging projects.
      Clear, concise, and practical videos with no fluff!
      <br />
      Get started{" "}
      <a
        href="https://thecodex.me/app/get-started"
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
