"use client";
import { useState } from "react";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const records = {
  week: [
    { label: "月", count: 2 },
    { label: "火", count: 4 },
    { label: "水", count: 3 },
    { label: "木", count: 6 },
    { label: "金", count: 4 },
    { label: "土", count: 8 },
    { label: "日", count: 5 },
  ],
  month: [
    { label: "1週", count: 18 },
    { label: "2週", count: 24 },
    { label: "3週", count: 20 },
    { label: "4週", count: 32 },
  ],
};
export function UsageChart() {
  const [period, setPeriod] = useState<"week" | "month">("week");
  const total = records[period].reduce((sum, record) => sum + record.count, 0);
  return (
    <div className="chart-card">
      <div className="chart-top">
        <span className="chart-label">持ち物を使った回数</span>
        <div
          className="chart-tabs"
          role="group"
          aria-label="サンプルグラフの期間"
        >
          <button
            aria-pressed={period === "week"}
            onClick={() => setPeriod("week")}
          >
            週
          </button>
          <button
            aria-pressed={period === "month"}
            onClick={() => setPeriod("month")}
          >
            月
          </button>
        </div>
      </div>
      <div className="chart-total" aria-live="polite">
        <strong>{total}</strong>
        <span>
          回{" "}
          <span className="chart-period">
            / {period === "week" ? "1週間" : "1か月"}
          </span>
        </span>
      </div>
      <div className="chart-plot" aria-hidden="true">
        <ResponsiveContainer width="100%" height="100%" minWidth={0}>
          <BarChart
            data={records[period]}
            margin={{ top: 8, right: 0, left: -28, bottom: 0 }}
            accessibilityLayer={false}
          >
            <CartesianGrid
              vertical={false}
              stroke="var(--line)"
              strokeDasharray="3 4"
            />
            <XAxis
              dataKey="label"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "var(--muted)", fontSize: 12 }}
              dy={8}
            />
            <YAxis
              allowDecimals={false}
              axisLine={false}
              tickLine={false}
              tick={{ fill: "var(--muted)", fontSize: 11 }}
            />
            <Tooltip
              cursor={{ fill: "var(--soft)" }}
              contentStyle={{
                background: "var(--surface)",
                border: "1px solid var(--line)",
                borderRadius: 12,
                color: "var(--ink)",
              }}
              formatter={(value) => [`${value}回`, "使用回数"]}
            />
            <Bar
              dataKey="count"
              fill="var(--terracotta)"
              radius={[5, 5, 0, 0]}
              maxBarSize={32}
              isAnimationActive={false}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <table className="sr-only">
        <caption>
          {period === "week" ? "1週間" : "1か月"}の使用回数（サンプル）
        </caption>
        <thead>
          <tr>
            <th scope="col">期間</th>
            <th scope="col">使用回数</th>
          </tr>
        </thead>
        <tbody>
          {records[period].map((record) => (
            <tr key={record.label}>
              <th scope="row">{record.label}</th>
              <td>{record.count}回</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="chart-note">
        機能紹介用のサンプルデータです。アプリの実際の記録ではありません。
      </p>
    </div>
  );
}
