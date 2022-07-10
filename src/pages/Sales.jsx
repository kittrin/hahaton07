import React, {useState} from 'react';
import {Button, Select, Typography} from "antd";
import SaleProduct from "../components/UI/SaleProduct/SaleProduct";
import {Option} from "antd/es/mentions";
import './styles/Sales.css'
import prod from './JsonFiles/SaleProduct.json'

const Sales = () => {
    const [price, setPrice] = useState('start')
    const [val, setVal] = useState('start')
    return (
        <div style={{padding: 20}}>
            <h1>Скидки и акции в Краснодаре</h1>
            <div className='sort'>
                <div className='sortTxt'>
                    <p style={{display: "block"}}>Сортировка:</p>
                </div>
                <Button
                    size={'middle'}
                    onClick={() => {
                        setPrice('start')
                        setVal('start')
                    }}>По умолчанию</Button>

                <Select defaultValue='start' style={{width: 120}} value={price} onChange={(value) => {
                    setPrice(value)
                }}>
                    <Option value="start">По цене:</Option>
                    <Option value="up">По возрастанию</Option>
                    <Option value="down">По убыванию</Option>
                </Select>

                <Select defaultValue='start' value={val} onChange={(v) => {
                    setVal(v)
                }}>
                    <Option value='start'>По скидке: </Option>
                    <Option value='up'>По возрастанию</Option>
                    <Option value='down'>По убыванию</Option>
                </Select>
            </div>

            <div className='saleList'>
                {prod.map((el)=>
                    <SaleProduct
                        url={el.url}
                        sale={30}
                        description={el.description}
                        val={el.value}
                        newPrice={el.new}
                        oldPrice={el.old}
                    />
                )}
            </div>
        </div>
    );
};

export default Sales;