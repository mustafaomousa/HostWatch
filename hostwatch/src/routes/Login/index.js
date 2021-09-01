import { Center } from "@chakra-ui/react";
import LoginComponent from "../../components/LoginComponents/LoginComponent"

import "./index.css";

const LoginPage = () => {
    return (
        <Center className="LoginPage">
            <h1>Login to continue</h1>
            <LoginComponent className="LoginComponentContainer" />
        </Center>
    )
};

export default LoginPage;