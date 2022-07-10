import React from 'react';
import cl from './SlideC.module.css'

const SlideC = ({url}) => {
    const widthImg = Math.ceil(window.innerWidth / 6)

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    return (
        <div className={cl.mainSlide}>
            <div className={cl.slide_footer_sale}>
                <div>до -{getRandomInt(70) + 1}%</div>
            </div>
            <div style={{
                width: `${widthImg}px`,
                aspectRatio: '1/1',
                background: `center/contain no-repeat url(${url})`
            }}></div>

        </div>
    );
};

export default SlideC;