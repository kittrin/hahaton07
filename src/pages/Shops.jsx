import React, {useState} from 'react';
import {Col, Row, Select} from "antd";
import Shop from "../components/Shop/Shop";
import {Option} from "antd/es/mentions";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {value} from "lodash/seq";
import logoShop from './JsonFiles/BackShop.json'

let rer = '';
const Shops = () => {
    const [shops, setShops] = useState([])
    const [fetchPosts, isPostsLoading, postError] = useFetching(async (category) => {
        if (!0){
            const response = await PostService.getCategory(category)
            setShops(response.data)
        }

    })


    return (
        <div style={{
            width: '98vw',
            padding: 20
        }}>
            <Row>
                <Col span={20} offset={2}>
                    <Select defaultValue="0" size='large' style={{width: '50%'}} onChange={(value)=>{fetchPosts(value)}}>
                        <Option value="0">Выберите категорию</Option>
                        <Option value="5816">Цифровые товары</Option>
                        <Option value="5441">Кондитерские</Option>
                        <Option value="5912">Аптеки</Option>
                        <Option value="7538">Автосервисы</Option>
                        <Option value="5712">Мебельные</Option>
                        <Option value="5995">Зоомагазины</Option>
                        <Option value="5691">Магазины одежды</Option>
                        <Option value="5541">Заправки</Option>
                        <Option value="5814">Быстрое питание</Option>
                        <Option value="5732">Электротовары</Option>
                    </Select>
                </Col>
            </Row>
            <Row>
                <Col span={20} offset={2}>
                    <div className='shopList'>
                        {shops.map((el)=> {if (logoShop.hasOwnProperty(el.name)){
                            return (
                                <Shop url={logoShop[el.name]} name={el.name}/>
                            )
                        } })}
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Shops;