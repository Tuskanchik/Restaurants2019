import { Button, Descriptions as Content } from 'antd';
import React from 'react';

export default function Reviews({reviews}) {

    return (
        <div>
            Отзывы: <Button>Cкрыть отзывы</Button>
            {reviews.map(review => <Content key = {review.id}>
                <h3>Посетитель: {review.user}</h3>
                <div>Отзыв: {review.text}</div>
                <div> Оценка: {review.rating}</div>
            </Content>)}
        </div>
    );
}

