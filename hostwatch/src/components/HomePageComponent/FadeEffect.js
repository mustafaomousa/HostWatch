import { useDisclosure } from "@chakra-ui/react";
import { useEffect } from "react";

const FadeEffect = () => {
    const { isOpen, onToggle } = useDisclosure();

    useEffect(()=> onToggle(),[])
    
    return { isOpen, onToggle}
};

export default FadeEffect;