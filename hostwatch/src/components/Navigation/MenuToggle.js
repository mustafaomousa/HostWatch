import { Box } from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { isDesktop, isMobile } from "react-device-detect";

const MenuToggle = ({ toggle, isOpen }) => {
    if (isDesktop) return (
        <Box display={{base: "block", md:"none"}} onClick={toggle}>
            {isOpen ? <CloseIcon color="white" /> : <HamburgerIcon boxSize="25px" color="white" />}
        </Box>
    )

    return (
        <Box>
            
        </Box>
    )
};

export default MenuToggle;