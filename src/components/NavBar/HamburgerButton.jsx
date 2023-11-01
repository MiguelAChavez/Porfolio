import styled from "styled-components";

function HamburgerButton() {
  return (
    <Burger>
      <a className="HamButton" data="hamburger-menu">
        <b></b>
        <b></b>
        <b></b>
      </a>
    </Burger>
  );
}
export default HamburgerButton;

const Burger = styled.div`
  .HamButton {
    position: absolute;
    cursor: pointer;
    transform: translate(-50%, -50%);
    width: 44px;
    height: 33px;
  }

  .HamButton b {
    position: absolute;
    left: 0;
    width: 44px;
    height: 3px;
    background-color: white;
  }

  .HamButton b:nth-child(1) {
    top: 0;
  }

  .HamButton b:nth-child(2) {
    top: 50%;
    transform: translateY(-50%);
  }

  .HamButton b:nth-child(3) {
    top: 100%;
    transform: translateY(-100%);
  }
`;
