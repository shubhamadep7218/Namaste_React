import { CDN_URL_FOOD } from "../utils/constants";

const Veg = (props) => {
  const { isVeg } = props;
  return (
    <div>
      {isVeg.toLowerCase() === "veg" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.2rem"
          height="1.2rem"
          viewBox="0 0 56 56"
        >
          <path
            fill="#00ff00"
            d="M13.785 49.574h28.453c4.899 0 7.336-2.437 7.336-7.265V13.69c0-4.828-2.437-7.265-7.336-7.265H13.785c-4.875 0-7.36 2.414-7.36 7.265v28.62c0 4.851 2.485 7.265 7.36 7.265m.07-3.773c-2.343 0-3.656-1.242-3.656-3.68V13.88c0-2.438 1.313-3.68 3.656-3.68h28.313c2.32 0 3.633 1.242 3.633 3.68v28.24c0 2.438-1.313 3.68-3.633 3.68Zm14.18-10.313a7.542 7.542 0 0 0 7.547-7.547c0-4.148-3.398-7.523-7.547-7.523c-4.172 0-7.57 3.375-7.57 7.523c0 4.196 3.398 7.547 7.57 7.547"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.2rem"
          height="1.2rem"
          viewBox="0 0 56 56"
        >
          <path
            fill="#ff0000"
            d="M13.785 49.574h28.453c4.899 0 7.336-2.437 7.336-7.265V13.69c0-4.828-2.437-7.265-7.336-7.265H13.785c-4.875 0-7.36 2.414-7.36 7.265v28.62c0 4.851 2.485 7.265 7.36 7.265m.07-3.773c-2.343 0-3.656-1.242-3.656-3.68V13.88c0-2.438 1.313-3.68 3.656-3.68h28.313c2.32 0 3.633 1.242 3.633 3.68v28.24c0 2.438-1.313 3.68-3.633 3.68Zm21.82-11.18c1.055 0 1.548-1.172.938-2.203l-7.43-12.54c-.515-.96-1.828-.913-2.367 0l-7.43 12.54c-.585.96-.14 2.203.938 2.203Z"
          />
        </svg>
      )}
    </div>
  );
};

const FoodCategoryCard = (props) => {
  const { name, price, defaultPrice, imageId, description, itemAttribute } =
    props?.category?.card?.info;
  const isVeg = itemAttribute?.vegClassifier;
  return (
    <>
      <div className="flex items-center py-4 pb-8 rounded-lg align-middle">
        <div className="flex-1">
          <Veg isVeg={isVeg} />
          <h2 className="text-lg font-semibold">{name}</h2>
          <p className="text-lg font-semibold text-gray-700">
            ₹{price ? parseInt(price / 100) : parseInt(defaultPrice / 100)}
          </p>
          <p className="text-gray-600 mt-2 text-sm">{description}</p>
        </div>
        <div className="flex-shrink-0 relative">
          <img
            src={`${CDN_URL_FOOD + imageId}`}
            alt=""
            className="w-32 h-32 object-cover rounded"
          />
          <button className="px-4 py-1 bg-green-500 text-white rounded hover:bg-green-600 absolute -bottom-4 right-8">
            ADD
          </button>
        </div>
      </div>
      <div className="border-b-2 last:border-b-0"></div>
    </>
  );
};

export default FoodCategoryCard;

