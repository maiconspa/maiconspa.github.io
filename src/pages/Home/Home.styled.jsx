import styled, { keyframes } from "styled-components";

const imageAnimation = keyframes`
    0% {
        opacity: 0;
    }

    70% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`

export const Container = styled.div`
    display: grid;
    justify-content: center;
    height: 100%;
    margin: 20px;

    img {
        display: flex;
        justify-self: center;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: 2px solid #fff;
        animation: ${imageAnimation} 2s ease-in;
        z-index: 1;
        box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.3);
    }

    div {
        margin-top: -50px;
        padding: 80px 40px 40px;
        border-radius: 20px;
        background-color: #D2D5BA;
        box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.3);
        animation: ${imageAnimation} 3s ease-out;
    }

    p {
        font-weight: bold;
    }
`