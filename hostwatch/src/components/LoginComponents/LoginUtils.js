import { useDisclosure } from "@chakra-ui/react";

const LoginUtils = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    
    return { isOpen, onOpen, onClose }
};

export default LoginUtils