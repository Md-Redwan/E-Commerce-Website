import React from "react";

const ListItem = ({ children, className, onClick }) => {
  return <li className={`${className}`} onClick={onClick}>
    {children}
  </li>;
};

export default ListItem;
