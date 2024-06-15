import React, { useState } from "react";

export default function Filters(props) {
    const { restList, setFiltRestList } = props;
    const [searchText, setSearchText] = useState("");

    const filterByRatings = () => {
        const filterList = restList?.filter((res) => {
            return res?.info?.avgRating > 4;
        });
        setFiltRestList(filterList);
    };

    const filterBySearchText = () => {
        const filterList = restList?.filter((res) => {
            return res?.info?.name
                ?.toLowerCase()
                ?.includes(searchText.toLowerCase());
        });
        setFiltRestList(filterList);
    };

    return (
        <>
            <div className="filter">
                <button onClick={filterByRatings}>4+ Ratings</button>
                <div className="search">
                    <input
                        type="text"
                        placeholder="search here."
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e?.target?.value);
                        }}
                    />
                    <button onClick={filterBySearchText}>search</button>
                </div>
            </div>
        </>
    );
}
