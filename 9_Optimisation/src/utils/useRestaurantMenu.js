import { useState, useEffect } from "react";
import { RESTAURANT_MENU_URL } from "./constants";
export const useRestaurantMenu = (restId) => {
    const [restData, setRestData] = useState(null);
    const fetchData = async () => {
        try {
            const data = await fetch(RESTAURANT_MENU_URL + restId);
            const json = await data?.json();
            setRestData(json?.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    return restData;
};
