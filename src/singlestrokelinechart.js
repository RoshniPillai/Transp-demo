// src/components/line.rechart.js

import React from "react";
import { LineChart, Line, YAxis, XAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

class LineComponent extends React.Component {

    data = [
        {
            "name": "Aug 2021",
            "Pipeline no": 332,
         },
        {
            "name": "Sept 2021",
            "Pipeline no": 242,
          
        },
        {
            "name": "Oct 2021",
            "Pipeline no": 165,
        },
        {
            "name": "Nov 2021",
            "Pipeline no": 364,
        },
        {
            "name": "Dec 2021",
            "Pipeline no": 490,
        }
    ]

    render() {
        return (
            <LineChart width={600} height={350} data={this.data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Pipeline no" stroke="#0095FF" />
                 </LineChart>
        )
    };
}

export default LineComponent;
