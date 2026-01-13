import Icon from "./Icon";

function ExpenseCard({ icon, title, total, percent, trend, items }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <div className="bg-gray-100 p-2 rounded-lg">
            {icon}
          </div>
          <div>
            <div className="text-sm text-gray-500">{title}</div>
            <div className="font-bold text-lg">${total}</div>
          </div>
        </div>

        <div className={`flex items-center text-sm ${trend === "up" ? "text-red-500" : "text-green-500"}`}>
          {percent}%
          {trend === "up" ? <Icon.ArrowUp size={14} /> : <Icon.ArrowDown size={14} />}
        </div>
      </div>

      <div className="text-xs text-gray-400 mb-3">
        Compare to the last month
      </div>

      {/* Items */}
      <div className="space-y-2">
            {items?.map((item, index) => (
            <div
                key={index}
                className="flex justify-between text-sm border-t pt-2"
            >
                <div>{item.item}</div>
                <div className="text-right">
                <div className="font-semibold">${item.amount}</div>
                <div className="text-xs text-gray-400">{item.date}</div>
                </div>
            </div>
            ))}
      </div>
    </div>
  );
}

export default ExpenseCard;
