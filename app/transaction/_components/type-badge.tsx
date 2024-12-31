import { Badge } from "@/app/_components/ui/badge";
import { Transaction, TransactionType } from "@prisma/client";
import { CircleIcon } from "lucide-react";

interface TransactionTypeBadgeProps {
  transaction: Transaction;
}

const TransactionTypeBadge = ({ transaction }: TransactionTypeBadgeProps) => {
  if (transaction.type === TransactionType.DEPOSIT) {
    return (
      <Badge className="bg-green-900 font-bold text-green-500 hover:bg-green-900">
        <CircleIcon className="mr-2 fill-green-500" size={10} />
        Depósito
      </Badge>
    );
  }
  if (transaction.type === TransactionType.EXPENSE) {
    return (
      <Badge className="bg-red-950 font-bold text-red-600 hover:bg-red-950">
        <CircleIcon className="mr-2 fill-red-600" size={10} />
        Despesa
      </Badge>
    );
  }
  return (
    <Badge className="font bold bg-gray-700 text-white hover:bg-gray-700">
      <CircleIcon className="mr-2 fill-white" size={10} />
      Investimento
    </Badge>
  );
};

export default TransactionTypeBadge;
