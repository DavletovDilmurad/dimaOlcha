import { Box, Container, Heading, Text } from "@chakra-ui/react";
import Cart from "../../app/card";
import Pruducts from "../../card/card";

function Barchasioshxonauchun() {
  return (
    <Box ml={{ base: "5px", xl: "100px" }}>
      <Box>
        <Box>
          <Heading>Barchasi oshxona uchun</Heading>
        </Box>

        <Box flexWrap={"wrap"} marginTop={"30px"} display={"flex"}>
          {/* Boshlandi 1 */}
          <Box>
            <Box>
              <Text
                cursor={"pointer"}
                transition={"0.3s"}
                _hover={{ color: "red" }}
                fontWeight={"700"}
                fontSize={"20px"}
              >
                Yirik oshxona texnikasi
              </Text>
            </Box>
            <Box marginTop={"15px"}>
              <Text
                cursor={"pointer"}
                transition={"0.3s"}
                _hover={{ color: "red" }}
                fontWeight={"700"}
                fontSize={"20px"}
              >
         Muzlatgichlar
              </Text>
              <Text
                marginTop={"5px"}
                cursor={"pointer"}
                transition={"0.3s"}
                _hover={{ color: "red" }}
                color={"gray"}
                fontSize={"12px"}
              >
            Elektrik va gaz plitalari
              </Text>
              <Text
                fontSize={"12px"}
                marginTop={"5px"}
                cursor={"pointer"}
                transition={"0.3s"}
                _hover={{ color: "red" }}
                color={"gray"}
              >
              Idish yuvish mashinalari

              </Text>
              <Text
                marginTop={"5px"}
                fontSize={"12px"}
                cursor={"pointer"}
                transition={"0.3s"}
                _hover={{ color: "red" }}
                color={"gray"}
              >
          Mikroto‘lqinli pechlar
              </Text>
            </Box>

            <Box marginTop={"10px"}>
              <Text
                cursor={"pointer"}
                transition={"0.3s"}
                _hover={{ color: "red" }}
                fontWeight={"700"}
                fontSize={"20px"}
              >
             Mayda oshxona texnikasi
              </Text>
              <Text
                marginTop={"5px"}
                cursor={"pointer"}
                transition={"0.3s"}
                _hover={{ color: "red" }}
                color={"gray"}
                fontSize={"12px"}
              >
             Blenderlar
              </Text>
              <Text
                fontSize={"12px"}
                marginTop={"5px"}
                cursor={"pointer"}
                transition={"0.3s"}
                _hover={{ color: "red" }}
                color={"gray"}
              >
     Mikserlar
              </Text>
              <Text
                marginTop={"5px"}
                fontSize={"12px"}
                cursor={"pointer"}
                transition={"0.3s"}
                _hover={{ color: "red" }}
                color={"gray"}
              >
            Sendvich tayyorlagichlar
              </Text>
            </Box>
          </Box>
          {/* tamom */}
          <Pruducts />
        </Box>
      </Box>
    </Box>
  );
}
export default Barchasioshxonauchun;
