import React from "react";
import Restaurant from "./restaurant.js";
import useAccordion from "./customHooks/useAccordion.js";
import DecoratedComponent from "./decorators/accordion.js";

function RestaurantsList({ restaurants, toggleOpenItem, isItemOpen }) {
  // const { isOpenItem, toggleOpenItem } = useAccordion(restaurants[0].id);

  return (
    <div>
      {restaurants.map(restaurant => (
        <Restaurant
          key={restaurant.id}
          restaurant={restaurant}
          isOpen={isItemOpen(restaurant.id)}
          onBtnClick={toggleOpenItem(restaurant.id)}
        />
      ))}
    </div>
  );
}

export default DecoratedComponent(RestaurantsList);
//кастомный хук
// function useAccordion(defaultOpenId) {
//     const [openItemId, setOpenItem] = useState(defaultOpenId);
//     const toggleOpenItem = id => () => setOpenItem(id === openItemId ? null : id);
//     const isOpenItem = id => (openItemId === id);

//     return { isOpenItem, toggleOpenItem };
// }
