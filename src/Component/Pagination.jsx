import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import ItemCard from "../Component/ItemCard";

const Pagination = ({ itemsPerPage, products }) => {

  const items = products;

  function Items({ currentItems }) {
    return (
      <div className="flex flex-wrap gap-5">
        {currentItems &&
          currentItems.map((item) => (
            <ItemCard
              className="py-1 px-3"
              image={item.thumbnail}
              discount={item.discountPercentage}
              percentage="%"
              productName={item.title}
              discountPrice={item.price}
              price={Math.floor(item.price / (1 - item.discountPercentage / 100))}
              dollar="$"
              review={item.reviews.length}
            />
          ))}
      </div>
      
    );
  }
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <div>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Pagination;
