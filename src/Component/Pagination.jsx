import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import ItemCard from "../Component/ItemCard";
import { useSelector } from 'react-redux'


const Pagination = ({ itemsPerPage }) => {

  const Products = useSelector((state) => state.allProducts.value)

  const items = Products;

  function Items({ currentItems }) {
    return (
      <div className="flex flex-wrap gap-5">
        {currentItems &&
          currentItems.map((item,index) => (
            <ItemCard
            key={index}
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
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };
  return (
    <div>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
        className="flex gap-2.5 mt-10"
        pageClassName="bg-black text-white py-0.5 px-[25px] cursor-pointer"
      />
    </div>
  );
};

export default Pagination;
