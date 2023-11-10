import { createContext, useState } from "react";
import SHOP_DATA from "../shop-data.js";
import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";
import { useEffect } from "react";

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const value = { products };
  
  // useEffect(() => { //loading data for the first time, uncomment
  //   addCollectionAndDocuments('categories', SHOP_DATA)
  // }, [])
  
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
