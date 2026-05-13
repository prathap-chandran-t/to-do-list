import React from "react";

import ListType from "./ListType";
const ListItem = ({ items, handleChange, handleDlt }) => {
  return (
    <ul>
      {items.map((item) => (
        <ListType
          item={item}
          key={item.id}
          handleChange={handleChange}
          handleDlt={handleDlt}
        />
      ))}
    </ul>
  );
};

export default ListItem;
