import { useDisclosure, useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as tripActions from "../../store/trip";

const TripsUtils = () => {
    const dispatch = useDispatch();
    const toast = useToast();

    const sessionUser = useSelector(state => state.session.user);
    const hostTrips = useSelector(state => state.trips);

    useEffect(() => {
        dispatch(tripActions.getHostTrips(sessionUser.id))
    }, [])

    const addATrip = (values, actions) => {
        return dispatch(tripActions.addHostTrip(values.startDate, values.endDate, values.earnings, values.reinbursements, values.milesDriven, 1,  sessionUser.id, "www.google.com"))
        .catch((res) => {
            if (res.data && res.data.errors) {
                // setErrors(res.data.errors);
            }
        })
    };

    const { isOpen, onOpen, onClose } = useDisclosure();

    return { addATrip, hostTrips, sessionUser, isOpen, onOpen, onClose }
};

export default TripsUtils;