import react, { useContext } from "react";
import Context, { BasketContext1 } from "./BasketContext1";
import {
  Flex,
  Image,
  Text,
  Box,
  Heading,
  Button,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { useState } from "react";
const Cart = () => {
  const { state, setState } = useContext(BasketContext1);
  const remove = (id) => {
    let newdata=count.filter(item => item.id!=id)
    setCount(newdata)
    setState(newdata)
  };

  let arr = state.map((elem) => {
    return {
      ...elem,
      count: 1,
    };
  });

  let [count, setCount] = useState(arr);

  const decCrease = (id) => {
    let newCount = count.map((elem) => {
      if (elem.id === id) {
        return {
          ...elem,
          count: elem.count + 1,
        };
      }
      return elem;
    });
    setCount(newCount);
  };
  const inCrease = (id) => {
    let newCount = count.map((elem) => {
      if (elem.id === id && elem.count > 1) {
        return {
          ...elem,
          count: elem.count - 1,
        };
      }
      return elem;
    });
    setCount(newCount);
  };

  let totalPrice = 0;

  return (
    <>
      <Heading>Korzina</Heading>
      <Context>
        <Grid>
          {count.map((item) => {
            let localPrice = item.price * item.count;
            totalPrice += localPrice;
            return (
              <Box
                mt={"10px"}
                flexWrap={"wrap"}
                border={"1px solid grey !important"}
                key={item.id}
              >
                <GridItem
                  gap={"40px"}
                  padding={"20px"}
                  display={{ base: "block", lg: "flex" }}
                >
                  <Image
                    w={{ base: "100%", lg: "350px" }}
                    h={"220px"}
                    objectFit={"cover"}
                    src={item?.thumbnail}
                  />
                  <Flex
                    flexWrap={"wrap"}
                    w={"100%"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <Heading mt={"10px"}>{item.title}</Heading>
                    <Flex
                      justifyContent={"space-between"}
                      w={{ base: "100%", lg: "50%" }}
                    >
                      <Flex gap={"20px"} justifyContent={"center"}>
                        <Button
                          colorScheme="telegram"
                          onClick={() => inCrease(item.id)}
                        >
                          -
                        </Button>
                        <Heading size={"lg"}>{item.count}</Heading>
                        <Button
                          colorScheme="telegram"
                          onClick={() => decCrease(item.id)}
                        >
                          +
                        </Button>
                      </Flex>
                      <Heading size={"lg"}>$ {localPrice}</Heading>
                      <Button
                        onClick={() => remove(item.id)}
                        w={"30"}
                        colorScheme="telegram"
                        color={"white"}
                      >
                        ochirish
                      </Button>
                    </Flex>
                  </Flex>
                </GridItem>
              </Box>
            );
          })}
        </Grid>
        <Flex justifyContent={"end"}>
          <Box
            position={"relative"}
            left={{ base: "-30px" }}
            w={{ base: "80%", sm: "320px" }}
            padding={"20px"}
            fontSize={"30px"}
            border={"1px solid black"}
            mt={"20px"}
            display={"flex"}
          >
            Obshiy pul :{" "}
            <Heading color={""} ml={"4px"}>
              {" "}
              $ {totalPrice}
            </Heading>
          </Box>
        </Flex>
      </Context>
    </>
  );
};

export default Cart;
