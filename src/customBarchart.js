import "./styles.css";
import React, { useState, useCallback } from "react";
import { BarChart, Bar, Cell } from "recharts";

const data = [
  {
    name: "Domain 1",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Domain 2",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Domain 3",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Domain 4",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Domain 5",
    uv: 1890,
    pv: 4800,
    amt: 2181
  }
];

export default function CustomBarChart() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = data[activeIndex];

  const handleClick = useCallback(
    (entry: any, index: number) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  return (
    <div>
      {/* <p>Click each rectangle </p> */}
      <BarChart width={400} height={200} data={data}>
        {/* <XAxis type="number" hide />
       <YAxis type="category" width={150} padding={{ left: 20 }} dataKey="name"/> */}
        <Bar dataKey="uv" onClick={handleClick}>
          {data.map((entry, index) => (
            <Cell
              cursor="pointer"
              fill={index === activeIndex ? "#82ca9d" : "#8884d8"}
              key={`cell-${index}`}
            />
          ))}
        </Bar>
      </BarChart>
      {/* <p className="content">{`- "${activeItem.name}": ${activeItem.uv}`}</p> */}
      <p className="content">{`- "${activeItem.name}"`}</p>
    </div>
  );
}
