import { Button, Descriptions as Content } from "antd";
import React, { useState } from "react";

export default function Reviews({ reviews }) {
  const [isOpen, setIsOpen] = useState(true);

  const reviewsBody = reviews.map(review => (
    <Content key={review.id}>
      <h3>Посетитель: {review.user}</h3>
      <div>Отзыв: {review.text}</div>
      <div> Оценка: {review.rating}</div>
    </Content>
  ));

  const toggle = () => setIsOpen(isOpen => !isOpen);

  return (
    <div>
      Отзывы:
      <Button onClick={toggle}>
        {isOpen ? "Cкрыть отзывы" : "Показать отзывы"}
      </Button>
      {isOpen && reviewsBody}
    </div>
  );
}
