import { Box, Flex, Heading, Select} from "@chakra-ui/react";
import { useState } from "react";
import { useSelector } from "react-redux";

const HostEarnings = () => {
    const [selectedVehicle, setSelectedVehicle] = useState(undefined);

    const hostVehicles = useSelector(state => state.vehicles);
    
    const changeSelectedVehicle = (e) => setSelectedVehicle(e.target.value);

    return (
        <Box pt={20}>
            <Heading color="black">
                your earnings.
            </Heading>
            <Flex flexDir="column" pt={20}>
                <Select value={selectedVehicle} variant="flushed" placeholder="select a vehicle">
                    {Object.keys(hostVehicles).map((vehicleId, _idx) => {
                        let vehicle = hostVehicles[vehicleId];

                        return (
                            <option key={vehicleId} value={vehicleId} onChange={changeSelectedVehicle}>{vehicle.year} {vehicle.make} {vehicle.model}</option>
                        )
                    })}
                </Select>
                <Box>

                </Box>
            </Flex>
        </Box>
    )
};

export default HostEarnings;

