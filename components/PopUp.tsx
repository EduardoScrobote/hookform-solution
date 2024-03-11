import { useState } from "react";
import GenericInput from "./GenericInput";

import { useForm } from "react-hook-form";

function PopUp() {
  const [cpf, setCpf] = useState<string>("");
  const [cns, setCns] = useState<string>("");
  const [cnsError, setCnsError] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = handleSubmit((data) => console.log(data));

  const validadeCpf = () => {
    setCpf(cpfMask(cpf));
  };

  function cpfMask(v: string) {
    v = v.replace(/\D/g, ""); //Remove tudo o que não é dígito
    v = v.replace(/(\d{3})(\d)/, "$1.$2"); //Coloca um ponto entre o terceiro e o quarto dígitos
    v = v.replace(/(\d{3})(\d)/, "$1.$2"); //Coloca um ponto entre o terceiro e o quarto dígitos
    //de novo (para o segundo bloco de números)
    v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2"); //Coloca um hífen entre o terceiro e o quarto dígitos
    return v;
  }

  function validateCns(s: string) {
    if (s.match(/[1-2]\d{10}00[0-1]\d/) || s.match(/[7-9]\d{14}/)) {
      return cnsMask(s) % 11 === 0;
    }
    return false;
  }

  function cnsMask(s: string) {
    const cs = s.split("");
    let soma = 0;
    for (let i = 0; i < cs.length; i++) {
      soma += parseInt(cs[i], 10) * (15 - i);
    }
    return soma;
  }

  const handleCnsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setCns(newValue);
    if (!validateCns(newValue)) {
      setCnsError("CNS inválido");
    } else {
      setCnsError("");
    }
  };

  return (
    <div className="w-[44rem] p-8 h-[48rem] transition-transform ease-in-out duration-200 rounded-xl bg-slate-300 border-black border shadow-md flex-col shadow-black absolute flex place-self-center">
      <div className="mb-8">
        <h1 className="text-lg font-bold">Registrar Profissional</h1>
      </div>
      <form onSubmit={onSubmit}>
        <div className="w-full mt-8 flex justify-between">
          <input
            className="p-2 rounded-md outline-none focus:border focus:border-blue-400 duration-75 ease-in-out"
            {...register("Nome")}
            id="Nome"
            placeholder="Nome"
          />
          <input
            className="p-2 rounded-md outline-none focus:border focus:border-blue-400 duration-75 ease-in-out"
            {...register("CPF")}
            id="CPF"
            placeholder="CPF"
            maxLength={14}
            value={cpf}
            onChange={(e) => {
              const newValue = cpfMask(e.target.value);
              setCpf(newValue);
            }}
          />
        </div>
        <div className="p-2 rounded-md outline-none focus:border focus:border-blue-400 duration-75 mt-8 flex ease-in-out">
          <input
            className="p-2 rounded-md outline-none focus:border focus:border-blue-400 duration-75 ease-in-out"
            {...register("CNS")}
            id="CNS"
            placeholder="CNS"
            value={cns}
            onChange={handleCnsChange}
          />
          {cnsError && (
            <span className="text-red-500 flex justify-center items-center">
              {cnsError}
            </span>
          )}
        </div>
        <div className="w-full mt-8 flex justify-center">
          <button
            type="submit"
            className="p-2 w-64 mt-4 rounded-md text-white bg-blue-600 hover:bg-blue-700 hover:cursor-pointer hover:scale-110 duration-300"
          >
            Adicionar
          </button>
        </div>
      </form>
    </div>
  );
}

export default PopUp;
