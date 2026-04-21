"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { timestamp: "Mon", score: 72 },
  { timestamp: "Tue", score: 78 },
  { timestamp: "Wed", score: 65 },
  { timestamp: "Thu", score: 85 },
  { timestamp: "Fri", score: 90 },
];

export default function ScoreChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis dataKey="timestamp" />
        <YAxis domain={[0, 100]} />
        <Tooltip />
        <Line type="monotone" dataKey="score" stroke="red" />
      </LineChart>
    </ResponsiveContainer>
  );
}
