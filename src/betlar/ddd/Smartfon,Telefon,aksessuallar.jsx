import { Box, Container, Heading, Text } from "@chakra-ui/react";
import Cart from "../../app/card";
import Pruducts from "../../card/card";

function SmartfonTelefonaksessuallar() {
  return (
    <Box ml={{ base: "5px", xl: "100px" }}>
      <Box>
        <Box>
          <Heading>Smartfon, telefon, gadjet, aksessuarlar</Heading>
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
                Smartfonlar
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
              Smartfonlar va gadjetlar uchun aksessuarlar
              </Text>
              <Text
                marginTop={"5px"}
                cursor={"pointer"}
                transition={"0.3s"}
                _hover={{ color: "red" }}
                color={"gray"}
                fontSize={"12px"}
              >
            Power bank

              </Text>
              <Text
                fontSize={"12px"}
                marginTop={"5px"}
                cursor={"pointer"}
                transition={"0.3s"}
                _hover={{ color: "red" }}
                color={"gray"}
              >
              Garnituralar

              </Text>
              <Text
                marginTop={"5px"}
                fontSize={"12px"}
                cursor={"pointer"}
                transition={"0.3s"}
                _hover={{ color: "red" }}
                color={"gray"}
              >
             Kabellar
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
            Telefonlar
              </Text>
              <Text
                marginTop={"5px"}
                cursor={"pointer"}
                transition={"0.3s"}
                _hover={{ color: "red" }}
                color={"gray"}
                fontSize={"12px"}
              >
              Radiotelefonlar
              </Text>
              <Text
                fontSize={"12px"}
                marginTop={"5px"}
                cursor={"pointer"}
                transition={"0.3s"}
                _hover={{ color: "red" }}
                color={"gray"}
              >
          Simli telefonlar
              </Text>
              <Text
                marginTop={"5px"}
                fontSize={"12px"}
                cursor={"pointer"}
                transition={"0.3s"}
                _hover={{ color: "red" }}
                color={"gray"}
              >
      Ratsiyalar
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
export default SmartfonTelefonaksessuallar;
