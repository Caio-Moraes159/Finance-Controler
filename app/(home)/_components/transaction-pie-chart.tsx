"use client";

import { Pie, PieChart } from "recharts";
import { Card, CardContent } from "@/app/_components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/app/_components/ui/chart";
import { TransactionType } from "@prisma/client";
import { TransactionPercentagePerType } from "@/app/_data/get-dashboard/types";
import PercentageItems from "./percentage-items";
import { PiggyBankIcon, TrendingDownIcon, TrendingUpIcon } from "lucide-react";

const chartConfig = {
  [TransactionType.INVESTMENT]: {
    label: "Investido",
    color: "#FFFFFF",
  },
  [TransactionType.DEPOSIT]: {
    label: "Receita",
    color: "#55B02E",
  },
  [TransactionType.EXPENSE]: {
    label: "Despesas",
    color: "#E93030",
  },
} satisfies ChartConfig;

interface TransactionPieChartProps {
  typesPercent: TransactionPercentagePerType;
  depositsTotal: number;
  investmentsTotal: number;
  expensesTotal: number;
}

const TransactionPieChart = ({
  depositsTotal,
  investmentsTotal,
  expensesTotal,
  typesPercent,
}: TransactionPieChartProps) => {
  const chartData = [
    {
      type: TransactionType.INVESTMENT,
      amount: investmentsTotal,
      fill: "#FFFFFF",
    },
    {
      type: TransactionType.DEPOSIT,
      amount: depositsTotal,
      fill: "#55B02E",
    },
    {
      type: TransactionType.EXPENSE,
      amount: expensesTotal,
      fill: "#E93030",
    },
  ];
  return (
    <Card className="flex flex-col p-6">
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="amount"
              nameKey="type"
              innerRadius={60}
            />
          </PieChart>
        </ChartContainer>
        <div className="space-y-3">
          <PercentageItems
            icon={<TrendingUpIcon size={16} className="text-green-600" />}
            title="Recebido"
            value={typesPercent[TransactionType.DEPOSIT]}
          />
          <PercentageItems
            icon={<TrendingDownIcon size={16} className="text-red-600" />}
            title="Despesas"
            value={typesPercent[TransactionType.EXPENSE]}
          />
          <PercentageItems
            icon={<PiggyBankIcon size={16} />}
            title="Investido"
            value={typesPercent[TransactionType.INVESTMENT]}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default TransactionPieChart;
