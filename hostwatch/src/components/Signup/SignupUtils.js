import { useDisclosure } from "@chakra-ui/react";

const SignupUtils = () => {
    const { onOpen, isOpen, onClose } = useDisclosure();

    return { onOpen, isOpen, onClose }
};

export default SignupUtils;