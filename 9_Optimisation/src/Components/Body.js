import Card from "./Card";
import Shimmer from "./Shimmer";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import Filters from "./Filters";
import { useRestaurants } from "../utils/useRestaurants";

const Body = () => {
    const { restList, filtRestList, setFiltRestList } = useRestaurants();
    const isOnline = useOnlineStatus();
    const filterProps = { restList, setFiltRestList };

    if (!isOnline) {
        return (
            <div>
                <h1>Seems your not online, Check your internet connection</h1>
            </div>
        );
    }

    if(restList?.length === 0){
      return <Shimmer />
    }

    return  (
        <div>
            <Filters {...filterProps} />
            <div className="res-container">
                {filtRestList?.length === 0 && <h1>No filter results </h1>}
                {filtRestList?.map((restaurant) => {
                    return (
                        <Card
                            key={restaurant?.info?.id}
                            restaurant={restaurant}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Body;
