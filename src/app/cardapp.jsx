import {
  Wrap,
  WrapItem,
  Box,
  Heading,
  Grid,
  GridItem,
  Text,
  Button,
  Input,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import img from "../img1/finance.png";
import { useNavigate } from "react-router-dom";
import { BasketContext1 } from "../Basket/BasketContext1";

function Pruducts1() {
  const [state, setState] = useState([]);
  const navigite = useNavigate("");
  const { addcart } = useContext(BasketContext1);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((result) => setState(result.data.products));
  }, []);
  const [search, setSearch] = useState("");

  const addToBasket = (product) => {
    addcart(product);
  };

  return (
    <div>
      <Grid
        ml={"-30px"}
        justifyContent={{ base: "center", xl: "center" }}
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          md: "repeat(3,1fr)",
          sm: "repeat(2,1fr)",
          xl: "repeat(4,1fr)",
        }}
      >
        {state.map((product) => (
          <Box>
            <GridItem
              mt={"20px"}
              key={product.id}
              display={"flex"}
              flexDirection={"column"}
              gap={"50px"}
              width={{ base: "100%", xl: "90%" }}
            >
              <Box
                cursor={"pointer"}
                onClick={() => navigite(`/about/${product.id}`)}
                float={"right"}
              >
                <Box
                  display={{ base: "none", xl: "block" }}
                  position={"relative"}
                  top={"40px"}
                >
                  <Text cursor={"pointer"} fontSize={"30px"} ml={"370px"}>
                    <IoMdHeartEmpty />
                  </Text>
                  <Text mt={"20px"} cursor={"pointer"} w={"30px"} ml={"370px"}>
                    <Image src={img} />
                  </Text>
                </Box>

                <Box justifyContent={"center"} display={"flex"}>
                  <Image
                    w={{ base: "100%", xl: "200px" }}
                    h={"200px"}
                    src={product.images[3]}
                  />
                </Box>
                <Box ml={"20px"}>
                  <Text gap={"20px"}>
                    {product.brand} {product.title}
                  </Text>
                </Box>
                <Box ml={"20px"}>
                  <Heading fontSize={"20px"}>{product.price}.000 сум</Heading>
                </Box>
              </Box>
              <Box ml={"10px"} display={"flex"} gap={"10px"}>
                <Button
                  onClick={() => addToBasket(product)}
                  color={"black"}
                  border={"1px solid black"}
                  bg={"white"}
                >
                  <MdOutlineShoppingCart />
                </Button>
                <Button
                  color={"red"}
                  border={"1px solid red"}
                  colorScheme="white"
                  w={{ base: "250px", xl: "300px" }}
                >
                  Muddatli to'lov
                </Button>
              </Box>
            </GridItem>
          </Box>
        ))}
      </Grid>
    </div>
  );
}

export default Pruducts1;
