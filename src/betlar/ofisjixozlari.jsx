import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Checkbox,
  Container,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Cart from '../app/card'

const Ofisjixozlari = () => {
  return (
      <Box ml={{base:'0px',xl:'160px'}} padding={"10px"}>
        <Box>
          <Heading>Ofis jihozlari </Heading>
        </Box>

        <Box gap={'40px'} flexWrap={'wrap'} display={"flex"} mt={"30px"}>
          {/* 1 chi*/}
          <Box>
            <Box>
              <Heading fontSize={"23px"}>katogoriya</Heading>
              <Text
                fontSize={"15px"}
                mt={"6px"}
                cursor={"pointer"}
                transition={"0.5s"}
                _hover={{ color: "red" }}
              >
                Printerlar va skanerlar
              </Text>
              <Text
                fontSize={"15px"}
                mt={"6px"}
                cursor={"pointer"}
                transition={"0.5s"}
                _hover={{ color: "red" }}
              >
                Printerlar va KFMlar uchun moslamalar
              </Text>
            </Box>

            <Box mt={"20px"}>
              <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        <Heading fontSize={"22px"}> Narxlar so'm</Heading>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Box display={"flex"}>
                      <Input w={"100px"} type="number" placeholder=" Dan 0" />
                      <Input w={"100px"} type="number" placeholder=" gacha 0" />
                    </Box>
                  </AccordionPanel>
                </AccordionItem>
                <Box mt={"30px"}>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          <Heading fontSize={"22px"}> Brend</Heading>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Box display={"flex"}>
                        <Input w={"200px"} placeholder=" Men qidiryapman..." />
                      </Box>
                    </AccordionPanel>
                  </AccordionItem>
                </Box>
              </Accordion>

          
              <Box mt={'20px'} >
                <Box>
                    <Heading fontSize={'22px'}>Chop etish turi</Heading>
                </Box>
                <Box rowGap={'10px'} display={'grid'}  gridTemplateColumns={ 'repeat(1,1fr)' }>
                <Checkbox colorScheme="red" defaultChecked>
             <Text _hover={{color:'red'}} transition={'0.5s'}> Rangli (36) </Text>   
                </Checkbox>
                <Checkbox colorScheme="red" defaultChecked>
             <Text _hover={{color:'red'}} transition={'0.5s'}> Oq qora (40) </Text>   
                </Checkbox>
                <Checkbox colorScheme="red" defaultChecked>
             <Text _hover={{color:'red'}} transition={'0.5s'}> struyniy (14) </Text>   
                </Checkbox>
                <Checkbox colorScheme="red" defaultChecked>
             <Text _hover={{color:'red'}} transition={'0.5s'}>lazerli (24)</Text>   
                </Checkbox>
                
                </Box>
                
              </Box>
            </Box>
          </Box>
          {/* tamom */}

          {/* 2 chi */}
          <Box>
                <Cart/>
          </Box>
          {/* tamom */}
        </Box>
      </Box>
  );
};

export default Ofisjixozlari;
