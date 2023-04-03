import { useForm } from "react-hook-form";
import ErrorMsg from "./components/errorMessage";
import Radio from "./components/radio";

interface Form {
  work: string;
  company: string;
  introduce: string;
  dreams: string;
  email: string;
}

export default () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>();
  const onValid = (data: Form) => {};
  const arrWork = [
    ["sales", "Sales"],
    ["marketing", "Marketing"],
    ["accounting", "Accounting"],
    ["CS", "Customer Service"],
  ];
  console.log(errors);

  return (
    <div className=" flex h-screen w-full items-center justify-center bg-[#50586C]">
      <div className=" rounded-2xl border-2 border-b-8 border-r-8 border-black bg-[#DCE2F0] px-8">
        {/* title */}
        <div className="my-8 text-center text-xl font-bold">
          Job Application Form
        </div>

        {/* form */}
        <form onSubmit={handleSubmit(onValid)} className="flex flex-col ">
          {/* work */}
          <span className="my-1  text-xs font-semibold">
            What department do you want to work for?
          </span>
          <span className="mb-2 text-xs font-semibold text-red-700">
            {errors.work?.message}
          </span>

          {errors.work?.message && <ErrorMsg errorMsg={errors.work?.message} />}

          {arrWork.map((v, i) => (
            <Radio
              key={i}
              register={register("work", {
                required: true,
              })}
              type="radio"
              id={v[0]}
              value={v[0]}
              text={v[1]}
            />
          ))}
          {/* why comp */}
          <span className="my-1  text-xs font-semibold">
            Why do you want to join this company?
          </span>
          <span className="mb-2 text-xs font-semibold text-red-700">
            {errors.company?.message}
          </span>
          <label className="my-1 flex px-1 text-xs " htmlFor="money">
            <input
              {...register("company", { required: "*required" })}
              type="radio"
              value="money"
              id="money"
              className="mr-1"
            />
            I want money!
          </label>
          <label className="my-1 flex px-1 text-xs " htmlFor="love">
            <input
              {...register("company", { required: "*required" })}
              type="radio"
              value="love"
              id="love"
              className="mr-1"
            />
            I love this company
          </label>
          <label className="my-1 flex px-1 text-xs " htmlFor="learn">
            <input
              {...register("company", { required: "*required" })}
              type="radio"
              value="learn"
              id="learn"
              className="mr-1"
            />
            I want to learn
          </label>
          <label className="my-1 mb-1 flex px-1 text-xs" htmlFor="donNotKnow">
            <input
              {...register("company", { required: "*required" })}
              type="radio"
              value="donNotKnow"
              id="donNotKnow"
              className="mr-1"
            />
            I don`t know why
          </label>
          {/* salary */}
          <span className="my-2 text-xs font-semibold">Salary</span>
          <select
            className="rounded-md border-2 border-black px-1 text-xs"
            name="salary"
            id="salary">
            <option value="50">$50K</option>
            <option value="100">$100K</option>
            <option value="150">$150K</option>
            <option value="200">$200K</option>
          </select>
          {/* introduce */}
          <span className="mb-1 mt-2 text-xs font-semibold">
            Introduce yourself
          </span>
          <input
            {...register("introduce", {
              required: "Please write down your introduction.",
            })}
            className={`rounded-md border-2 border-black px-2 text-xs ${
              errors.introduce ? "outline-red-700" : "null"
            } `}
            type="text"
          />
          <span className="mb-2 text-xs font-semibold text-red-700">
            {errors.introduce?.message}
          </span>
          {/* dreams */}
          <span className="mb-1 mt-2 text-xs font-semibold">
            Tell us what your dreams are
          </span>
          <textarea
            {...register("dreams", {
              required: "Please tell us what your dreams are.",
              minLength: {
                message: "Please write more than 10 characters.",
                value: 10,
              },
            })}
            className={`rounded-md border-2 border-black px-2 text-xs ${
              errors.dreams ? "outline-red-700" : "null"
            } `}
          />
          <span className="mb-2 text-xs font-semibold text-red-700">
            {errors.dreams?.message}
          </span>
          {/* email */}
          <span className="mb-1 mt-2 text-xs font-semibold">Email</span>
          <input
            {...register("email", {
              required: "Please write down your email.",
              validate: {
                mustNaver: value =>
                  value.includes("@naver.com") || "Only @naver is allowed.",
              },
            })}
            className={`rounded-md border-2 border-black px-2 text-xs ${
              errors.email ? "outline-red-700" : "null"
            } `}
            type="email"
          />
          <span className="mb-2 text-xs font-semibold text-red-700">
            {errors.email?.message}
          </span>
          {/* submit */}
          <input
            className="my-4 cursor-pointer rounded-md border-2 border-b-4 border-r-4 border-black bg-[#FBD34C] py-2 text-xs font-semibold"
            type="submit"
            value="Give me this job"
          />
        </form>
      </div>
    </div>
  );
};
