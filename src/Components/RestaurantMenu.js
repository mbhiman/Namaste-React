import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    const { resId } = useParams();

    useEffect(() => {
        fetchMenu();
    }, [])

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        setResInfo(json.data);
    }

    if (resInfo === null) return <Shimmer />

    const { name, city, costForTwoMessage, totalRatingsString, cuisines, sla, } = resInfo.cards[2].card.card.info;

    const { itemCards } = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;


    return (
        <div className="menu">
            <h1>{name}:{resId}</h1>
            <p>
                {cuisines.join(", ")} - {costForTwoMessage}
            </p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map(item => (
                    <li>
                        {item.card.info.name} - {" Rs- "}
                        {item.card.info.price / 100}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default RestaurantMenu;