import type { UseFormRegisterReturn } from "react-hook-form";

interface InterProps {
  type: string;
  id: string;
  value: string;
  text: string;
  register: UseFormRegisterReturn;
}

export default function Radio({ value, id, text, register, type }: InterProps) {
  return (
    <>
      <label className="my-1 flex px-1 text-xs " htmlFor={id}>
        <input
          {...register}
          type={type}
          value={value}
          id={id}
          className="mr-1"
        />
        {text}
      </label>
    </>
  );
}
