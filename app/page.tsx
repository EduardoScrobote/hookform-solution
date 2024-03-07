import ProfessionalRegister from "@/components/ProfessionalRegister";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-screen">
      <div className="w-full flex h-64 justify-center items-center">
        <h1 className="text-2xl text-black font-bold">Profissionais</h1>
      </div>
      <ProfessionalRegister />
    </div>
  );
}
