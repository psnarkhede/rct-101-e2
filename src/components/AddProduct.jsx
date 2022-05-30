import { Button, Input,Radio, RadioGroup, Select, StylesProvider, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

import Styles from "./Addproduct.module.css"

const AddProduct = ({add}) => {
  // TODO: Remove below const and instead import them from chakra
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [indata, setIndata] = useState({imageSrc:"https://picsum.photos/seed/picsum4/422/262"})

  const handlechange = (el) => {
  
      if(el === "male" || el === "female" || el === "unisex"){
        setIndata({...indata,"gender":el})
      }else{
        let {name}= el.target;
      setIndata({...indata,[name]:el.target.value})
      }

  }

  const handlesubmit = () => {
    add(indata)
  }
  
  return (
    <>
      <Button data-cy="add-product-button" onClick={onOpen}>Add Product</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalBody className={Styles.body} pb={6}>
          <Input data-cy="add-product-title" onChange={(e) => handlechange(e)} placeholder="title" name="title"  />
          <Select className={Styles.select} data-cy="add-product-category" name="category" onChange={(e) => handlechange(e)}>
            <option data-cy="add-product-category-shirt" value="shirt">shirt</option>
            <option data-cy="add-product-category-pant" value="pant">pant</option>
            <option data-cy="add-product-category-jeans" value="jeans">jeans</option>
          </Select>
          <RadioGroup data-cy="add-product-gender" name="gender" onChange={(e) => handlechange(e)}>
            <Radio data-cy="add-product-gender-male" value="male">male</Radio>
            <Radio data-cy="add-product-gender-female" value="female">female</Radio>
            <Radio data-cy="add-product-gender-unisex" value="unisex">unisex</Radio>
          </RadioGroup>
          <Input data-cy="add-product-price" placeholder="price" name="price" onChange={(e) => handlechange(e)}/>
          <Button data-cy="add-product-submit-button" onClick={() => handlesubmit()}>Submit</Button>
        </ModalBody>
        <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              X
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
      </Modal>
    </>
  );
};

export default AddProduct;
