import { Box } from "@chakra-ui/react"
import LoggedMiles from "./LoggedMiles";

import VehicleControlComponent from "./VehicleControlComponent";

const Host = ({sessionUser, hostVehicles, todaysDate}) => {

    return (
        <Box>
            <VehicleControlComponent hostVehicles={hostVehicles}/>
            <LoggedMiles />
        </Box>
    )
};

export default Host;