type InputProp = {
  id: string;
  register: any;
};

function GenericInput({ id, register }: InputProp) {
  return (
    <div>
      <input
        type="text"
        placeholder={`${id}`}
        className="p-2 rounded-md outline-none focus:border focus:border-blue-400 duration-75 ease-in-out"
      />
    </div>
  );
}

export default GenericInput;
