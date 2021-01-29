import React from "react"
import Content from "./Content"
import Text from "../Discord/Text"

import Container from "../Discord/Container"

const Info = ({ visible }) => (
  <Container className={!visible ? "hidden" : ""}>
    <Content>
      <Text>
        <h2>
          Welcome to McHacks! 8{" "}
          <span role="img" aria-label="wave">
            👋
          </span>{" "}
        </h2>
        <p>We’re so glad you could make it.</p>
        <p>
          Our live site is divided into three pages:
          <ul>
            <li>
              Check out the events, workshops, and activities happening this
              weekend under <b>Schedule</b>.
            </li>
            <li>
              Get access to our sponsors’ APIs and resources available for you
              to use during McHacks under <b>Sponsor Resources</b>.
            </li>
            <li>
              Learn the ins and outs of Discord with our comprehensive{" "}
              <b>Discord Guide</b>.
            </li>
          </ul>
        </p>
        <p>
          Make sure to join the{" "}
          <a href="https://discord.gg/XZ9Xd5j4NF">McHacks 8 Discord</a> server
          for announcements, event Zoom links, to chat with other hackers, and
          to form teams. It’s important for all hackers to be in the Discord as
          it is the main form of communication between hackers, judges,
          sponsors, and organizers during McHacks.
          <br/>
          Check out the <a href="#">McHacks 8 devpost</a> for
          information on judging and prizes and to submit your team’s hack.
        </p>
        <p>
          Feel free to get in touch with an organizer on Discord if you have any
          questions or concerns! To reach us, you can DM any organizer with the
          green Organizer role, or post in <b>#troubleshooting</b> or{" "}
          <b>#ask-organizers</b> for help.
        </p>
        <br />
        Happy hacking,
        <br />
        McHacks Team
      </Text>
    </Content>
  </Container>
)

export default Info
