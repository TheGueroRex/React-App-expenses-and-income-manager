import { useGlobalState } from "../context/GlobalState";
import arrowdownicon from '../assets/arrowdown.svg'
import arrowupicon from '../assets/arrowup.svg'

function IncomeExpenses() {
  const { transactions } = useGlobalState();

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense =
    amounts
      .filter((item) => item < 0)
      .reduce((acc, item) => (acc += item), 0)
      .toFixed(2) * -1;

  return (
    <div className="flex justify-between w-full h-20">
      <div className="w-[48%] bg-green-500 border-2 border-green-700 rounded-lg flex justify-center items-center gap-5 max-[440px]:gap-2">
       <div>
        <img src={arrowupicon} alt="" />
       </div>

        <div>
          <h4>Income</h4>
          <p>$ {income}</p>
        </div>
      </div>
      <div className="w-[48%] bg-red-500 border-2 border-red-700 rounded-lg flex justify-center items-center gap-5 max-[440px]:gap-2">
        <div className="">
          <img src={arrowdownicon} alt="" />
        </div>
        <div>
          <h4>Expense</h4>
          <p>$ {expense}</p>
        </div>
      </div>
    </div>
  );
}

export default IncomeExpenses;
