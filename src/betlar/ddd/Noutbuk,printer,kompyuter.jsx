import { Box, Container, Heading, Text } from "@chakra-ui/react";
import Cart from "../../app/card";
import Pruducts from "../../card/card";

function Noutbukprinterkompyuter() {
  return (
    <Box ml={{ base: "5px", xl: "100px" }}>
      <Box>
        <Box>
          <Heading>Noutbuk, printer, kompyuterlar</Heading>
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
                Noutbuklar
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
                Kompyuter qurilmalari
              </Text>
              <Text
                marginTop={"5px"}
                cursor={"pointer"}
                transition={"0.3s"}
                _hover={{ color: "red" }}
                color={"gray"}
                fontSize={"12px"}
              >
                Protsessorlar
              </Text>
              <Text
                fontSize={"12px"}
                marginTop={"5px"}
                cursor={"pointer"}
                transition={"0.3s"}
                _hover={{ color: "red" }}
                color={"gray"}
              >
                Videokartalar
              </Text>
              <Text
                marginTop={"5px"}
                fontSize={"12px"}
                cursor={"pointer"}
                transition={"0.3s"}
                _hover={{ color: "red" }}
                color={"gray"}
              >
                Kompyuter platalari
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
                Ofis jihozlari
              </Text>
              <Text
                marginTop={"5px"}
                cursor={"pointer"}
                transition={"0.3s"}
                _hover={{ color: "red" }}
                color={"gray"}
                fontSize={"12px"}
              >
                Printerlar va skanerlar
              </Text>
              <Text
                fontSize={"12px"}
                marginTop={"5px"}
                cursor={"pointer"}
                transition={"0.3s"}
                _hover={{ color: "red" }}
                color={"gray"}
              >
                Printerlar va KFMlar uchun moslamalar
              </Text>
              <Text
                marginTop={"5px"}
                fontSize={"12px"}
                cursor={"pointer"}
                transition={"0.3s"}
                _hover={{ color: "red" }}
                color={"gray"}
              >
                Qattiq disklar
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
export default Noutbukprinterkompyuter;
