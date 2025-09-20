import React from 'react'


const CategoryCard = ({categoryIcon,categoryName}) => {
  return (
    <div className='flex justify-center'>
      <div className=" w-[150px] h-[130px] lg:w-42.5 lg:h-[145px] border-2 border-[#cfcece] rounded-sm flex flex-col justify-center items-center hover:bg-[#DB4444] hover:text-white duration-150 ease-linear">
        <div className="text-[56px]">{categoryIcon}</div>
        <h2 className="font-[poppins] leading-6 mt-4">{categoryName}</h2>
      </div>
    </div>
  );
}

export default CategoryCard
