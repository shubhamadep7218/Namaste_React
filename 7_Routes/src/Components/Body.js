import { useEffect, useState } from "react";
import data from "../../data.json";
import Card from "./Card";
import Shimmer from "./Shimmer";
const URL =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5912716&lng=73.73890899999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

const Body = () => {
  const [restList, setRestList] = useState([]);
  const [filtRestList, setFiltRestList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const handleClick = () => {
    const filterList = restList?.filter((res) => {
      return res?.info?.avgRating > 4.7;
    });
    setFiltRestList(filterList);
  };

  const fetchData = async () => {
    try {
      const data = await fetch(URL);
      const json = await data.json();
      setRestList(
        json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFiltRestList(
        json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log('Body Rendered');

  return restList?.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="filter">
        <button onClick={handleClick}>Filter by Ratings</button>
        <div className="search">
          <input
            type="text"
            placeholder="search here."
            value={searchText}
            onChange={(e) => {
                setSearchText(e?.target?.value)
            }}
          />
          <button onClick={()=>{
            const filterList = restList.filter((res)=>{
                return res?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase());
            })
            setFiltRestList(filterList);
          }}>search</button>
        </div>
      </div>
      <div className="res-container">
        {filtRestList?.length === 0 && <h1>No filter results </h1> }
        {filtRestList?.map((restaurant) => {
          return <Card key={restaurant?.info?.id} restaurant={restaurant} />;
        })}
      </div>
    </div>
  );
};

export default Body;
