import { Box, Center, Fade, Heading, Link } from "@chakra-ui/react";

import FadeEffect from "./FadeEffect";

import "./index.css";

const HomePageComponent = ({sessionUser}) => {
    const { isOpen } = FadeEffect();

    return (
        <Box>
            <Center flexDir="column" h="800px">
                <Fade in={isOpen}>
                    <Box>
                        <Heading fontSize="65px">
                            car share management for your business.
                        </Heading>
                    </Box>    
                </Fade>
                {!sessionUser && (
                <Heading size="sm">
                    join today for <Link href="/signup" color="blue">free</Link>.
                </Heading>)}
            </Center>
        </Box>
    )
};

export default HomePageComponent;