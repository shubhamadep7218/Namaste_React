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
            <div className="flex gap-10">
                <button
                    onClick={filterByRatings}
                    className="bg-gray-700 text-white py-2 px-4 rounded-lg"
                >
                    <p className="text-sm">4+ Ratings</p>
                </button> 
                <div className="flex gap-2">
                    <input
                        type="text"
                        placeholder="search here."
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e?.target?.value);
                        }}
                        className="border-2 border-slate-400 py-2 px-4 rounded-lg"
                    />
                    <button
                        onClick={filterBySearchText}
                        className="bg-gray-700 text-white py-2 px-4 rounded-lg"
                    >
                        <p className="text-sm">Search</p>
                    </button>
                </div>
            </div>
        </>
    );
}
