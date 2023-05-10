import styled from "styled-components"

export const ButtonContainer = styled.div`
    width: fit-content;
    padding: 5px 30px;
    cursor: pointer;
    border-radius: 75px;
    background-image: linear-gradient(90deg, #CA3A9D 0%, #4B5BD6 49.76%, #18F1E4 100%);
    transition: all .5s ease-in;
    
    &:hover {
        box-shadow: 0px 0px 20px #E0E0E066;
        transition: all 0.5s linear;
    }
`

