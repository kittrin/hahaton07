import React from 'react';
import './styles/Profile.css'
import {Card, Progress, Radio, Row} from "antd";
import {ThunderboltOutlined} from "@ant-design/icons";
import Diagramm from "../components/Diagramm";

const Profile = () => {
    const data = [
        ,
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.',
    ];
    return (
        <div className='osnova'>
            <div className='profile'>
                <div className='ava'>
                    <img src='https://flyfoods.ru/upload/mini/59833d6ceb745.png'/>
                </div>
                <p style={{textAlign: 'center', fontWeight: 500, fontSize: '2rem'}}>Кристина</p>
                <br/>
                <p>Ваш текущий уровень: </p>
                <Radio.Group
                    defaultValue="c"
                    buttonStyle="solid"
                    style={{
                        width: '100%',
                        marginTop: 16,
                        display: 'flex',
                        flexDirection: 'column'
                    }}>

                    <Radio.Button style={{width:'100%'}} value={'c'}>Бронза</Radio.Button>
                    <Radio.Button style={{width:'100%'}} disabled>Серебро</Radio.Button>
                    <Radio.Button style={{width:'100%'}} disabled>Золото</Radio.Button>
                </Radio.Group>
                <br/>
                <p>До следующего уровня: </p>
                <div className='exp'>
                    <ThunderboltOutlined style={{color: '#ffcc00', fontSize: 'large'}}/>
                    <Progress percent={30}/>
                </div>
                <br/>
                <Card hoverable={true} style={{width: '100%'}}>
                    <span style={{fontSize: '1em'}}>Самая большая покупка</span>
                    <div
                        style={{
                            marginTop: "20px",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}
                    >
                        <img className='ozon' src="https://docs.ozon.ru/common/logo.png" />
                        <span style={{ fontSize: 20 }}>5 000 ₽</span>
                    </div>
                </Card>
                <br/>
                <Card hoverable={true} style={{width: '100%'}}>
                    <span style={{fontSize: '1em'}}>Чаще всего покупали</span>
                    <div
                        style={{
                            marginTop: "20px",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}
                    >
                        <img className='ozon' src="https://csrsoft.ru/upload/iblock/2a0/2a07182b18dccd2d6270c3dfcea185f0.jpg" />
                        <span style={{ fontSize: 20 }}>15 раз</span>
                    </div>
                </Card>
                <br/>
                <Card hoverable={true} style={{width: '100%'}}>
                    <span style={{fontSize: '1em'}}>Вы заработали на операциях</span>
                    <div
                        style={{
                            marginTop: "20px",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}
                    >
                        <img className='ozon' src="https://st4.depositphotos.com/27867620/30423/v/450/depositphotos_304236816-stock-illustration-average-price-simple-design.jpg" />
                        <span style={{ fontSize: 20 }}>52 балла</span>
                    </div>
                </Card>
                <br/>
                <Card hoverable={true} style={{width: '100%'}}>
                    <span style={{fontSize: '1em'}}>Больше всего потратили</span>
                    <div
                        style={{
                            marginTop: "20px",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}
                    >
                        <img className='ozon' src="https://catherineasquithgallery.com/uploads/posts/2021-02/1612667417_123-p-zelenii-fon-apteka-176.jpg" />
                        <span style={{ fontSize: 20 }}>10 156 ₽</span>
                    </div>
                </Card>
                <Diagramm/>
            </div>
        </div>

    )
        ;
};

export default Profile;