import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  ReferenceLine,
  Area,
} from "recharts";

const Chart = ({ data }) => {
  return (
    <ResponsiveContainer>
      <AreaChart
        style={{
          backgroundColor: "white",
        }}
        data={data}
        margin={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <Area
          type="monotone"
          dataKey="value"
          stroke="#FA9D21"
          fill="#fa9d213d"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Chart;
