import React from "react"

import Container from "./Container"
import Content from "./Content"
import Image from "./Image"
import NavLink from "./NavLink"
import * as COLORS from "../variable"

// import ads from "../../assets/images/sponsor/Ads logo.png"
import aus from "../../assets/images/sponsor/aus.png"
import cisco from "../../assets/images/sponsor/cisco.svg"
import google from "../../assets/images/sponsor/google.svg"
import gorilla from "../../assets/images/sponsor/GG_WT_Vert_RGB.svg"
import ibm from "../../assets/images/sponsor/ibm.svg"
import indico from "../../assets/images/sponsor/indico-logo-final-black.png"
import jetBrains from "../../assets/images/sponsor/jetbrains-variant-3.png"
import manulife from "../../assets/images/sponsor/manulife.svg"
import microsoft from "../../assets/images/sponsor/microsoft.svg"
import netlify from "../../assets/images/sponsor/full-logo-light.png"
import nuance from "../../assets/images/sponsor/nuance.png"
import rbc from "../../assets/images/sponsor/rbc.svg"
import stickerMule from "../../assets/images/sponsor/stickermule.png"
import tandemLaunch from "../../assets/images/sponsor/TandemLaunch_Logo_high_resolution.png"
import twilio from "../../assets/images/sponsor/twilio.png"
import vercel from "../../assets/images/sponsor/vercel.svg"
import voiceflow from "../../assets/images/sponsor/logo_black.png"
import wolfram from "../../assets/images/sponsor/wolfram.png"
import bigbang from "../../assets/images/sponsor/new/BigBang_logo_colour.svg"

import ivey from "../../assets/images/sponsor/ivey.svg"
import huawei from "../../assets/images/sponsor/new/Huawei_678x452.png"
import biztree from "../../assets/images/sponsor/new/BIB-LOGO-BLUE-transparent_bg.png"
import fdm from "../../assets/images/sponsor/FDM-Logo-BLACK.svg"
import balsamiq from "../../assets/images/sponsor/new/balsamiq-logo-screen.svg"
import flinks from "../../assets/images/sponsor/new/flinks4.png"
import ludia from "../../assets/images/sponsor/new/Ludia 1920 x 1080.png"
import ibwave from "../../assets/images/sponsor/new/logo-iBwave-RED.png"
import echoar from "../../assets/images/sponsor/new/echoAR.png"
import neoregan from "../../assets/images/sponsor/new/Neo Regan.png"
import googleCloud from "../../assets/images/sponsor/new/google_cloud.png"
import novartis from "../../assets/images/sponsor/new/Novartis.png"

const Logos = ({ scrollRef }) => (
  <Container ref={scrollRef}>
    <Content
      style={{
        fontSize: "5rem",
        justifyContent: "center",
        color: COLORS.colorHackRed,
      }}
    >
      Our sponsors
    </Content>
    {/* Tier 1/Mega sponsors */}
    <Content style={{ justifyContent: "space-evenly", textAlign: "center" }}>
      <NavLink
        href="https://www.novartis.ca/en/careers"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={novartis} style={{ width: "80%" }} />
      </NavLink>
    </Content>
    <Content style={{ justifyContent: "space-evenly", textAlign: "center" }}>
      <NavLink
        href="https://www.huawei.com/ca/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={huawei} style={{ width: "700px" }} />
      </NavLink>
    </Content>
    {/* <Content style={{ textAlign: "center", justifyContent: "space-around" }}>
      <NavLink href="https://adgear.com/en/" target="_blank">
        <Image src={ads} style={{ minWidth: "80%" }} />
      </NavLink>
    </Content> */}
    {/* Tier2/kilo sponsors */}
    <Content style={{ justifyContent: "space-evenly", textAlign: "center" }}>
      <NavLink
        href="https://www.business-in-a-box.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={biztree} style={{ width: "700px" }} />
      </NavLink>
    </Content>
    <Content style={{ justifyContent: "space-evenly" }}>
      <NavLink
        href="https://www.fdmgroup.com/en-ca/ca-graduates/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={fdm}
          style={{ width: "100%", maxWidth: "250px", height: "50px" }}
        />
      </NavLink>
      <NavLink
        href="https://gorillagroup.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={gorilla}
          style={{ width: "100%", maxWidth: "250px", height: "50px" }}
        />
      </NavLink>
      <NavLink
        href="https://balsamiq.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={balsamiq} style={{ minWidth: "100%", height: "50px" }} />
      </NavLink>
    </Content>
    {/* Tier 3/Byte sponsors */}
    <Content style={{ justifyContent: "space-evenly", alignItems: "center" }}>
      <NavLink
        href="https://www.ludia.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={ludia}
          style={{ width: "100%", maxWidth: "80px", transform: "scale(1.7)" }}
        />
        {/* need an image link for this company */}
      </NavLink>
      <NavLink
        href="https://flinks.io/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={flinks} style={{ width: "100%", maxWidth: "150px" }} />
      </NavLink>
      <NavLink
        href="https://edu.google.com/programs/?modal_active=none/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={googleCloud} style={{ width: "100%", maxWidth: "200px" }} />
      </NavLink>
      <NavLink
        href="http://hackp.ac/mlh-stickermule-hackathons"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={stickerMule} style={{ width: "100%", maxWidth: "150px" }} />
      </NavLink>
      <NavLink
        href="https://connect.bigbang360.com/mchacks-21-careers"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={bigbang}
          style={{ width: "100%", maxWidth: "100px", transform: "scale(1.7)" }}
        />
        {/* need an image link for this company */}
      </NavLink>
    </Content>
    {/* Tier 4/In-Kind sponsors */}
    <Content style={{ justifyContent: "space-evenly" }}>
      <NavLink
        href="https://www.jetbrains.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={jetBrains} style={{ width: "100%", maxWidth: "50px" }} />
      </NavLink>
      <NavLink
        href="https://www.netlify.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={netlify} style={{ width: "100%", maxWidth: "75px" }} />
      </NavLink>
      <NavLink
        href="https://www.echoar.xyz/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={echoar} style={{ width: "100%", maxWidth: "75px" }} />
      </NavLink>
      <NavLink
        href="https://www.voiceflow.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={voiceflow} style={{ width: "100%", maxWidth: "75px" }} />
      </NavLink>
      <NavLink
        href="https://www.twilio.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={twilio} style={{ width: "100%", maxWidth: "75px" }} />
      </NavLink>
      <NavLink
        href="https://www.ibwave.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={ibwave} style={{ width: "100%", maxWidth: "75px" }} />
      </NavLink>
      <NavLink
        href="https://www.vercel.com/?utm_source=mchacks7"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={vercel} style={{ width: "100%", maxWidth: "75px" }} />
      </NavLink>
    </Content>
  </Container>
)

export default Logos
