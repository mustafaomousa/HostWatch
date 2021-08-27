import { Box, Center, Fade, Heading, Link, useDisclosure } from "@chakra-ui/react";
import { useEffect } from "react";
import { useSelector } from "react-redux";


import "./index.css";

const HomePageComponent = () => {
    const { isOpen, onToggle } = useDisclosure();

    const sessionUser = useSelector(state => state.session.user);

    useEffect(()=> onToggle(),[sessionUser])

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