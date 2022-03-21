import React from "react";
import {
  LineChart,
  Line,
  YAxis,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

class LineRechartComponent extends React.Component {
  data = [
    {
      name: "2018",
      "Active Branches": 343,
      Commits: 234
    },
    {
      name: " 2019",
      "Active Branches": 232,
      Commits: 326
    },
    {
      name: "2020",
      "Active Branches": 455,
      Commits: 455
    },
    {
      name: "2021",
      "Active Branches": 264,
      Commits: 465
    },
    {
      name: "2022",
      "Active Branches": 275,
      Commits: 453
    }
  ];

  render() {
    return (
      <LineChart
        width={400}
        height={300}
        data={this.data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Active Branches" stroke="#0095FF" />
        <Line type="monotone" dataKey="Commits" stroke="#FF0000" />
      </LineChart>
    );
  }
}

export default LineRechartComponent;
