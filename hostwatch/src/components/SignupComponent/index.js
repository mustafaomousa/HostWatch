import { Center } from "@chakra-ui/react";
import SignupComponent from "./SignupComponent";

import "./index.css";

const SignupPage = () => {
    return (
        <Center className="SignupPage">
            <h1>Signup to continue</h1>
            <SignupComponent />
        </Center>
    )
};
export default SignupPage;