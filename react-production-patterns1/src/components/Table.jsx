

const Table = ({ data, headers, renderRow }) => {
  return (
    <>
      <div className="max-w-6xl bg-gray-50 border-slate-100 border p-4 mx-auto">
        <table className="w-full border border-collapse border-slate-300">
          <thead>
            <tr>
              {headers.map((col) => (
                <th
                  key={col.accessor}
                  className="border border-slate-500 bg-slate-300 py-2 font-semibold text-sm"
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {/* {data.map((item) => (
              <tr key={item.id}>
                <td className="text-xs border border-slate-500 p-1.5 text-center">
                  {item.id}
                </td>
                <td className="text-xs border border-slate-500 p-1.5">
                  {item.name}
                </td>
                <td className="text-xs border border-slate-500 p-1.5">
                  {item.studentId}
                </td>
                <td className="text-xs border border-slate-500 p-1.5">
                  {item.email}
                </td>
                <td className="text-xs border border-slate-500 p-1.5">
                  {item.address}
                </td>
                <td className="text-xs border border-slate-500 p-1.5">
                  {item.class}
                </td>
                <td className="text-xs border border-slate-500 p-1.5">
                  {item.subjects.join(", ")}
                </td>
                <td className="text-xs border border-slate-500 p-1.5">
                  <button className="bg-gray-300 text-slate-700 py-0.5 px-2 cursor-pointer rounded-sm font-semibold">
                    view
                  </button>
                </td>
              </tr>
            ))} */}

            {data.map((row) => (
              <tr key={row.id}>{renderRow(row)}</tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;