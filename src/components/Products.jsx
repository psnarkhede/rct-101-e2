import React, { useEffect, useState } from "react";
import axios from "axios"
import AddProduct from "./AddProduct"
import Product from "./Product";
import Pagination from "./Pagination";
import { Grid, GridItem } from '@chakra-ui/react';
import Styles from "./Products.module.css"

const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  const [data, setData] = useState([])

  const [page, setPage] = useState(1)

  const handlepage = (val) => {
      if(val === "+"){
        setPage(Number(page) + 1)
      }else if(val === "-1" && page > 1){
        setPage(page - 1)
      }else{
        setPage(val)
      }

      console.log(page);
  }

  const add = (newpro) => {
    axios
    .post("http://localhost:8080/products",newpro)
    .then((res) => {})
  }

  useEffect(() => {
    axios
    .get(`http://localhost:8080/products?_page=${page}&_limit=3`)
    .then((res) => setData(res.data));
  },[page])

  return (
    <div>
      <div className={Styles.product}>
      <AddProduct add={add}/>
      </div>
      <div className={Styles.products}>
      <Grid templateColumns='repeat(3, 1fr)' gap={6}><Product data={data}/></Grid>
      </div>
      <Pagination func={handlepage} page={page}/>
      </div>
    
  );
};

export default Products;
