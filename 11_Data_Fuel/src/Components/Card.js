import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";

const Card = (props) => {
    const { restaurant } = props;
    console.log(restaurant);
    const { id, name, cloudinaryImageId, cuisines, avgRating, sla, areaName } =
        restaurant?.info;
    const { slaString } = sla;
    // const { header, subHeader } = aggregatedDiscountInfoV3
    // aggregatedDiscountInfoV3

    return (
        <Link to={`/restaurant/${id}`}>
            <div className="flex flex-col gap-2">
                <img
                    src={CDN_URL + cloudinaryImageId}
                    alt="rest img"
                    className="object-cover w-full h-40 rounded-xl relative"
                />
                <div>
                    <p className="font-bold text-base">{name}</p>
                    <div className="flex gap-4 text-sm">
                        <p>✪ {avgRating}</p>
                        <p>{slaString}</p>
                    </div>
                    <p className="font-thin text-sm truncate">
                        {cuisines.join(", ")}
                    </p>
                    <p className="font-thin text-sm truncate">{areaName}</p>
                </div>
            </div>
        </Link>
    );
};


export const withOfferCard = (Card) => {
    return (props) => {
        const { restaurant } = props; 
        const label = restaurant?.info?.aggregatedDiscountInfoV3?.header + " " + restaurant?.info?.aggregatedDiscountInfoV3?.subHeader
        return(
            <div>
                <p className="font-extrabold text-white absolute z-10 mt-32 ml-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-2">{label}</p>
                <Card {...props}/>
            </div>
        )
    }
}

export default Card;
