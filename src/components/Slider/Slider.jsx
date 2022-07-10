import React, {useState} from 'react';
import {createRef} from "react";
import {Button, Carousel, Col, Row} from "antd";
import {LeftOutlined, RightOutlined} from "@ant-design/icons";
import cl from './slider.module.css'
import SlideC from "./Slide/SlideC";
import './slider.module.css'

const Slider = ({pointImg}) => {
    const [kol, setKol]=useState(3)
    const carouselRef = createRef()

    const nextSlide = () => {
        carouselRef.current.next()
    }

    const prevSlide = () => {
        carouselRef.current.prev()
    }
    return (
        <Row style={{alignItems: 'center', marginTop: 20, height: 'max-content'}}>
            <Col span={1}>
                <Button
                    type="primary"
                    shape="circle"
                    icon={<LeftOutlined/>}
                    onClick={prevSlide}
                    className={cl.button_custom}
                />
            </Col>

            <Col span={22}>
                <Carousel slidesToShow={3} ref={carouselRef} dots={false}>
                    {pointImg.map((el) =>
                        <SlideC url={el}/>
                    )
                    }
                </Carousel>
            </Col>
            <Col span={1}>
                <Button
                    type="primary"
                    shape="circle"
                    icon={<RightOutlined/>}
                    onClick={nextSlide}
                    className={cl.button_custom}
                />
            </Col>
        </Row>
    );
};

export default Slider;