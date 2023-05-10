import { ButtonContainer } from "./Button.styled"

export const Button = ({text, newTabLink}) => {

    return <ButtonContainer onClick={() => newTabLink && window.open(newTabLink, "_blank")}>
        {text}
    </ButtonContainer>
}