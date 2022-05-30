import React from "react";
import { Button, ButtonGroup, Select } from '@chakra-ui/react'

const Pagination = ({func,page}) => {
  // TODO: Remove below const and instead import them from chakra

  return (
    <ButtonGroup>
      <Button data-cy="pagination-first-button" disabled={page == 1? true : false} onClick={() => func(1)}>First</Button>
      <Button data-cy="pagination-previous-button" disabled={page == 1? true : false} onClick={() => func("-")}>-</Button>
      <Select data-cy="pagination-limit-select" onChange={(e) => func(e.target.value)}>
        <option data-cy="pagination-limit-3" value="1">1</option>
        <option data-cy="pagination-limit-6" value="2">2</option>
        <option data-cy="pagination-limit-9" value="3">3</option>
        <option data-cy="pagination-limit-9" value="3">4</option>
      </Select>
      <Button data-cy="pagination-next-button" disabled={page == 4? true : false} onClick={() => func("+")}  >+</Button>
      <Button data-cy="pagination-last-button" disabled={page == 4? true : false} onClick={() => func(3)}>Last</Button>
    </ButtonGroup>
  );
};

export default Pagination;
