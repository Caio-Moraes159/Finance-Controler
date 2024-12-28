import { db } from "../_lib/prisma";
import { Button } from "../_components/ui/button";
import { DataTable } from "../_components/ui/data-table";
import { ArrowDownUpIcon } from "lucide-react";
import { transactionColumns } from "./_columns";

const transaction = async () => {
  const transactions = await db.transaction.findMany({});
  return (
    <div className="p-6 space-y-6">
      {/*TITULO E BOTÃO*/}
      <div className="flex w-full justify-between items-center">
        <h1 className="font-bold text-2xl">Transações</h1>
        <Button className="rounded-full bg-blue-800">
          Adicionar Transação
          <ArrowDownUpIcon />
        </Button>
      </div>
      <DataTable columns={transactionColumns} data={transactions} />
    </div>
  );
};

export default transaction;
