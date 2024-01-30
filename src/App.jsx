import { GlobalProvider } from "./context/GlobalState";

import Header from "./components/Header";
import Balance from "./components/Balance";
import TransactionForm from "./components/transactions/TransactionForm";
import TransactionList from "./components/transactions/TransactionList";
import IncomeExpenses from "./components/IncomeExpenses";
import ExpenseChart from "./components/ExpenseChart";

function App() {
  return (
    <GlobalProvider>
      <div className="text-white bg-slate-950 pt-10 pb-10 max-[350px]:w-[350px]">
        <div className="w-full flex flex-col justify-center items-center gap-10">
          <div className="bg-indigo-500 w-[800px] rounded-xl max-lg:w-[90%]">
          <Header />
          </div>
          <div className="bg-gray-900 w-[800px] p-10 flex flex-col gap-10 rounded-xl max-lg:w-[90%]">
            <h2 className="w-full text-center text-2xl font-semibold">Expense Tracker</h2>
            <div className="flex justify-between max-md:flex-col">
              <div className="flex flex-col justify-center gap-3 w-[48%] max-md:w-[100%]">             
                  <IncomeExpenses />
                  <Balance />
              </div>
              <div className="w-[48%] flex justify-center max-md:w-[100%]">
                <ExpenseChart />
              </div>
            </div>
            <div className="w-full flex justify-between max-md:flex-col">
              <TransactionForm />
              <TransactionList />
            </div>
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
