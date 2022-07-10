import React, {createRef, useRef} from 'react';
import '../App.css'
import Slider from "../components/Slider/Slider";
import slider1 from './JsonFiles/SlideImg.json'
import slider2 from './JsonFiles/SlideImg2.json'
import slider3 from './JsonFiles/SlideImg3.json'
import './styles/MainPage.css'

function MainPage() {
    return (
        <div>
            <div className='main_coupons'>
                <div className='header'>
                    <div className='title_header'>Предложения дня</div>
                    <div className='description_header'>
                        Покажите код купона в магазине, ресторане или отделении
                        партнера или введите код в интернет-магазине, чтобы получить скидку или подарок
                    </div>
                </div>

            </div>
            <div className='main'>
                <h5 style={{marginBottom: 10, marginTop: 10}}>Специально для Вас</h5>
                <Slider pointImg={slider1}/>
                <h5 style={{marginBottom: 10, marginTop: 10}}>Топ - 10</h5>
                <Slider pointImg={slider2}/>
                <h5 style={{marginBottom: 10, marginTop: 10}}>Рекомендации для вас</h5>
                <Slider pointImg={slider3}/>
            </div>
        </div>
    );
}

export default MainPage;
