import { Box } from "@chakra-ui/react";
import { Children, createContext, useEffect, useState } from "react";
export const BasketContext1 = createContext(null);
const BaketProvider = ({ children }) => {
  const storage = localStorage.getItem("basket-products");

  const [state, setState] = useState(JSON.parse(storage) || []);
  const addcart = (product) => {
    const data = state.some((item) => item?.id === product?.id);
    if (!data) {
      setState([...state, product]);
    }
  };
  useEffect(() => {
    localStorage.setItem("basket-products", JSON.stringify(state));
  }, [state]);

  return (
    <BasketContext1.Provider value={{ addcart, state, setState }}>
      {children}
    </BasketContext1.Provider>
  );
};
export default BaketProvider;
