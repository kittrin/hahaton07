import React from 'react';
import { Line } from "@ant-design/charts";

const Statistics = () => {
    const data = [
        {
            Day: '1',
            Rubles: 10,
        },
        {
            Day: '2',
            Rubles: 5,
        },
        {
            Day: '3',
            Rubles: 0,
        },
        {
            Day: '4',
            Rubles: 20,
        },
        {
            Day: '5',
            Rubles: 5,
        },
        {
            Day: '6',
            Rubles: 6,
        },
        {
            Day: '7',
            Rubles: 7,
        },
        {
            Day: '8',
            Rubles: 9,
        },
        {
            Day: '9',
            Rubles: 10,
        },
        {
            Day: '10',
            Rubles: 11,
        },
        {
            Day: '11',
            Rubles: 13,
        },
        {
            Day: '12',
            Rubles: 12,
        },
        {
            Day: '13',
            Rubles: 13,
        },
        {
            Day: '14',
            Rubles: 10,
        },
        {
            Day: '15',
            Rubles: 9,
        },
        {
            Day: '16',
            Rubles: 8,
        },
        {
            Day: '17',
            Rubles: 7,
        },
        {
            Day: '18',
            Rubles: 15,
        },        {
            Day: '19',
            Rubles: 5,
        },
        {
            Day: '20',
            Rubles: 10,
        },
        {
            Day: '21',
            Rubles: 20,
        },
        {
            Day: '22',
            Rubles: 3,
        },
        {
            Day: '23',
            Rubles: 5,
        },
        {
            Day: '24',
            Rubles: 6,
        },
        {
            Day: '25',
            Rubles: 10,
        },
        {
            Day: '26',
            Rubles: 9,
        },
        {
            Day: '27',
            Rubles: 4,
        },
        {
            Day: '28',
            Rubles: 5,
        },
        {
            Day: '29',
            Rubles: 8,
        },
        {
            Day: '30',
            Rubles: 10,
        },
    ];
    const config = {
        data,
        xField: 'Day',
        yField: 'Rubles',
        label: {},
        point: {
            size: 5,
            shape: 'diamond',
            style: {
                fill: 'white',
                stroke: '#5B8FF9',
                lineWidth: 2,
            },
        },
        tooltip: {
            showMarkers: false,
        },
        state: {
            active: {
                style: {
                    shadowBlur: 4,
                    stroke: '#000',
                    fill: 'red',
                },
            },
        },
        interactions: [
            {
                type: 'marker-active',
            },
        ],
    };
    return (
        <Line цш{...config} />
    );
};

export default Statistics;