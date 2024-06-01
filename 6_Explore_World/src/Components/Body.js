import { useEffect, useState } from 'react'
import data from '../../data.json'
import Card from './Card'

const Body = () => {
    const [ restList, setRestList ] = useState(data?.RestaurantList);
    const handleClick = () => {
        const filterList = restList?.filter((res)=>{
            return res?.info?.avgRating > 4.5
        })
        setRestList(filterList);
    }

    const URL = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"

    const fetchData = async () => {
        try {
            const data = await fetch(URL);
            const json = await data.json();
            console.log(json);
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(()=>{
        fetchData();
    }, [])

    return(
        <div>
            <div>
                <button onClick={handleClick}>Filter by Ratings</button>
            </div>
            <div className='res-container'>
                {
                    restList?.map((restaurant) => {
                        return (
                            <Card key={restaurant?.info?.id} restaurant={restaurant} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Body