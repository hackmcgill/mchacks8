import React, { useState } from "react"

import SEO from "../components/SEO/SEO"
import LiveNav from "../components/Live/LiveNav"
import Schedule from "../components/Schedule/Schedule"
import Maps from "../components/Maps/Maps"
import Info from "../components/Live/Info"
import Resources from "../components/Live/Resources"
import DiscordGuide from "../components/Discord/DiscordGuide"

const LivePage = () => {
  const [activePage, _setActivePage] = useState("schedule")
  const setActivePage = newPage => {
    if (newPage !== activePage) {
      _setActivePage(newPage)
      window.scrollTo(0, 0)
    }
  }

  return (
    <div>
      <SEO />
      <LiveNav switchPage={setActivePage} activePage={activePage} />
      <Schedule visible={activePage === "schedule"} />
      <Info visible={activePage === "info"} />
      <Resources visible={activePage === "resources"} />
      <DiscordGuide visible={activePage === "discord"} />
    </div>
  )
}

export default LivePage
