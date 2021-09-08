import { useDisclosure } from "@chakra-ui/react";
import { useDispatch } from "react-redux";

import * as sessionActions from "../../store/session";

const LoginUtils = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const dispatch = useDispatch();

    const loginDemouser = () => {
        return dispatch(sessionActions.login({credential: "demouser", password: "password"}));
    }

    return { isOpen, onOpen, onClose, loginDemouser }
};

export default LoginUtils