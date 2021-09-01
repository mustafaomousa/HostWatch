import { Box, Text } from "@chakra-ui/react";
import { isDesktop, isMobile } from "react-device-detect";

const Logo = () => {
    return (
        <Box>
            {isDesktop && (<Text fontSize="4xl" fontWeight="bold" color="white">
                HostWatch
            </Text>)}
            {isMobile && (<Text fontSize="lg" fontWeight="bold" color="white">
                HostWatch
            </Text>)}
        </Box>
    )
};

export default Logo;