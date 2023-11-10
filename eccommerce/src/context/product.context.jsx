import { createContext, useState } from "react";
import SHOP_DATA from "../shop-data.js";
import { addCollectionAndDocuments, getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";
import { useEffect } from "react";

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  
  // useEffect(() => { //loading data for the first time, uncomment
  //   addCollectionAndDocuments('categories', SHOP_DATA)
  // }, [])
  
  useEffect(() => {
    console.log('ho')

    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap)
    }
    getCategoriesMap();
  }, []);
  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
