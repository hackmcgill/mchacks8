import styled from "styled-components"

export const Container = styled.nav`
  z-index: 2;
  height: 9rem;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid transparent;
  transition: 0.25s border-color ease-in;

  &.has-border {
    border-bottom: 2px solid #f4f4f4;
  }
`

export default Container
