import { Box, Container, Heading, Text } from "@chakra-ui/react";
import Cart from "../../app/card";
import Pruducts from "../../card/card";

function TeefizorFotovideoaudio() {
  return (
    <Box ml={{base:'5px',xl:'100px'}}>
        <Box>
          <Box>
            <Heading>Televizor, foto-video va audio</Heading>
          </Box>

          <Box flexWrap={'wrap'} marginTop={"30px"} display={"flex"}>
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
                  Televizorlar
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
                  Audio
                </Text>
                <Text
                  marginTop={"5px"}
                  cursor={"pointer"}
                  transition={"0.3s"}
                  _hover={{ color: "red" }}
                  color={"gray"}
                  fontSize={"12px"}
                >
                  Musiqa sistemalari
                </Text>
                <Text
                  fontSize={"12px"}
                  marginTop={"5px"}
                  cursor={"pointer"}
                  transition={"0.3s"}
                  _hover={{ color: "red" }}
                  color={"gray"}
                >
                  Akustika
                </Text>
                <Text
                  marginTop={"5px"}
                  fontSize={"12px"}
                  cursor={"pointer"}
                  transition={"0.3s"}
                  _hover={{ color: "red" }}
                  color={"gray"}
                >
                  Mikrofonlar
                </Text>
              </Box>


              <Box marginTop={'10px'}>
                <Text
                  cursor={"pointer"}
                  transition={"0.3s"}
                  _hover={{ color: "red" }}
                  fontWeight={"700"}
                  fontSize={"20px"}
                >
              Videotexnika
                </Text>
                <Text
                  marginTop={"5px"}
                  cursor={"pointer"}
                  transition={"0.3s"}
                  _hover={{ color: "red" }}
                  color={"gray"}
                  fontSize={"12px"}
                >
                Uy kinoteatri
                </Text>
                <Text
                  fontSize={"12px"}
                  marginTop={"5px"}
                  cursor={"pointer"}
                  transition={"0.3s"}
                  _hover={{ color: "red" }}
                  color={"gray"}
                >
                DVD-pleer
                </Text>
                <Text
                  marginTop={"5px"}
                  fontSize={"12px"}
                  cursor={"pointer"}
                  transition={"0.3s"}
                  _hover={{ color: "red" }}
                  color={"gray"}
                >
               Xavfsizlik kameralari
                </Text>
              </Box>
            </Box>
{/* tamom */}
                 <Pruducts/>

          </Box>


        </Box>
    </Box>
  );
}
export default TeefizorFotovideoaudio;
