import React from "react"

import Container from "./Container"
import Question from "./Question"

const FAQ = ({ scrollRef }) => (
  <Container ref={scrollRef}>
    <h2>Frequently Asked Questions</h2>

    <Question question="What is a hackathon?">
      A hackathon is a social coding event where programmers, designers, and
      developers collaborate to solve a problem.
    </Question>

    <Question question="When is McHacks?">
      This year, we'll be extending McHacks from 24 to 36 hours! It will start
      on Friday at 7pm and end on Sunday at 2:30pm Eastern time on the weekend
      of January 29-31.
    </Question>

    <Question question="How can I participate in McHacks?">
      This year McHacks is taking place virtually and we’ll be using platforms
      like Discord and Zoom to connect hackers around the world. We’ll provide
      more details on how to participate as we get closer to McHacks, but right
      now all you need to do is apply.
    </Question>

    <Question question="Who can participate? ">
      Students from all backgrounds and skill levels are welcome at McHacks.
    </Question>

    <Question question="What skills do I need to participate?">
      We welcome students with a variety of skill sets! While experience coding
      and programming is a plus, we offer beginner friendly workshops and
      mentorship to get you started. Teams will also need people with strong
      presentation skills and brilliant ideas.
    </Question>

    <Question question="Do I need a team?">
      While you can work alone, McHacks is a social event and working with
      others is encouraged. If you don’t have one already, there are a few ways
      to find a team: Ask your friends and invite them to McHacks, ask around in
      the McHacks Discord server, or form a team at our team formation session
      at the beginning of McHacks.
    </Question>

    <Question question="How big can my team be?">
      Teams can be up to four people.
    </Question>

    <Question question="How much does it cost?">
      Nothing! Thanks to our amazing sponsors, McHacks is completely free for
      all our hackers.
    </Question>

    <Question question="Will there be prizes?">
      Yes! Prizes will be announced closer to McHacks.
    </Question>

    <Question question="I have more questions!">
      We have answers! Feel free to send us a DM on Facebook, Instagram, or
      Twitter, or email us at{" "}
      <a href="mailto:contact@mchacks.ca">contact@mchacks.ca</a> if you have any
      questions or concerns.
    </Question>
  </Container>
)

export default FAQ
