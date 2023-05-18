import { useGlobalState } from "../context/GlobalState";
import chartlogo from '../assets/chart.svg'

function Balance() {
  const { transactions } = useGlobalState();

  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div className="bg-indigo-500 border-2 border-indigo-700 w-full h-20 rounded-lg flex justify-center items-center gap-5">
      {/* {JSON.stringify(amounts, null, 2)} */}
      <div>
        <img src={chartlogo} alt="" />
      </div>
      <h3>Your Balance</h3>
      <h1>$ {total}</h1>
    </div>
  );
}

export default Balance;
