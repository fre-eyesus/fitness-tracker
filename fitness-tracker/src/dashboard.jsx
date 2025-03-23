import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, PieChart } from "recharts";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useState } from "react";

const transactions = [
  { id: 1, description: "Groceries", amount: -50, date: "March 21" },
  { id: 2, description: "Freelance Payment", amount: 500, date: "March 20" },
  { id: 3, description: "Netflix Subscription", amount: -15, date: "March 18" },
];

const expensesData = [
  { name: "Rent", value: 40 },
  { name: "Food", value: 25 },
  { name: "Entertainment", value: 15 },
  { name: "Other", value: 20 },
];

export default function FinanceDashboard() {
  const [balance, setBalance] = useState(2000);
  const [income, setIncome] = useState(3500);
  const [expenses, setExpenses] = useState(1500);

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Overview Section */}
      <Card className="md:col-span-3">
        <CardHeader>
          <CardTitle>Finance Overview</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-3 gap-4 text-center">
          <div>
            <h3 className="text-lg font-semibold">Total Balance</h3>
            <p className="text-xl font-bold text-green-500">${balance}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Income</h3>
            <p className="text-xl font-bold text-blue-500">+${income}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Expenses</h3>
            <p className="text-xl font-bold text-red-500">-${expenses}</p>
          </div>
        </CardContent>
      </Card>

      {/* Recent Transactions */}
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Description</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((tx) => (
                <TableRow key={tx.id}>
                  <TableCell>{tx.description}</TableCell>
                  <TableCell className={tx.amount < 0 ? "text-red-500" : "text-green-500"}>
                    {tx.amount < 0 ? "-" : "+"}${Math.abs(tx.amount)}
                  </TableCell>
                  <TableCell>{tx.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Expense Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <PieChart width={200} height={200} data={expensesData}>
          </PieChart>
        </CardContent>
      </Card>
    </div>
  );
}
