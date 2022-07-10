import React from 'react';
import './styles/Coupons.css'
import SaleProduct from "../components/UI/SaleProduct/SaleProduct";
import Coupon from "../components/Coupon";

const Coupons = () => {
    return (
        <div>
            <div className='main_coupons'>
                <div className='header'>
                    <div className='title_header'>Купоны в Банке Центр-Инвест</div>
                    <div className='description_header'>
                        Покажите код купона в магазине, ресторане или отделении
                        партнера или введите код в интернет-магазине, чтобы получить скидку или подарок
                    </div>
                </div>
            </div>
            <div style={{
                display:'flex',
                flexWrap:'wrap',
                justifyContent: "center",
                alignItems:"center"
            }}>
                <Coupon description={'Скидка на покупку энергетика'} sale={15}/>
                <Coupon description={'Скидка при покупке на более 2000 рублей'} sale={5}/>
            </div>
        </div>
    );
};

export default Coupons;