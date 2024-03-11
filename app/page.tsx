import ProfessionalRegister from "@/components/ProfessionalRegister";
import ProfessionalTable from "@/components/ProfessionalTable";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-slate-100 p-4 h-screen">
      <div className="w-full flex h-14  p-4 items-center">
        <h1 className="text-2xl text-black font-bold">Profissionais</h1>
      </div>
      <ProfessionalRegister />
      <ProfessionalTable />
    </div>
  );
}
