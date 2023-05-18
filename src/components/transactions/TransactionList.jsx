import { useGlobalState } from "../../context/GlobalState";

function TransactionList() {
  const { transactions, deleteTransaction } = useGlobalState();

  return (
    <div className="w-[48%] flex flex-col gap-5 p-8 border-2 border-slate-950 rounded-lg max-md:w-[100%] max-md:mt-10">
      <h3 className="text-xl text-center font-semibold">History</h3>
      {transactions.map((transaction) => (
        <div key={transaction.id} className="h-14 flex gap-5 justify-between pb-3 border-b-2 border-gray-600">
          <div className="flex w-[80%] justify-between items-center ">
            <p className="overflow-hidden w-[65%] max-w-[80%]">{transaction.description} </p>
            <span className="w-[30%]">$ {transaction.amount}</span>
          </div>

          <button
            onClick={() => {
              deleteTransaction(transaction.id);
            }}
            className="bg-red-800 w-10 rounded-lg"
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}

export default TransactionList;
