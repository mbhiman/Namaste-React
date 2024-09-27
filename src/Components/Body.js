import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurant, setlistOfRestaurant] = useState([]);
  //const [filteredList, setfilteredList] = useState([]);
  const [originalListOfRestaurant, setOriginalListOfRestaurant] = useState([]);

  const [searchText, setSearchtext] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.7271012&lng=88.39528609999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setlistOfRestaurant(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );

    setOriginalListOfRestaurant(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );

    // setfilteredList(
    //   json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    // );
  };

  if (listOfRestaurant.length === 0) {
    return <Shimmer />;
  }

  /* listOfRestaurant.length === 0 ? (
  <Shimmer />
) : 
*/

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(event) => {
              setSearchtext(event.target.value);
            }}
            placeholder="Search"
          />
          <button
            className="search-button"
            onClick={() => {
              const filteredRestaurant = originalListOfRestaurant.filter(
                (res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setlistOfRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = originalListOfRestaurant.filter(
              (res) => res.info.avgRating > 4.2
            );
            setlistOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id} >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
