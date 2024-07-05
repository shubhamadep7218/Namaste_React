import { useState } from "react";
import FoodCategoryCard from "./FoodCategoryCard";

const RestFoodCategory = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { title, itemCards } = props?.item?.card?.card;
  return (
    <div className=" p-4 shadow-md rounded-md">
      <button
        className="w-full flex justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-semibold text-lg">{title} ({itemCards?.length})</h3>
        <svg
          className={`${isOpen ? "rotate-180" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4z"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="flex flex-col gap-5 mt-8">
          {itemCards?.map((category, index) => {       
            return <FoodCategoryCard category={category} key={index} />
          })}
        </div>
      )}
    </div>
  );
};  

export default RestFoodCategory;
