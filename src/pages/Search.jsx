import React, {useState} from 'react';
import {Col, Input, Row, Space} from 'antd';
import Shop from "../components/Shop/Shop";
import './styles/searchPage.css'
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import logoShop from "./JsonFiles/BackShop.json";

const Search = () => {

    const onSearch = (value) => {
        fetchPosts(value)
    };
    const [search, setSearch] = useState([])
    const [fetchPosts, isPostsLoading, postError] = useFetching(async (name) => {
        if (!0){
            const response = await PostService.getSearch(name)
            setSearch(response.data)
        }
    })

    return (
        <Row style={{marginTop: 50}}>
            <Col span={20} offset={2}>
                <Input.Search
                    placeholder="Поиск акций и торговых сетей"
                    allowClear
                    onSearch={onSearch}
                    enterButton="Поиск"
                    size={"large"}
                />
            </Col>
            <Col span={20} offset={2}>
                <div className='shopList'>
                    {search.map((el)=>{if (logoShop.hasOwnProperty(el.name)){
                        return (
                            <Shop url={logoShop[el.name]} name={el.name}/>
                        )
                    } })}

                </div>
            </Col>
        </Row>
    );
};

export default Search;