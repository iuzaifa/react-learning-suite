import WelcomeMessage from "./components/WelcomeMessage.jsx";
// import ProfileCardData from "./components/ProfileCardData.jsx";
// import {data} from "./lib/data.js";
import Table from "./components/Table.jsx";
import { tableData, tableHeader } from "./lib/data.js";


function App() {



  const renderStudentRow = (row) => (
    <>
      <td className="text-xs border p-1.5">{row.id}</td>
      <td className="text-xs border p-1.5">{row.name}</td>
      <td className="text-xs border p-1.5">{row.studentId}</td>
      <td className="text-xs border p-1.5">{row.email}</td>
      <td className="text-xs border p-1.5">{row.address}</td>
      <td className="text-xs border p-1.5">{row.class}</td>
      <td className="text-xs border p-1.5">{row.subjects.join(", ")}</td>
      <td className="text-xs border p-1.5">
        <button className="text-blue-600">Edit</button>
      </td>
    </>
  );



    return (
      <>
        <WelcomeMessage />
        {/*<ProfileCard/>*/}
        {/*<ProfileCardProps name={`Abu Huzaifa`}  email={`example@gmail.com`} />*/}
        {/* <ProfileCardData data={data}/> */}
        {/* <Table data={tableData} headers={tableHeader} /> */}

        <div className="p-2 border-4 ">Professinal </div>

        <Table
          data={tableData}
          headers={tableHeader}
          renderRow={renderStudentRow}
        />
      </>
    );
}

export default App
