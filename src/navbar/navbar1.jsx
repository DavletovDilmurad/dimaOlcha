import { Box, Heading, Text, Container } from "@chakra-ui/layout";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import DrawerExample from "../katalog/katalog";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import { IoPersonSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
function Navbar1() {
  const [state, setState] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const naviage = useNavigate();
  let onSearch = () => {
    naviage(`/search/${state}`);
  };
  return (
    <Container justifyContent={'center'} display={'flex'} >
      <Box gap={"20px"} display={"flex"}>
        <Box>
          <Text
            display={{ base: "none", xl: "flex" }}
            color={"red"}
            fontWeight={"999"}
            fontSize={"40px"}
          >
            <Link to={"/"}>Olcha</Link>
          </Text>
        </Box>
        <Box mt={"10px"}>
          <DrawerExample />
        </Box>
        <Box>
        
        </Box >
        <Box  display={'flex'}>
        <Box mt={"20px"}>
          <Button _hover={{ bg: "white" }} bg={"white"}>
            {" "}
            <Link to={"/basket"} fontSize={"20px"}>
              <FaShoppingCart />
            </Link>{" "}
          </Button>
        </Box>

        <Box mr={"15px"} mt={"20px"}>
          <Button onClick={onOpen} _hover={{ bg: "white" }} bg={"white"}>
            {" "}
            <Text ml={"10px"}>
              <IoPersonSharp />
            </Text>{" "}
          </Button>
        </Box>
        </Box>
     
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Tizimga kirish yoki profil yaratish</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Box display={"flex"}>
                {" "}
                <Button
                  position={"relative"}
                  left={"2px"}
                  borderLeft={"2px solid black"}
                  bg={"white"}
                  borderRight={"none"}
                  borderY={"2px solid black"}
                  color={"black"}
                >
                  +998
                </Button>{" "}
                <Input
                  w={"400px"}
                  border={"2px solid gray"}
                  type="number"
                  placeholder="Kontakt raqami"
                />
              </Box>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red">Tasdiqlash</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
}
export default Navbar1;
