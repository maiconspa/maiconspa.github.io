import { NavbarContainer } from "./Navbar.styled";
import { ReactComponent as Logo } from "../../assets/Logo.svg";

function getDateTime() {
    const options = { 
        weekday: 'short', 
        day: '2-digit', 
        month: 'short', 
        hour: '2-digit', 
        minute: '2-digit', 
        hour12: false 
    };
      
    const now = new Date();
    return new Intl.DateTimeFormat('en-US', options).format(now);
}

const Navbar = () => {
    return <NavbarContainer>
        <div>
            <Logo />
            <p>Home</p>
        </div>
        <p> {getDateTime()} </p>
    </NavbarContainer>
};

export default Navbar;