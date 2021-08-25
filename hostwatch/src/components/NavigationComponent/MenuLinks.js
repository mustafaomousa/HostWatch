import { Avatar, Box, Divider, Flex, Link, Menu, MenuButton, MenuGroup, MenuList, Stack, Text } from "@chakra-ui/react";
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
                <MenuItem to="/">Home</MenuItem>
                {!sessionUser && (
                    <>
                        <MenuItem to="/login">Log in</MenuItem>
                        <MenuItem to="/signup">Sign up</MenuItem>
                    </>
                )}
                {sessionUser && (
                    <>
                        <MenuItem to="/vehicles">Vehicles</MenuItem>
                        <MenuItem to="/trips">Trips</MenuItem>
                        <MenuItem to="/">Earnings</MenuItem>
                        <MenuItem to="/">Charts</MenuItem>
                        <Menu>
                            <MenuButton  colorScheme="blue">
                                <Flex>
                                    <Avatar src="" />
                                </Flex>      
                            </MenuButton>
                            <MenuList>
                                <MenuGroup align="center" title={sessionUser.email}>
                                    <Divider />
                                    <Box align="center" p="5px">
                                        <MenuItem>Account</MenuItem>
                                        <MenuItem onClick={(e) => dispatch(sessionActions.logout())}>Log out</MenuItem>    
                                    </Box>
                                </MenuGroup>
                            </MenuList>
                        </Menu>
                    </>
                )}
            </Stack>
        </Box>
    )
}

export default MenuLinks;
