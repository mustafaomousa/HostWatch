import { Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";

import * as sessionActions from "../../store/session";

const LogoutButton = () => {
    const dispatch = useDispatch();

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    };

    return (
        <Button onClick={logout}>
            logout
        </Button>
    )
};

export default LogoutButton;