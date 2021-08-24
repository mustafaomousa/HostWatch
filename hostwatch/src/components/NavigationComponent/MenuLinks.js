import { Box, Link, Stack, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import LogoutButton from "../LogoutComponent/LogoutButton";

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
                        <LogoutButton />
                    </>
                )}
            </Stack>
        </Box>
    )
}

export default MenuLinks;
