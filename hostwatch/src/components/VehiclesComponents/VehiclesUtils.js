import { Td, Tr, useDisclosure } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

import * as vehicleActions from "../../store/vehicle";

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
        <Tr key={hostVehicles[key].id}>
            <Td>{hostVehicles[key].year}</Td>
            <Td>{hostVehicles[key].make}</Td>
            <Td>{hostVehicles[key].model}</Td>      
            <Td>{hostVehicles[key].createdAt.slice(0,10)}</Td>   
        </Tr>
    )));

    return { dispatch, addAVehicle, isOpen, onOpen, onClose, GenerateVehicleChart }
};

export default VehiclesUtils;