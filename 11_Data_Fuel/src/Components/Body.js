import Card, { withOfferCard } from "./Card";
import Shimmer from "./Shimmer";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import Filters from "./Filters";
import { useRestaurants } from "../utils/useRestaurants";

const Body = () => {
    const { restList, filtRestList, setFiltRestList } = useRestaurants();
    const isOnline = useOnlineStatus();
    const filterProps = { restList, setFiltRestList };

    const WithOfferCard = withOfferCard(Card)

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
        <div className="flex flex-col gap-8">
            <Filters {...filterProps} />
            <div className="grid grid-cols-5 gap-8">
                {filtRestList?.length === 0 && <h1>No filter results </h1>}
                {filtRestList?.map((restaurant) => {
                    if(restaurant?.info?.aggregatedDiscountInfoV3?.header){
                        return (
                            <WithOfferCard
                                key={restaurant?.info?.id}
                                restaurant={restaurant}
                            />
                        );
                    }else{
                        return (
                            <Card
                                key={restaurant?.info?.id}
                                restaurant={restaurant}
                            />
                        );
                    }
                })}
            </div>
        </div>
    );
};

export default Body;
