import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "../utils/useRestaurantMenu";

const Card = (props) => {
    const { name, price, description } = props?.item?.card?.info;

    return (
        <div className="menu-card">
            <h3>{name}</h3>
            <h3>{price / 100}</h3>
            <h3>{description}</h3>
        </div>
    );
};

const RestMenu = () => {
    const { restId } = useParams();

    const restData = useRestaurantMenu(restId);

    if (!restData) return null;

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

    const { itemCards } =
        restData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
            ?.card;
    const { topPicks } =
        restData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
            ?.card;

    return (
        <div className="menu">
            <div className="menu-1">
                <h1 className="menu-heading">{name}</h1>
                <div className="menu-details">
                    <h3>
                        {avgRating} ({totalRatingsString}) - {costForTwoMessage}{" "}
                    </h3>
                    <h3>{cuisines?.join(", ")}</h3>
                    <h3>{areaName}</h3>
                    <h3>{sla?.slaString}</h3>
                    <h3>
                        {feeDetails?.message?.replace(/<\/?[^>]+(>|$)/g, "")}
                    </h3>
                </div>
            </div>

            <div>
                <div className="top-picks">
                    <h3>{topPicks?.title}</h3>
                    {topPicks?.carousel?.map((topPick) => {
                        <div>
                            <p>{topPick?.title}</p>
                            <img src={`${topPick?.dish?.info?.imageId}`} />
                            <p>{topPick?.dish?.info?.price / 100}</p>
                        </div>;
                    })}
                </div>

                <div className="menu-2">
                    {itemCards?.map((item, index) => {
                        return <Card key={index} item={item} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default RestMenu;
