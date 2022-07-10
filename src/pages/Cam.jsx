import React, {useState} from 'react';
import {InboxOutlined} from '@ant-design/icons';
import {Card, message, Upload} from 'antd';
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Dragger from "antd/es/upload/Dragger";

const Cam = () => {
    const [req, setReq] = useState({})

    const props = {
        name: 'images',
        multiple: true,
        action: 'http://0967-46-18-203-145.ngrok.io/barcode/',

        onChange(info) {
            const {status} = info.file;
            const res = info.file.response
            if (status !== 'uploading') {
                setReq({})
            }

            if (status === 'done') {
                setReq(res)
            } else if (status === 'error') {
                setReq({})
            }
        },

        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    };

    return (
        <div className=''>
            <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                    <InboxOutlined/>
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
              <p className="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                    band files
                </p>
            </Dragger>
            <Card hoverable={true}>
                <p>Название: {req.Name}</p>
                <p>Магазин: {req.Shop}</p>
                <p>Дата: {req.Date}</p>
                <p>БарКод: {req.barcodeNumber}</p>
                <p>Цена: {req.Cost}</p>
            </Card>
        </div>
    );
};

export default Cam;