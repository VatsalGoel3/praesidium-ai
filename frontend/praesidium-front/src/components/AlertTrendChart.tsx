import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

// Mock data — to be replaced with backend integration later
const alertData = [
  { time: "09:12", count: 2 },
  { time: "10:12", count: 4 },
  { time: "11:12", count: 5 },
  { time: "12:12", count: 5 },
  { time: "13:12", count: 4 },
  { time: "14:12", count: 6 },
  { time: "15:12", count: 3 },
  { time: "16:12", count: 6 },
  { time: "17:12", count: 3 },
  { time: "18:12", count: 0 },
  { time: "19:12", count: 0 },
  { time: "20:12", count: 2 },
  { time: "21:12", count: 3 },
  { time: "22:12", count: 5 },
  { time: "23:12", count: 3 },
  { time: "00:12", count: 5 },
  { time: "01:12", count: 0 },
  { time: "02:12", count: 3 },
  { time: "03:12", count: 5 },
  { time: "04:12", count: 3 },
  { time: "05:12", count: 7 },
  { time: "06:12", count: 1 },
  { time: "07:12", count: 4 },
  { time: "08:12", count: 6 },
];

export default function AlertTrendChart() {
  return (
    <div className="p-4 mb-6 bg-card rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-3">📈 Alert Volume (last 24h)</h2>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={alertData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" fontSize={12} />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Line type="monotone" dataKey="count" stroke="#f97316" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}