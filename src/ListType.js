import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const ListType = ({ item, handleChange, handleDlt }) => {
  return (
    <li className="item">
      <input
        type="checkbox"
        checked={item.checked}
        onChange={() => handleChange(item.id)}
      />

      <label
        style={item.checked ? { textDecoration: "line-through" } : null}
        onDoubleClick={() => handleChange(item.id)}
      >
        {item.item}
      </label>

      <FaTrashAlt
        role="button"
        tabIndex="0"
        onClick={() => handleDlt(item.id)}
      />
    </li>
  );
};

export default ListType;
