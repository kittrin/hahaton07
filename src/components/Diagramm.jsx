import React from 'react';
import {Pie} from '@ant-design/plots';

const data = [
    {
        type: 'Супермаркеты',
        value: 27,
    },
    {
        type: 'Топливо',
        value: 25,
    },
    {
        type: 'Развлечения',
        value: 18,
    },
    {
        type: 'Аптеки',
        value: 15,
    },
    {
        type: 'Переводы',
        value: 10,
    },
    {
        type: 'Одежда',
        value: 5,
    },
];
const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.5,
    innerRadius: 1.6,
    label: {
        type: 'inner',
        offset: '-50%',
        content: '{value}',
        style: {
            textAlign: 'center',
            fontSize: 14,
        },
    },
    interactions: [
        {
            type: 'element-selected',
        },
        {
            type: 'element-active',
        },
    ],
    statistic: {
        title: false,
        content: {
            style: {
                whiteSpace: 'pre-wrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
            },
            content: '',
        },
    },
};

const Diagramm = () => {
    return (
        <Pie {...config} />
    );
};

export default Diagramm;