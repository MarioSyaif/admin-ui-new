import { useEffect, useState, useContext } from "react";
import MainLayout from "../components/layouts/MainLayout";
import ExpensesComparison from "../components/fragments/ExpensesComparison";
import Loader from "../components/elements/Loader";
import { getExpenses } from "../services/expenseService";
import { AuthContext } from "../context/AuthContext";

function Expenses() {
  const { logout } = useContext(AuthContext);

  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const token = localStorage.getItem("token");
        const data = await getExpenses(token);

        console.log("DATA DARI API:", data);
        setExpenses(data);
      } catch (err) {
        console.error("Gagal mengambil expenses:", err);
        if (err.status === 401) logout();
      } finally {
        setLoading(false);
      }
    };

    fetchExpenses();
  }, []);

  return (
  <MainLayout>
    {loading ? <Loader /> : <ExpensesComparison data={expenses} />}
  </MainLayout>
);

}

export default Expenses;
