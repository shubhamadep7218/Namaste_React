import { useState } from 'react'
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