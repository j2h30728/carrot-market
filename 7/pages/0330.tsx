import { useState } from "react";
import { useForm } from "react-hook-form";

const errorMsg = `text-red-500 text-sm font-semibold`;

export default function Form() {
  interface SubmitData {
    work: string;
    wanted: string;
    salary: string;
    introduce: string;
    dreams: string;
    email: string;
  }
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
            <span className={errorMsg}>{errors.work?.message}</span>
          </p>
          <div className="flex space-x-2 items-center ">
            <input
              {...register("work", { required: "*required" })}
              type="radio"
              id="sales"
              value="sales"
            />
            <label htmlFor="sales">Sales</label>
          </div>
          <div className="flex space-x-2 items-center">
            <input
              {...register("work", { required: "*required" })}
              type="radio"
              id="marketing"
              value="marketing"
            />
            <label htmlFor="marketing">Marketing</label>
          </div>
          <div className="flex space-x-2 items-center">
            <input
              {...register("work", { required: "*required" })}
              type="radio"
              id="accounting"
              value="accounting"
            />
            <label htmlFor="accounting">Accounting</label>
          </div>
          <div className="flex space-x-2 items-center">
            <input
              {...register("work", { required: "*required" })}
              type="radio"
              id="customerServies"
              value="customerServies"
            />
            <label htmlFor="customerServies">Customer Servies</label>
          </div>
        </div>
        <div>
          <p>
            Why do you want do join this company?
            <span className={errorMsg}>{errors.wanted?.message}</span>
          </p>
          <div className="flex space-x-2 items-center space-y-1">
            <input
              {...register("wanted", { required: "*required" })}
              type="radio"
              id="money"
              value="money"
            />
            <label htmlFor="money">I want money!</label>
          </div>
          <div className="flex space-x-2 items-center">
            <input
              {...register("wanted", { required: "*required" })}
              type="radio"
              id="company"
              value="company"
            />
            <label htmlFor="company">I love this company</label>
          </div>
          <div className="flex space-x-2 items-center">
            <input
              {...register("wanted", { required: "*required" })}
              type="radio"
              id="learn"
              value="learn"
            />
            <label htmlFor="learn">I want to learn</label>
          </div>
          <div className="flex space-x-2 items-center">
            <input
              {...register("wanted", { required: "*required" })}
              type="radio"
              id="dontknow"
              value="dontknow"
            />
            <label htmlFor="dontknow">I dont know why</label>
          </div>
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
        <div className="flex flex-col ">
          <label htmlFor="introduce">Inntroduce yourself</label>
          <input
            {...register("introduce", {
              required: "Please write down your introduction.",
            })}
            type="text"
            id="introduce"
            className={`rounded-lg border-solid border-2  ${
              errors.introduce ? "border-red-500" : "border-black"
            }`}
          />
          <p className={errorMsg}>{errors.introduce?.message}</p>
        </div>
        <div className="flex flex-col">
          <label htmlFor="dreams">Tell us what your dreams are</label>
          <textarea
            {...register("dreams", {
              required: "Please tell us what your dreams are.",
              minLength: {
                message: "Please write more than 10 characters",
                value: 10,
              },
            })}
            id="dreams"
            className={`rounded-lg border-solid border-2 ${
              errors.dreams ? "border-red-500" : "border-black"
            }`}
          />
          <p className={errorMsg}>{errors.dreams?.message}</p>
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            {...register("email", {
              required: "Please write down your email.",
              validate: {
                onlyNaver: value =>
                  value.includes("@naver.com") || "Only @naver is allowed.",
              },
            })}
            type="email"
            id="email"
            className={`rounded-lg border-solid border-2  ${
              errors.email ? "border-red-500" : "border-black"
            }`}
          />
          <p className={errorMsg}>{errors.email?.message}</p>
        </div>
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
