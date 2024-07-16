import FoodCategoryCard from "./FoodCategoryCard";

const RestFoodCategory = (props) => {
  const {  activeAccordian, onClick } = props
  const { title, itemCards} = props?.item?.card?.card;
  return (
    <div className="p-4 rounded-md border-b-2 ">
      <button
        className="w-full flex justify-between"
        onClick={onClick}
      >
        <h3 className="font-semibold text-lg">{title} ({itemCards?.length})</h3>
          <svg
            className={`${activeAccordian ? "rotate-180" : ""}`}
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
      {activeAccordian && (
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

// 
