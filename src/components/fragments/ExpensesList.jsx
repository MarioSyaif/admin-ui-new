import { useEffect, useState, useContext } from "react";
import { getExpenses } from "../../services/expenseService";
import Loader from "../elements/Loader";
import { AuthContext } from "../../context/AuthContext";

function ExpensesList() {
  const { token, logout } = useContext(AuthContext);

  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchExpenses() {
      try {
        const data = await getExpenses(token);
        setExpenses(data);
      } catch (err) {
        console.error(err);
        if (err.status === 401) logout();
      } finally {
        setLoading(false);
      }
    }

    fetchExpenses();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="bg-white rounded-xl p-6 shadow">
      <h2 className="text-xl font-bold mb-4">Expenses</h2>

      <table className="w-full text-sm">
        <thead>
          <tr className="border-b">
            <th className="text-left py-2">Title</th>
            <th className="text-left py-2">Category</th>
            <th className="text-right py-2">Amount</th>
            <th className="text-left py-2">Date</th>
          </tr>
        </thead>

        <tbody>
          {expenses.map((item) => (
            <tr key={item.id} className="border-b">
              <td className="py-2">{item.title}</td>
              <td className="py-2">{item.category}</td>
              <td className="py-2 text-right">${item.amount}</td>
              <td className="py-2">{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExpensesList;
