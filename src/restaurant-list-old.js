import React from "react";
import Restaurant from "./restaurant.js";
import useAccordion from "./customHooks/useAccordion.js";

export default function RestaurantsList({ restaurants }) {
  const { isOpenItem, toggleOpenItem } = useAccordion(restaurants[0].id);

  return (
    <div>
      {restaurants.map(restaurant => (
        <Restaurant
          key={restaurant.id}
          restaurant={restaurant}
          isOpen={isOpenItem(restaurant.id)}
          onBtnClick={toggleOpenItem(restaurant.id)}
        />
      ))}
    </div>
  );
}
