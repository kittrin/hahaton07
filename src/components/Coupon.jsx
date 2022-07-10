import React from 'react';
import cl from "./UI/SaleProduct/SaleProduct.module.css";
import {Button} from "antd";

const Coupon = ({description, sale}) => {
    return (
        <div className={cl.offer}>
            <div className={cl.offer_header}>
                <img
                    src="https://csrsoft.ru/upload/iblock/2a0/2a07182b18dccd2d6270c3dfcea185f0.jpg"
                    className={cl.offer_header_img}
                />
                <div className={cl.offer_sale}>
                    <div className={cl.sale}>
                        -{sale}%
                    </div>
                </div>
            </div>
            <div className={cl.offer_product_info}>
                <div className={cl.description}>
                    {description}
                </div>
            </div>
            <div className={cl.offer_footer}>
                <Button type="primary"
                style={{
                    background: '#ffcc00'
                }}>
                    Открыть
                </Button>
            </div>
        </div>
    );
};

export default Coupon;