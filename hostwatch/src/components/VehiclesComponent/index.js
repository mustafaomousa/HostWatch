import { Box, Center, Grid, GridItem } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { useEffect, useState } from "react";

import AddVehicleComponent from "./AddVehicleComponent"
import TuroStatsComponent from "./TuroStatsComponent";
import VehicleChart from "./VehicleChart"
import VehicleControlComponent from "./VehicleControlComponent";
import * as vehicleActions from "../../store/vehicle";
import Header from "./Header";


const VehiclesPage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const hostVehicles = useSelector(state => state.vehicles);
    
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const breakpoint = 1400;

    useEffect(() => {
        dispatch(vehicleActions.getHostVehicles(sessionUser.id))
    },[])

    if (!sessionUser) return <Redirect to="/login" />

     return (
        <Box>    
            <Header />
            <VehicleControlComponent hostVehicles={hostVehicles}/>    
            <TuroStatsComponent />
            <AddVehicleComponent />    
            <VehicleChart hostVehicles={hostVehicles}/>    
        </Box>
        
    )

};

export default VehiclesPage;