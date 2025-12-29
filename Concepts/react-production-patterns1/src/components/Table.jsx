import { useEffect, useState } from "react";


const Table = ({ data, headers, renderRow }) => {
  const [searchTerm, setSearchTerm ] = useState("");

  const filteredData = data.filter((item) => 
    item.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()));
  return (
    <>
      <div className="max-w-6xl bg-gray-50 border-slate-100 border p-4 mx-auto">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search by student name..."
            className="w-full md:w-1/3 p-2 border border-slate-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <table className="w-full border border-collapse border-slate-300">
          {/* Search Input */}

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

            {filteredData.length > 0 ? (
              filteredData.map((row) => <tr key={row.id}>{renderRow(row)}</tr>)
            ) : (
              <>No Data Found </>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;