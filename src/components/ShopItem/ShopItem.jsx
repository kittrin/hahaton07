import React from 'react';
import cl from "./ShopItem.module.css";
import {Steps} from "antd";

const ShopItem = () => {
    return (
        <div className={cl.cashback_item}>
            <div className={cl.cashback_header}>
                <img
                    src='https://storage.yandexcloud.net/images.ratengoods.com/1/1159caf6d727c2da4873e25324efe42357cf29e7.jpeg'
                    className={cl.cashback_header_img}
                />
                <div className={cl.cashback_sale}>
                    <div className={cl.cashback_header_data}>
                        по 10 июля
                    </div>
                </div>
            </div>

            <div className={cl.cashback_body}>
                <div className={cl.cashback_body_description}>
                    Энергетический напиток Drive Me оригинальный, 0.449 л
                </div>
            </div>
            <div className={cl.cashback_footer}>
                <div className={cl.cashback_footer_number}>
                    <Steps size="small" current={0} progressDot>
                        <Steps.Step title="1%" description='от 1шт.' />
                        <Steps.Step title="5%" description='от 5шт.'/>
                    </Steps>
                </div>
            </div>
        </div>
    );
};

export default ShopItem;