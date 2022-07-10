import React from 'react';
import cl from './SaleProduct.module.css'

const SaleProduct = ({url, sale, newPrice, oldPrice, description, val}) => {
    return (
        <div className={cl.offer}>
            <div className={cl.offer_header}>
                <img
                    src={url}
                    className={cl.offer_header_img}
                />
                <div className={cl.offer_sale}>
                    <div className={cl.sale}>
                        -{sale}%
                    </div>
                    <div className={cl.offer_sale_data}>
                        по 12 июля
                    </div>
                </div>
            </div>
            <div className={cl.offer_product_info}>
                <div className={cl.description}>
                    {description}
                </div>
                <div className={cl.description_footer}>
                    {val}
                </div>
            </div>
            <div className={cl.offer_footer}>
                <div className={cl.offer_newPrice}>
                    {newPrice}
                </div>
                <div className={cl.offer_oldPrice}>
                    {oldPrice}
                </div>
            </div>
        </div>
    )
        ;
};

export default SaleProduct;