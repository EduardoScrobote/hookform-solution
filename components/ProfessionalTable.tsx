import { MdOutlineModeEdit } from "react-icons/md";

function ProfessionalTable() {
  return (
    <table className="w-full mt-8 text-sm text-left">
      <thead className="uppercase bg-slate-200">
        <tr>
          <th scope="col" className="px-6 py-3">
            Profissional
          </th>
          <th scope="col" className="px-6 py-3">
            CPF
          </th>
          <th scope="col" className="px-6 py-3">
            CNS
          </th>
          <th scope="col" className="px-6 py-3"></th>
        </tr>
      </thead>
      <tbody>
        <tr className="mt-8 w-full">
          <td className="border-b-2 mt-8 border-slate-300 p-4">
            ProfessionalName
          </td>
          <td className="border-b-2 border-slate-300 p-4">062.169.979-98</td>
          <td className="border-b-2 border-slate-300 p-4">062.169.979-98</td>
          <td className="border-b-2 border-slate-300 p-4">
            <MdOutlineModeEdit
              color="white"
              size={26}
              style={{
                backgroundColor: "green",
                padding: 4,
                borderRadius: "100%",
              }}
              className="hover:cursor-pointer hover:scale-110 duration-150"
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default ProfessionalTable;
