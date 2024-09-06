import { CDN_URL } from "../utils/constants";
const RestaurantCard = ({ resData }) => {
  if (!resData || !resData.info) {
    return (
      <div className="res-card">Restaurant information is not available</div>
    );
  }
  const {
    name,
    areaName,
    cloudinaryImageId,
    costForTwo,
    cuisines,
    avgRating,
    sla,
  } = resData.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="Meghna Foods"
      />
      <div className="res-info">
        <h3> {name} </h3>
        <p className="res-cuisine"> {cuisines.join(", ")} </p>
        <div className="res-details">
          <p className="areaName"> {areaName}</p>
          <p className="cost">{costForTwo}</p>
          <span className="res-rating">⭐ {avgRating} </span>
          <span className="res-time">• {sla.deliveryTime} Minutes </span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
