import { Avatar, Box, Divider, Flex, Link, Menu, MenuButton, MenuGroup, MenuList, Stack, StackDivider, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

import * as sessionActions from "../../store/session";

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
    return (
      <Link href={to}>
        <Text display="block" {...rest}>
          {children}
        </Text>
      </Link>
    )
}

const MenuLinks = ({isOpen}) => {
    const dispatch = useDispatch();

    const sessionUser = useSelector(state => state.session.user);

    return (
        <Box
            display={{ base: isOpen ? "block" : "none", md: "block" }}
            flexBasis={{ base: "100%", md: "auto" }}
        >
            <Stack
              spacing={8}
              align="center"
              justify={["center", "space-between", "flex-end", "flex-end"]}
              direction={["column", "row", "row", "row"]}
              pt={[4, 4, 0, 0]}
            >
                <MenuItem to="/" color="white">Home</MenuItem>
                {!sessionUser && (
                    <>
                        <MenuItem color="white" to="/login">Log in</MenuItem>
                        <MenuItem color="white" to="/signup">Sign up</MenuItem>
                    </>
                )}
                {sessionUser && (
                    <>
                        <MenuItem to="/host" color="white">Host Console</MenuItem>
                        <MenuItem color="white" onClick={(e)=> dispatch(sessionActions.logout())}>Log out</MenuItem>
                    </>
                )}
                <StackDivider />
                <Divider />
            </Stack>
        </Box>
    )
}

export default MenuLinks;
