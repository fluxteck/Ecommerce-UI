import React from "react";

const OrdersTableSkeleton = () => {
  return (
    <div className="relative overflow-x-auto shadow dark:shadow-gray-800 rounded-md animate-pulse">
      <table className="w-full text-start">
        <thead className="text-sm uppercase bg-slate-50 dark:bg-slate-800">
          <tr>
            {["Order No.", "Date", "Status", "Total", "Payment Status", "Action"].map((heading, i) => (
              <th
                key={i}
                className="px-2 py-3 text-start"
                style={{ minWidth: "120px" }}
              >
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 5 }).map((_, i) => (
            <tr
              key={i}
              className="bg-white dark:bg-slate-900 border-b last:border-0"
            >
              <td className="px-2 py-3">
                <div className="h-4 w-20 bg-slate-200 dark:bg-slate-700 rounded"></div>
              </td>
              <td className="px-2 py-3">
                <div className="h-4 w-24 bg-slate-200 dark:bg-slate-700 rounded"></div>
              </td>
              <td className="px-2 py-3">
                <div className="h-4 w-20 bg-slate-200 dark:bg-slate-700 rounded"></div>
              </td>
              <td className="px-2 py-3">
                <div className="h-4 w-16 bg-slate-200 dark:bg-slate-700 rounded"></div>
              </td>
              <td className="px-2 py-3">
                <div className="h-4 w-28 bg-slate-200 dark:bg-slate-700 rounded"></div>
              </td>
              <td className="px-2 py-3">
                <div className="h-4 w-24 bg-slate-200 dark:bg-slate-700 rounded"></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTableSkeleton;
