import React from 'react';
import cl from './Shop.module.css'
import {Button} from "antd";
const Shop = ({url, name}) => {
    return (
        <div className={cl.offer}>
            <div className={cl.offer_header}>
                <img
                    src={url}
                    className={cl.offer_header_img}
                />
            </div>
            <div className={cl.offer_product_info}>
                <div className={cl.description}>
                    {name}
                </div>
            </div>
            <div className={cl.offer_footer}>
                <Button type="primary"
                        style={{
                            background: '#ffcc00'
                        }}
                size='small'>
                    Открыть
                </Button>
            </div>
        </div>
    );
};

export default Shop;