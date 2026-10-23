import {
  BarChart,
  Bar,
  Cell, 
  XAxis,
  YAxis,
  PieChart,
  Pie,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import { ThemeContext } from "../Contexts/ThemeContext";
import { useContext } from "react";

import { useRecoilState } from "recoil";
import { ThemeAtom } from "../atoms/ThemeAtom";

const data = [
  {
    name: "Brainpower",
    value: 23,
    color: "#3B82F6",
  },
  {
    name: "Craziness",
    value: 52,
    color: "#EF4444",
  },
  {
    name: "Intelligence",
    value: 9,
    color: "#22C55E",
  },
  {
    name: "Time Waste",
    value: 16,
    color: "#EAB308",
  },
];
const basicStyling = "h-96 w-146 rounded-xl shadow-lg p-4 transition-all duration-250 hover:translate-y-0.5 "
export function BarGraph() {

  const [theme, setTheme] = useRecoilState(ThemeAtom);
  
  return (
    <div className={theme === "light"
      ? basicStyling + "  bg-white "
      : basicStyling + "  text-white bg-gray-800 shadow-none border border-gray-500 "
    }>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" radius={[8, 8, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={index} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function PieGraph() {
  const [theme,setTheme] = useRecoilState(ThemeAtom)
  
  return (
    <div className={theme === "light" ?
      basicStyling + " bg-white"
      : basicStyling + " text-white bg-gray-800 shadow-none border border-gray-500"
    }>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={120}
            label
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}