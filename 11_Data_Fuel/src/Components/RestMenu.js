import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "../utils/useRestaurantMenu";
import RestFoodCategory from "./RestFoodCategory";
import { useState } from "react";
import RestMenuShimmer from "./RestMenuShimmer";


const RestMenu = () => {
    const { restId } = useParams();
    const restData = useRestaurantMenu(restId);
    const [activeAccordian, setActiveAccordian] = useState(null);

    if (!restData) return <RestMenuShimmer />;

    const {
        name,
        avgRating,
        totalRatingsString,
        costForTwoMessage,
        cuisines,
        areaName,
        sla,
        feeDetails,
    } = restData?.cards[2]?.card?.card?.info;

    const list = restData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    const filterCategory = list.filter((submenu) => {
      return submenu?.card?.card?.["@type"]?.includes(".ItemCategory");
    });

    const handleAccordian = (index) => {
        setActiveAccordian(index)
        // close on re click accordian
        if(activeAccordian === index){
            setActiveAccordian(null)
        }
    }

    return (
        <div className="flex flex-col mx-auto w-8/12 gap-8">
             <h1 className="text-2xl font-semibold">{name}</h1>
            <div className="border p-6 rounded-xl shadow-xl">
                <div className="flex flex-col gap-2">
                    <h3 className="text-base font-bold">
                        ✪ {avgRating} ({totalRatingsString}) - {costForTwoMessage}{" "}
                    </h3>
                    <h3 className="font-semibold text-sm text-orange-500">{cuisines?.join(", ")}</h3>
                    <h3 className="text-base text-slate-900 font-bold">📍{areaName}</h3>
                    <h3 className="text-sm text-slate-600"> {sla?.slaString}</h3>
                    <h3 className="text-sm text-slate-600">
                       🚲 {feeDetails?.message?.replace(/<\/?[^>]+(>|$)/g, "")}
                    </h3>
                </div>
            </div>

            <div>
                <div className="flex flex-col gap-4">
                    {filterCategory?.map((item, index) => {
                        return (
                          <RestFoodCategory
                            activeAccordian={activeAccordian === index}
                            item={item}
                            key={index}
                            onClick={() => handleAccordian(index)}
                          />
                        );
                    })}
                </div>
            </div>
        </div>
    )
};

export default RestMenu;
