import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) return <Shimmer />

    const { name, costForTwoMessage, cuisines } = resInfo.cards[2].card.card.info;

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
                        {item.card.info.name} - {" Rs-"}
                        {item.card.info.price / 100}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default RestaurantMenu;