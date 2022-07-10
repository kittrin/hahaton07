import React from 'react';
import cl from './Cashback.module.css'

const CashbackMarket = () => {
    return (
        <div className={cl.infoCash}>
            <img src='https://klike.net/uploads/posts/2020-03/1583918763_2.jpg' className={cl.infoCash_img}/>
            <div className={cl.info}>
                <b>Накопительный кэшбэк</b>
                <br/>
                <p>Чем больше чеков, тем больше награда. Забирайте её сразу или копите до максимальной суммы</p>
            </div>
        </div>
    );
};

export default CashbackMarket;