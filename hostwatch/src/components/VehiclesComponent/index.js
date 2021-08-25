import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import AddVehicleComponent from "./AddVehicleComponent"
import VehicleChart from "./VehicleChart"

const VehiclesPage = () => {
    const sessionUser = useSelector(state => state.session.user);

    if (!sessionUser) return <Redirect to="/login" />

    return (
        <div>
            <AddVehicleComponent />
            <VehicleChart />
        </div>
    )
};

export default VehiclesPage;