import { useDisclosure } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as tripActions from "../../../store/trip";
import { getHostVehicles } from "../../../store/vehicle";

const TripsUtils = () => {
    const dispatch = useDispatch();

    const sessionUser = useSelector(state => state.session.user);
    const hostTrips = useSelector(state => state.trips);
    const hostVehicles = useSelector(state => state.vehicles);

    useEffect(() => {
        dispatch(tripActions.getHostTrips(sessionUser.id))
        dispatch(getHostVehicles(sessionUser.id))
    }, [dispatch, sessionUser.id])

    const addATrip = (values, actions) => {
        return dispatch(tripActions.addHostTrip(values.startDate, values.endDate, values.earnings, values.reinbursements, values.milesDriven, values.vehicleId,  sessionUser.id, "www.google.com"))
        .catch((res) => {
            if (res.data && res.data.errors) {
                // setErrors(res.data.errors);
            }
        })
    };

    const { isOpen, onOpen, onClose } = useDisclosure();

    return { addATrip, hostTrips, sessionUser, isOpen, onOpen, onClose, hostVehicles }
};

export default TripsUtils;