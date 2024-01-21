import { Box, Container, Heading, Text } from "@chakra-ui/react";
import Cart from "../../app/card";
import Pruducts from "../../card/card";

function GozallikvaSalomatlik() {
  return (
    <Box ml={{ base: "5px", xl: "100px" }}>
      <Box>
        <Box>
          <Heading>Go‘zallik va salomatlik</Heading>
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
                Teri parvarishi
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
                Qo‘l uchun
              </Text>
              <Text
                marginTop={"5px"}
                cursor={"pointer"}
                transition={"0.3s"}
                _hover={{ color: "red" }}
                color={"gray"}
                fontSize={"12px"}
              >
                Tana parvarishi
              </Text>
              <Text
                fontSize={"12px"}
                marginTop={"5px"}
                cursor={"pointer"}
                transition={"0.3s"}
                _hover={{ color: "red" }}
                color={"gray"}
              >
                Lablar uchun
              </Text>
              <Text
                marginTop={"5px"}
                fontSize={"12px"}
                cursor={"pointer"}
                transition={"0.3s"}
                _hover={{ color: "red" }}
                color={"gray"}
              >
                Yuz terisini parvarish qilish
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
                Gigiena vositalari
              </Text>
              <Text
                marginTop={"5px"}
                cursor={"pointer"}
                transition={"0.3s"}
                _hover={{ color: "red" }}
                color={"gray"}
                fontSize={"12px"}
              >
                Tish chyotkasi
              </Text>
              <Text
                fontSize={"12px"}
                marginTop={"5px"}
                cursor={"pointer"}
                transition={"0.3s"}
                _hover={{ color: "red" }}
                color={"gray"}
              >
                Soch parvarishi uchun
              </Text>
              <Text
                marginTop={"5px"}
                fontSize={"12px"}
                cursor={"pointer"}
                transition={"0.3s"}
                _hover={{ color: "red" }}
                color={"gray"}
              >
                Niqoblar va antiseptik vositalar
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
export default GozallikvaSalomatlik;
