import { useEffect, useState } from "react";
import { RESTAURANT_URL } from "./constants";

export const useRestaurants = () => {
    const [restList, setRestList] = useState([]);
    const [filtRestList, setFiltRestList] = useState([]);
    const fetchData = async () => {
        try {
            const data = await fetch(RESTAURANT_URL);
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

    return{
        restList,
        filtRestList,
        setFiltRestList
    }
}