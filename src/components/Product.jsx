import {
  Box,
  Heading,
  Image,
  Stack,
  Tag,
  TagLabel,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Styles from "./Product.module.css"

const Product = ({ data }) => {
  // TODO: Remove below const and instead import them from chakra

  return data.map(
    (el) => (
      (
        <div key={el.id} className={Styles.box}>
          <Stack data-cy="product">
            
            <Image className={Styles.img} data-cy="product-image" src={el.imageSrc}/>
            <Text className={Styles.text} data-cy="product-category">
              {el.category}
            </Text>
            <Tag>
              <TagLabel data-cy="product-gender">{el.gender}</TagLabel>
            </Tag>
            <Heading data-cy="product-title">{el.title}</Heading>
            <Box data-cy="product-price">${el.price}</Box>
          </Stack>
        </div>
      )
    )
  );
};

export default Product;
