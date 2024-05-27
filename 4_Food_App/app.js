import React from 'react'
import ReactDOM from 'react-dom/client'
const ele = document.getElementById('root')
const root = ReactDOM.createRoot(ele);
import data from './data.json'

const Logo = () => {
    return (
        <div className="logo">
            <img alt='brand logo' src='https://png.pngtree.com/template/20191014/ourmid/pngtree-pin-food-delivery-map-location-delivery-logo-concept-image_318151.jpg' />
        </div>
    )
}

const Search = () => {

    return(
        <div className='search'>
            <input type="text" placeholder="search here" />
            <button>Search</button>
        </div>
    )
}

const Navigation = () => {
    return(
        <div className='navigation'>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Login</li>
            </ul>
        </div>
    )
}

const Header = () => {
    return(
        <>
            <div className="header">
                <Logo />
                <Search />
                <Navigation />
            </div>
        </>
    )
}




const Card = (props) => {
    const { restaurant } = props
    const { name, cloudinaryImageId, cuisines, avgRating, sla, aggregatedDiscountInfoV3} = restaurant?.info
    const {slaString } = sla
    const { header, subHeader } = aggregatedDiscountInfoV3

    return(
        <div className='card'>
            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} alt="rest img" />
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

const Body = () => {
    return(
        <div className='res-container'>
            {
                data?.RestaurantList?.map((restaurant)=>{
                    return (
                        <Card key={restaurant?.info?.id} restaurant={restaurant}/>
                    )
                })
            }
        </div>
    )
}


const AppLayout = () => {
    return(
        <>
            <Header />
            <Body />
        </>
    )
}

root.render(<AppLayout />)
