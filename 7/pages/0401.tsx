import { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "./components/input";

const errorMsgStyle = `text-red-500 text-sm font-semibold`;
const workRadioInput = [
  { value: "sales", text: "Sales" },
  { value: "marketing", text: "Marketing" },
  { value: "accounting", text: "Accounting" },
  { value: "customerServies", text: "Customer" },
];
const wantedReadioInput = [
  { value: "money", text: "I want money!" },
  { value: "company", text: "I love this company" },
  { value: "learn", text: "I want to learn" },
  { value: "dontknow", text: "I dont know why" },
];
interface SubmitData {
  work: string;
  wanted: string;
  salary: string;
  introduce: string;
  dreams: string;
  email: string;
}

export default function Form() {
  const [result, setResult] = useState<SubmitData>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubmitData>({
    mode: "onChange",
  });
  const onValid = (submitData: SubmitData) => {
    setResult(submitData);
    console.log(submitData);
  };
  return (
    <div className="flex flex-col bg-red-100 border border-solid w-4/6 mx-auto my-5 rounded-xl p-6 border-r-8 border-l-4 border-t-4 border-b-8 border-black">
      <h1 className="mx-auto my-5 font-bold text-2xl ">Job Application Form</h1>
      <form
        onSubmit={handleSubmit(onValid)}
        className="font-medium p-4 space-y-7 flex flex-col">
        <div className="flex flex-col space-y-1">
          <p>
            What department do your want to work for?
            <span className={errorMsgStyle}>{errors.work?.message}</span>
          </p>
          {workRadioInput.map((x, idx) => (
            <Input
              key={x.value + idx}
              className="flex space-x-2 items-center"
              type="radio"
              value={x.value}
              text={x.text}
              register={register("work", { required: "*required" })}
            />
          ))}
        </div>
        <div>
          <p>
            Why do you want do join this company?
            <span className={errorMsgStyle}>{errors.wanted?.message}</span>
          </p>
          {wantedReadioInput.map((x, idx) => (
            <Input
              key={x.value + idx}
              className="flex space-x-2 items-center"
              type="radio"
              value={x.value}
              text={x.text}
              register={register("wanted", { required: "*required" })}
            />
          ))}
        </div>
        <div className="flex flex-col">
          <label htmlFor="salary">Salary</label>
          <select
            className="rounded-lg border-solid border-2 border-black"
            id="salary"
            {...register("salary", { required: true })}>
            <option value="50K">$50K</option>
            <option value="100K">$100K</option>
            <option value="150K">$150K</option>
            <option value="200K">$200K</option>
          </select>
        </div>
        <Input
          value="introduce"
          type="text"
          text="Inntroduce yourself"
          register={register("introduce", {
            required: "Please write down your introduction.",
          })}
          className={`rounded-lg border-solid border-2  ${
            errors.introduce ? "border-red-500" : "border-black"
          }`}
          errorMsg={errors.introduce?.message}
        />
        <Input
          value="dreams"
          type="textarea"
          text="Tell us what your dreams are"
          register={register("dreams", {
            required: "Please tell us what your dreams are.",
            minLength: {
              message: "Please write more than 10 characters",
              value: 10,
            },
          })}
          className={`rounded-lg border-solid border-2  ${
            errors.dreams ? "border-red-500" : "border-black"
          }`}
          errorMsg={errors.dreams?.message}
        />
        <Input
          value="email"
          type="email"
          text="Email"
          register={register("email", {
            required: "Please write down your email.",
            validate: {
              onlyNaver: value =>
                value.includes("@naver.com") || "Only @naver is allowed.",
            },
          })}
          className={`rounded-lg border-solid border-2  ${
            errors.email ? "border-red-500" : "border-black"
          }`}
          errorMsg={errors.email?.message}
        />
        <input
          type="submit"
          value="Give me this job"
          className="bg-yellow-200 rounded-lg py-2 border-solid border-r-4 border-l-2 border-t-2 border-b-4 border-black"
        />
      </form>
      <p className="break-all p-5">{JSON.stringify(result)}</p>
    </div>
  );
}
