import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
const URL = 'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.61610&lng=73.72860&restaurantId=36012'

const Card = (props) => {
  const {name, price, description} = props?.item?.card?.info

  return (
    <div className='menu-card'>
        <h3>{name}</h3>
        <h3>{price/100}</h3>
        <h3>{description}</h3>
    </div>
  )
};

const RestMenu = () => {
    const [restData, setRestData] = useState(null)
    const { restId } = useParams();
    console.log(restId);
    const fetchData = async () => {
        try {
            const data = await fetch(
                `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.61610&lng=73.72860&restaurantId=${restId}`
            );
            const json = await data?.json();
            setRestData(json?.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
      fetchData();
    }, []);

    if(!restData) return null;

    const { name, avgRating, totalRatingsString, costForTwoMessage, cuisines, areaName, sla, feeDetails } = restData?.cards[2]?.card?.card?.info

    const { itemCards } = restData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card

    console.log(itemCards);
 

    return(
        <div className="menu">
            <div className='menu-1'>
            <h1 className='menu-heading'>{name}</h1>
            <div className='menu-details'>
                <h3>{avgRating} ({totalRatingsString})  -  {costForTwoMessage} </h3>
                <h3>{cuisines?.join(', ')}</h3>
                <h3>{areaName}</h3>
                <h3>{sla?.slaString}</h3>
                <h3>{feeDetails?.message?.replace(/<\/?[^>]+(>|$)/g, "")}</h3>
            </div>
            </div>

            <div className='menu-2'>
                {
                    itemCards?.map((item, index)=>{
                        return <Card key={index} item={item} />
                    })
                }
            </div>
        </div>
    )
} 

export default RestMenu