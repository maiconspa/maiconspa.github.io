import { BlobContainer, Container, Text, Title } from "./LandingPage.styled"
import { ReactComponent as SVGBlob } from "../../assets/lp_main_blob.svg"
import TextedLogo from "../../components/TextedLogo"
import Button from "../../components/Button"

export const LandingPage = () => {

    return <>
        <BlobContainer>
            <SVGBlob width="100vh" height="100vh"/>
        </BlobContainer>
        <Container blur>
            <TextedLogo/>
            <Title>Hello<br/>to my world</Title>
            <Text>My simple portifolio, made slowly but with so much love.</Text>
            <Button text="check out my cv" newTabLink="https://drive.google.com/file/d/1-ORxv6Ge0R8KU7r05We7oJ3adKaI8XZi/view?usp=sharing"/>
        </Container>
    </>
}