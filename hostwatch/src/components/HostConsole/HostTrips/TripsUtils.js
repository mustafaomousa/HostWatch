import { useDisclosure, Center, Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as tripActions from "../../../store/trip";

const TripsUtils = () => {
    const dispatch = useDispatch();

    const sessionUser = useSelector(state => state.session.user);
    const hostTrips = useSelector(state => state.trips);

    useEffect(() => {
        dispatch(tripActions.getHostTrips(sessionUser.id))
    }, [dispatch, sessionUser.id])

    const addATrip = (values, actions) => {
        return dispatch(tripActions.addHostTrip(values.startDate, values.endDate, values.earnings, values.reinbursements, values.milesDriven, values.vehicleId,  sessionUser.id, "www.google.com"))
        .catch((res) => {
            if (res.data && res.data.errors) {
                // setErrors(res.data.errors);
            }
        })
    };

    const GenerateTripsChart = ({hostTrips}) => (Object.keys(hostTrips).map((key, _idx) => (
        <Center w="200px" h="200px" flexDir="column" backgroundColor="#222629" align="center" borderRadius="0.35em">
            {/* <Heading size="sm" color="white" >{hostTrips[key].startDate} to {hostTrips[key].endDate}</Heading> */}
            <br />
            <Heading size="xs" color="white">  ${hostTrips[key].earnings} </Heading>
        </Center>
    )));

    const { isOpen, onOpen, onClose } = useDisclosure();

    return { addATrip, hostTrips, sessionUser, isOpen, onOpen, onClose, GenerateTripsChart }
};

export default TripsUtils;