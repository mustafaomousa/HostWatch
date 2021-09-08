import { Box, Center, Heading, Td, Tr, useDisclosure } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

import * as vehicleActions from "../../../store/vehicle";

const VehiclesUtils = () => {
    const dispatch = useDispatch();

    const sessionUser = useSelector(state => state.session.user);

    const addAVehicle = (values, actions) => {
        return dispatch(vehicleActions.addHostVehicle(values.year, values.make, values.model, values.startingMileage, "www.google.com", sessionUser.id))
        .catch((res) => {
            if (res.data && res.data.errors) {
                // setErrors(res.data.errors);
            }
        })
    };

    const { isOpen, onOpen, onClose } = useDisclosure();

    const GenerateVehicleChart = ({hostVehicles}) => (Object.keys(hostVehicles).map((key, _idx) => (
        <Center w="200px" h="200px" backgroundColor="#222629" align="center" borderRadius="0.35em">
            <Heading size="sm" color="white" >{hostVehicles[key].year} {hostVehicles[key].make} {hostVehicles[key].model}</Heading>
        </Center>
    )));

    return { dispatch, addAVehicle, isOpen, onOpen, onClose, GenerateVehicleChart }
};

export default VehiclesUtils;