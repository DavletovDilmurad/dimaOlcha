import { Box, Container, Heading, Text } from "@chakra-ui/react";
import Cart from "../../app/card";
import Pruducts from "../../card/card";

function Bolalaruchun() {
  return (
    <Box ml={{ base: "5px", xl: "100px" }}>
      <Box>
        <Box>
          <Heading>Bolalar uchun o‘yinchoq va mahsulotlar</Heading>
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
                Bolalar uchun stol o‘yinlari
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
            O‘yinchoqlar
              </Text>
              <Text
                marginTop={"5px"}
                cursor={"pointer"}
                transition={"0.3s"}
                _hover={{ color: "red" }}
                color={"gray"}
                fontSize={"12px"}
              >
               Konstruktorlar
              </Text>
              <Text
                fontSize={"12px"}
                marginTop={"5px"}
                cursor={"pointer"}
                transition={"0.3s"}
                _hover={{ color: "red" }}
                color={"gray"}
              >
         Qo‘g‘irchoqlar va aksessuarlar
              </Text>
              <Text
                marginTop={"5px"}
                fontSize={"12px"}
                cursor={"pointer"}
                transition={"0.3s"}
                _hover={{ color: "red" }}
                color={"gray"}
              >
          Stol o‘yinlari
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
   Shakllar va aksessuarlar
              </Text>
              <Text
                marginTop={"5px"}
                cursor={"pointer"}
                transition={"0.3s"}
                _hover={{ color: "red" }}
                color={"gray"}
                fontSize={"12px"}
              >
              Bolalar uchun kiyim
              </Text>
              <Text
                fontSize={"12px"}
                marginTop={"5px"}
                cursor={"pointer"}
                transition={"0.3s"}
                _hover={{ color: "red" }}
                color={"gray"}
              >
       Kichkintoylar uchun kiyim
              </Text>
              <Text
                marginTop={"5px"}
                fontSize={"12px"}
                cursor={"pointer"}
                transition={"0.3s"}
                _hover={{ color: "red" }}
                color={"gray"}
              >
         Skeytlar va Samokatlar
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
export default Bolalaruchun;
