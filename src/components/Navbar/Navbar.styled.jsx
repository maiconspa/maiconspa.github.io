import styled, { keyframes }from "styled-components";

const enterAnimation = keyframes`
  0% {
    margin-top: -50px;
  }

  80% {
    margin-top: 50px;
  }

  100% {
    margin-top: 20px;
  }
`

export const NavbarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 30px;
    margin: 20px;
    padding: 10px 20px;
    border-radius: 20px;
    background: rgba(236, 222, 203, 0.80);
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.30);
    backdrop-filter: blur(2px);
    animation: ${enterAnimation} 1s ease-out;

    div {
        display: flex;
        align-items: center;
        gap: 20px;
    }

    p {
        font-weight: bold;
    }
`;