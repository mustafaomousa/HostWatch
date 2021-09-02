import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as vehicleActions from "../../store/vehicle";

const HostUtils = () => {
    const dispatch = useDispatch();

    const sessionUser = useSelector(state => state.session.user);
    const hostVehicles = useSelector(state => state.vehicles);

    const todaysDate = Date().toLocaleString().slice(0,10);

    useEffect(() => {
        if (!sessionUser) {
            return <Redirect to="/" />
        } else {
            dispatch(vehicleActions.getHostVehicles(sessionUser.id))
        }
    },[dispatch])

    return {dispatch, sessionUser, hostVehicles, todaysDate };
};

export default HostUtils;