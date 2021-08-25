import { Box, Center, Fade, Heading, Link, useDisclosure } from "@chakra-ui/react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import waveBackgroundVideo from "./Clean_Wave_Background.mp4"

import "./index.css";

const HomePageComponent = () => {
    const { isOpen, onToggle } = useDisclosure();

    const sessionUser = useSelector(state => state.session.user);

    useEffect(()=> onToggle(),[sessionUser])

    return (
        <Box pt={58} >
            <video className="HomePageComponentBackground" autoPlay loop muted>
                <source src={waveBackgroundVideo} type="video/mp4" />
            </video>
            <Center flexDir="column" h="800px" className="HomePageComponentHeaderContainer">
                <Fade in={isOpen}>
                    <Box>
                        <Heading fontSize="65px">
                            car share management for your business.
                        </Heading>
                    </Box>    
                </Fade>
                {!sessionUser && (<Heading size="sm">
                    join today for <Link href="/signup" color="blue">free</Link>.
                </Heading>)}
            </Center>
            <Box className="HomePageComponentOne" backgroundColor="#81A4BB" h="500px" mt="-47px">

            </Box>
        </Box>
    )
};

export default HomePageComponent;