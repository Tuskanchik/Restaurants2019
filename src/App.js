import React from "react";
import RestaurantsList from "./restaurants-list";
import { restaurants } from "./fixtures";
import OrderForm from "./order-form.js";

export default function App() {
  return (
    <div>
      <h2>Список ресторанов</h2>
      <RestaurantsList restaurants={restaurants} />
      <OrderForm></OrderForm>
    </div>
  );
}
