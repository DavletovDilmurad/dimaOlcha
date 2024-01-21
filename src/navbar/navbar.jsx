import { Button } from "@chakra-ui/button";
import { Box, Heading, Text } from "@chakra-ui/layout";
import { Link } from "react-router-dom";
import { IoCallOutline } from "react-icons/io5";

function Navbar() {
  return (
    <Box bg={{base:"white",xl:'red'}} justifyContent={"center"}>
      
      <Box
        justifyContent={"space-between"}
        display={{ base: "none", xl: "flex" }}
        h={"60px"}
        
      >
        <Box padding={"10px"} gap={"20px"} display={"flex"}>
          <Button
            _hover={{ color: "white", bg: "red" }}
            bg={"white"}
            border={"3px solid white"}
            borderRadius={"10px"}
            color={"red"}
          >
            <Link to={"/muddatlitolov"}> 0% Muddatli to'lov</Link>
          </Button>
          <Button
            _hover={{ color: "red", bg: "white" }}
            bg={"red"}
            border={"3px solid white"}
            borderRadius={"10px"}
            color={"white"}
          >
            <Link to={"/chegirmalar"}> Chegirmalar</Link>
          </Button>
          <Button
            _hover={{ color: "white", bg: "red" }}
            bg={"white"}
            border={"3px solid white"}
            borderRadius={"10px"}
            color={"red"}
          >
            <Link to={"/Yutuqlioyinlar"}> Yutuqli o'yinlar</Link>
          </Button>
          <Text
            fontSize={"20px"}
            mt={"5px"}
            _hover={{ color: "gray" }}
            color={"white"}
          >
            {" "}
            <Link to={"/Saytxaritasi"}>Sayt xaritasi</Link>
          </Text>
        </Box>
        <Box w={"900px"} gap={"60px"} display={"flex"}>
          <Text color={"white"} _hover={{ color: "gray" }} fontSize={"30px"}>
            +998 (71) 202 202 1
          </Text>
          <Button
            mt={"5px"}
            _hover={{ color: "red", bg: "white" }}
            bg={"red"}
            border={"3px solid white"}
            borderRadius={"10px"}
            color={"white"}
          >
            <Link to={"/olchadasoting"}> olcha da soting</Link>
          </Button>
          <Box mt={"14px"} gap={"20px"} display={"flex"}>
            <Text mt={"-10px"} color={"white"} fontSize={"30px"}>
              |
            </Text>
            <Text cursor={"pointer"} objectFit={"cover"} color={"white"}>
              Ўзб
            </Text>
            <Text cursor={"pointer"} color={"white"}>
              O'z
            </Text>
            <Text cursor={"pointer"} color={"white"}>
              Рус
            </Text>
            <Text mt={"-10px"} color={"white"} fontSize={"30px"}>
              |
            </Text>
          </Box>
        </Box>
      </Box>
      <Box
        justifyContent={"space-between"}
        display={{ base: "flex", xl: "none" }}
      >
        <Box fontSize={"35px"}>
          <IoCallOutline />
        </Box>

        <Box>
          <Text color={"red"} fontWeight={"999"} fontSize={"40px"}>
            <Link  to={"/"}>Olcha</Link>
          </Text>
        </Box>
        <Box>
          <Text mr={"30px"} fontSize={"30px"}>
            O'z
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
export default Navbar;
