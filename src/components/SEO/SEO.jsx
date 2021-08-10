import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

import bannerImage from "../../assets/images/banner.png"

const SEO = ({ description, title, lang, image }) => (
  <Helmet>
    <html lang={lang} />
    <title lang={lang}>{title}</title>
    <meta charSet="utf-8" />
    <meta name="description" content={description} />
    <meta name="robots" content="index, follow" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#ffffff"></meta>
    <meta name="image" content={bannerImage} />
  </Helmet>
)

SEO.defaultProps = {
  lang: "en",
  meta: ["hackathon", "Canada", "McGill", "Mentorship"],
  description:
    "Canada’s original university hackathon. 36 hour long event of innovation, coding & mentorship happening January 29 - 31 at McGill University",
  title: "McHacks",
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
