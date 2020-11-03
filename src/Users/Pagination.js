import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Pagination from 'react-bootstrap/Pagination';


export default function MainPagePagination() {
  let active = 1;
  let items = [];
  for (let number = 1; number <= 10; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div>
      <Pagination>{items}</Pagination>
    </div>
  );
}
