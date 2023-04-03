import type { UseFormRegisterReturn } from "react-hook-form";

interface inputProp {
  className: string;
  value: string;
  type: "radio" | "text" | "email" | "textarea";
  text: string;
  register: UseFormRegisterReturn;
  errorMsg?: string;
}
export default function Input({
  className,
  value,
  type,
  text,
  register,
  errorMsg,
}: inputProp) {
  return type === "radio" ? (
    <div className={className}>
      <input {...register} type={type} id={value} value={value} />
      <label htmlFor={value}>{text}</label>
    </div>
  ) : (
    <div className="flex flex-col">
      <label htmlFor={value}>{text}</label>
      {type === "textarea" ? (
        <textarea {...register} id={value} className={className} />
      ) : (
        <input {...register} type={type} id={value} className={className} />
      )}
      <p className="text-red-500 text-sm font-semibold">{errorMsg}</p>
    </div>
  );
}
