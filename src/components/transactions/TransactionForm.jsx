import { useState } from "react";
import { useGlobalState } from "../../context/GlobalState";

function TransactionForm() {
  const { addTransaction } = useGlobalState();
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      id: window.crypto.randomUUID(),
      description,
      amount: +amount,
    });
    setAmount(0.0);
    setDescription("");
  };

  return (
    <div className="w-[48%] max-md:w-[100%]">
      <form
        onSubmit={onSubmit}
        className="flex flex-col text-center gap-5 p-8 border-2 border-slate-950 rounded-lg"
      >
        <h3 className="text-xl font-semibold">Add Transaction</h3>
        <input
          type="text"
          placeholder="Enter a Description"
          onChange={(e) => setDescription(e.target.value)}
          className="h-[30px] rounded text-center outline-none text-slate-900 "
          value={description}
        />
        <input
          type="number"
          step="0.01"
          placeholder="00.00"
          onChange={(e) => setAmount(e.target.value)}
          className=" h-[30px] rounded text-center outline-none text-slate-900"
          value={amount}
        />
        <button className="h-[30px] bg-indigo-500 rounded-md">SAVE</button>
      </form>
    </div>
  );
}

export default TransactionForm;
