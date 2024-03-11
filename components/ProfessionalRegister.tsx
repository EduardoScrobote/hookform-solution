"use client";
import { useState } from "react";
import GenericInput from "./GenericInput";
import PopUp from "./PopUp";

function ProfessionalRegister() {
  const [popUp, setPopUp] = useState<boolean>(false);

  return (
    <div className="w-full p-4 flex flex-col bg-slate-200 rounded-md">
      {popUp ? <PopUp /> : null}
      <div className="w-full flex pr-4 pl-2 justify-between">
        <GenericInput id="Procurar" />
        <button
          onClick={() => setPopUp(!popUp)}
          className="p-2 w-32 rounded-md text-white bg-blue-600 hover:bg-blue-700 hover:cursor-pointer hover:scale-110 duration-300"
        >
          Adicionar
        </button>
      </div>
    </div>
  );
}

export default ProfessionalRegister;
