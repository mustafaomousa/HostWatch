import { Box, Center, Container, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import DeckGL from "@deck.gl/react";
import { LineLayer } from '@deck.gl/layers';
import { StaticMap } from 'react-map-gl';

import VehicleControlComponent from "./VehicleControlComponent";
import { useEffect, useState } from "react";

const Host = ({sessionUser, hostVehicles, todaysDate}) => {
    const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoibXVzdGFmYW0xIiwiYSI6ImNrdDNnOTQybzB4aDMzMXBrZDRrejZ0MXQifQ.4LciaKmkv9Sv1LNkAH_Lfw';
    const [userLong, setUserLong] = useState(-122.41669);
    const [userLat, setUserLat] = useState(37.7853)

    const INITIAL_VIEW_STATE = {
        longitude: -122.41669,
        latitude: 37.7853,
        zoom: 17,
        pitch: 30,
        bearing: 0
      };

    const layers = [
        new LineLayer({id: 'line-layer'})
    ];

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(( position )=> {
            setUserLong(position.coords.longitude);
            setUserLat(position.coords.latitude);
        })
    },[])

    return (
        <Flex pt={20} flexDir="column" align="center">
            <Flex w="100%" pb={10}>
                <Heading>
                    dashboard.
                </Heading>
            </Flex>
            <Flex flexDir="column" w="100%" >
                <SimpleGrid columns={3} spacing={10} h={280}>
                    <Box backgroundColor="lightgray" >

                    </Box>
                    <Box backgroundColor="lightgray" >

                    </Box>
                    <Box backgroundColor="lightgray" >

                    </Box>
                </SimpleGrid>
                <Heading size="md" mt={10} pb={5}>
                    locate your fleet
                </Heading>
                <Flex mt={10} h={580}>
                    <Box backgroundColor="lightgray" w="100%" position="relative">
                        <DeckGL
                            initialViewState={INITIAL_VIEW_STATE}
                            controller={true}
                            layers={layers}
                            
                        >
                            <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />
                        </DeckGL>
                    </Box>
                </Flex>
                <Heading size="md" mt={10} pb={5}>
                            control your fleet
                </Heading>
                <SimpleGrid columns={2} h={280} spacing={10} >
                    <Flex flexDir="column" justify="center" backgroundColor="lightgray" overflow="scroll">
                        <VehicleControlComponent hostVehicles={hostVehicles} />
                    </Flex>
                    <Box backgroundColor="lightgray">
                    </Box>      
                </SimpleGrid>
            </Flex>    
        </Flex>
        
    )
};

export default Host;