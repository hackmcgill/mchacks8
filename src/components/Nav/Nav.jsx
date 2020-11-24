import React, { useEffect, useState } from "react"

import { slide as Menu } from "react-burger-menu"
import { Link } from "gatsby"

import Container from "./Container"
import IconContainer from "./IconContainer"
import Icon from "./Icon"
import Links from "./Links"
import NavLink from "./NavLink"
import MobileMenu from "./MobileMenu"

import Logo from "../../assets/images/logos/mchacks-martlet.svg"

const Nav = ({
  scrollToAbout = () => {},
  scrollToSponsor = () => {},
  scrollToFaq = () => {},
}) => {
  const [hasBorder, setHasBorder] = useState(window.pageYOffset !== 0)
  const handleScroll = () => {
    setHasBorder(window.pageYOffset !== 0)
  }

  useEffect(() => {
    document.addEventListener('scroll', handleScroll)
    return () => document.removeEventListener('scroll', handleScroll)
  }, [])

  const NavItems = () => (
    <>
      <NavLink onClick={scrollToAbout}>About</NavLink>
      <NavLink onClick={scrollToSponsor}>Sponsor</NavLink>
      <NavLink onClick={scrollToFaq}>FAQ</NavLink>
      <NavLink href="/live" target="_blank">
        Live
      </NavLink>
      <NavLink
        href="https://2019.mchacks.ca"
        target="_blank"
        rel="noopener noreferrer"
      >
        2019
      </NavLink>
    </>
  )
  return (
    <Container className={hasBorder ? 'has-border' : ''}>
      <div>
        <IconContainer>
          <Link to="/">
            <Icon src={Logo} />
          </Link>
        </IconContainer>
        <Links>{NavItems()}</Links>
      </div>
      <Menu isOpen={true} styles={MobileMenu}>
        {NavItems()}
      </Menu>
    </Container>
  )
}

export default Nav
