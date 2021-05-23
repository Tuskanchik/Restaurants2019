import React from "react";
import {Button} from "antd";
import Reviews from "./reviews";

export default function Restaurant({ restaurant, isOpen, onBtnClick }) {
  const body = isOpen && (
    <div>
      <img src={restaurant.image} width={64} height={64} />
      <div>Menu items: {restaurant.menu.length}</div>
      <Reviews 
        reviews={restaurant.reviews} 
      />
    </div>
  );
  return (
    <div>
      <h3> {restaurant.name} </h3>
      {body}
      <Button onClick={onBtnClick} type='primary'> {isOpen ? "close" : "open"} </Button>
    </div>
  );
}
