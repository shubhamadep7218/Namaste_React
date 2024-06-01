import { CDN_URL } from "../utils/constants"

const Card = (props) => {
    const { restaurant } = props
    const { name, cloudinaryImageId, cuisines, avgRating, sla, aggregatedDiscountInfoV3} = restaurant?.info
    const {slaString } = sla
    const { header, subHeader } = aggregatedDiscountInfoV3

    return(
        <div className='card'>
            <img src={ CDN_URL + cloudinaryImageId} alt="rest img" />
            <h3>{name}</h3>
            <div className='ratings-distance'>
                <h4>{avgRating} stars</h4>
                <h4>{slaString}</h4>
            </div>
            <h4>{cuisines.join(', ')}</h4>
            <h4 className='img-head'><span>{header} </span><span>{subHeader}</span></h4>
        </div>
    )
}

export default Card