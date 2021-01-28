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
  transition: 0.4s box-shadow ease-in;

  &.has-border {
    box-shadow: 0 2px 8px 1px rgba(0, 0, 0, 0.07);
  }
`

export default Container
