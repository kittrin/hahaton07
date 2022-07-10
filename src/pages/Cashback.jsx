import React from 'react';
import CashbackMarket from "../components/UI/CashbackProducts/CashbackMarket";
import './styles/Cashback.css'
import {Steps} from "antd";
import ShopItem from "../components/ShopItem/ShopItem";

const Cashback = () => {
    return (
        <div style={{padding: 20}}>
            <h1>Товары с кэшбэком в Краснодаре</h1>
            <Steps progressDot current={1}>
                <Steps.Step title="1% за все покупки" description="Стандарт"/>
                <Steps.Step title="1.5%" description="Совершите покупки на 2000₽"/>
                <Steps.Step title="2%" description="Совершите покупки на 5000₽"/>
                <Steps.Step title="2.5%" description="Совершите покупки на 7000₽"/>
                <Steps.Step title="3%" description="Совершите покупки на 10 000₽"/>
            </Steps>
            <div className='cashbackPage'>
                <CashbackMarket/>
                <ShopItem/>
            </div>
        </div>
    );
};

export default Cashback;