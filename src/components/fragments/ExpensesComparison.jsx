import ExpenseCard from "../elements/ExpenseCard";
import Icon from "../elements/Icon";

function getCategoryIcon(category) {
  switch (category) {
    case "housing":
      return <Icon.House />;
    case "food":
      return <Icon.Food />;
    case "transportation":
      return <Icon.Transport />;
    case "entertainment":
      return <Icon.Gamepad />;
    case "shopping":
      return <Icon.Shopping />;
    default:
      return <Icon.Other />;
  }
}

function ExpensesComparison({ data }) {
  if (!data || data.length === 0) {
    return (
      <div>
        <h2 className="text-xl font-bold mb-6">Expenses Comparison</h2>
        <p className="text-gray-400">No expenses data found</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-6">Expenses Comparison</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.map((item, index) => (
            <ExpenseCard
                key={index}
                icon={getCategoryIcon(item.category)}
                title={item.category}
                total={item.amount}
                percent={item.percentage}
                trend={item.trend}
                items={item.detail}
            />
        ))}
      </div>
    </div>
  );
}
export default ExpensesComparison;