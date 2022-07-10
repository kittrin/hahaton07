import React from 'react';
import {Button, Input, Menu, Select} from "antd";
import LogoBank from "../Icons/LogoBank";
import './menu.css'
import {Option} from "antd/es/mentions";
import {Link} from "react-router-dom";
import {CameraOutlined} from "@ant-design/icons";

const HeaderApp = () => {
    const city = ['Москва', "Санкт-Петербург", "Новосибирск", "Екатеринбург", "Казань", "Нижний Новгород", "Челябинск", "Самара", "Уфа", "Ростов-на-Дону", "Омск", "Красноярск", "Воронеж", "Пермь", "Волгоград", "Краснодар"]
    const arrayCity = []
    city.map(el => {
        arrayCity.push(<Option key={el}>{el}</Option>)
    })

    return (
        <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={['logo']}
            className='menuHeader'
        >
            <Menu.Item key='logo'><Link to='/main'><LogoBank/></Link></Menu.Item>
            <Menu.Item key='camera'><Link to='/camera'>BarCode</Link></Menu.Item>
            <Menu.Item key='sales'><Link to='/sales'>Скидки</Link></Menu.Item>
            <Menu.Item key='cashback'><Link to='/cashback'>Кэшбэк</Link></Menu.Item>
            <Menu.Item key='coupons'><Link to='/coupons'>Купоны</Link></Menu.Item>
            <Menu.Item key='shops'><Link to='/shops'>Магазины</Link></Menu.Item>
            <Menu.Item key='search'><Link to='/search'>Поиск</Link></Menu.Item>
            <Menu.Item key='map'><Link to='/map'>Карта</Link></Menu.Item>
            <Menu.Item><Link to='/profile'>Профиль</Link></Menu.Item>
        </Menu>
    );
};

export default HeaderApp;