import { useState } from "react";
import Logo from "./Logo";
import MenuLinks from "./MenuLinks";
import MenuToggle from "./MenuToggle";
import NavigationBarContainer from "./NavigationBarContainer";

const NavigationBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <NavigationBarContainer {...props}>
            <Logo
                w="100px"
            />
            <MenuToggle toggle={toggle} isOpen={isOpen} />
            <MenuLinks isOpen={isOpen} />
        </NavigationBarContainer>
    )
}

export default NavigationBar;