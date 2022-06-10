import React from "react";
import { useState } from "react";

const Categories = React.memo(function Categories({
  activeCategory,
  items,
  onClickItem,
}) {
  const item =
    items &&
    items.map((item, index) => {
      return (
        <li
          className={activeCategory === index ? "active" : null}
          onClick={() => onClickItem(index)}
          key={item}
        >
          {item}
        </li>
      );
    });

  return (
    <div>
      <div className="categories">
        <ul>
          <li
            onClick={() => onClickItem(null)}
            className={activeCategory === null ? "active" : null}
          >
            Все
          </li>
          {item}
        </ul>
      </div>
    </div>
  );
});

export default Categories;
