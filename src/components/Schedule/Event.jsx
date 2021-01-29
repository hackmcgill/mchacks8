import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPizzaSlice,
  faGamepad,
  faLaptop,
  faBus,
  faBed,
  faCog,
} from "@fortawesome/free-solid-svg-icons"

const Event = ({
  type,
  startTime,
  endTime,
  name,
  location,
  subtitle,
  description,
}) => {
  let logo = <div></div>
  if (type === "Workshop") {
    logo = <FontAwesomeIcon icon={faCog} />
  } else if (type === "Activity") {
    logo = <FontAwesomeIcon icon={faGamepad} />
  } else if (type === "Food") {
    logo = <FontAwesomeIcon icon={faPizzaSlice} />
  } else if (type === "Main Event") {
    logo = <FontAwesomeIcon icon={faLaptop} />
  } else if (type === "Travel") {
    logo = <FontAwesomeIcon icon={faBus} />
  } else if (type === "Rest") {
    logo = <FontAwesomeIcon icon={faBed} />
  }

  return (
    <div className={"Event type-" + type.replace(/\s+/g, "-").toLowerCase()}>
      <div className="time">
        <div className="start">
          {startTime}
          {endTime ? <span> - {endTime}</span> : ""}
          {" ET"}
          <br />
          <div className="activityType">{type.toUpperCase()}</div>
        </div>
      </div>
      <div className="detail">
        <div className="overview">
          <div className="name">
            {name}
            <small>{subtitle}</small>
          </div>
          {description ? <div className="description">{description}</div> : ""}
          {location ? <div className="location"># {location}</div> : ""}
        </div>
      </div>
      <div className="icon">{logo}</div>
    </div>
  )
}

export default Event
