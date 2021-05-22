import React, {useState} from 'react';
import {Input, Button} from 'antd';

export default function OrderForm() {
    const [name, setName] = useInputValue();
    const [telephone, setTelephone] = useInputValue();
    const [adress, setAddress] = useInputValue();

    const onSubmitClick = (e) => {
        e.preventDefault();
        console.log('---', name, telephone, adress);
    }

    return (
        <div>
            <form onSubmit={onSubmitClick}>
                Имя: <Input value={name} onChange={setName}/>
                Телефон: <Input value={telephone} onChange={setTelephone}></Input>
                Адресс: <Input.TextArea value={adress} onChange={setAddress}/>
                <Button type='primary' htmlType='submit'>Заказать</Button>
            </form>
        </div>
    )
}

const useInputValue = (initialValue) => {
    const [state, setState] = useState(initialValue);
    const onChange = ev => setState(ev.target.value);

    return [state, onChange];
}


