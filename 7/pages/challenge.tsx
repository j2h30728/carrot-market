import { useState } from "react";
import { useForm } from "react-hook-form";

interface LoginForm {
  name: string;
  email: string;
  password: string;
}

export default function Form() {
  //대문자여야지 에러안남...
  //React Hook "useState"는 React 함수 구성 요소도 아니고 사용자 지정 React Hook 함수도 아닌 함수 "form"에서 호출됩니다.
  // React 구성 요소 이름은 대문자로 시작해야 합니다. React Hook 이름은 "use"라는 단어로 시작해야 합니다.
  const [isSubmit, setIsSubmit] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<LoginForm>({ mode: "onChange" });
  const onValid = (loginData: LoginForm) => {
    setIsSubmit(true);
    console.log(loginData);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onValid)}>
        <div>
          <label htmlFor="name">Name : </label>
          <input
            {...register("name", { required: "Please write down your name" })}
            id="name"
          />
          <span>{errors.name?.message}</span>
        </div>
        <div>
          <label htmlFor="email">Email : </label>
          <input
            {...register("email", {
              required: "Please write down your email",
              validate: {
                onlyNaver: value =>
                  value.includes("@naver.com") || "Only @naver emails allowed.",
              },
            })}
            id="email"
            placeholder="Only @naver.com"
          />
          <span>{errors.email?.message}</span>
        </div>
        <div>
          <label htmlFor="password">Password : </label>
          <input
            {...register("password", {
              required: "Please write down your password",
              minLength: {
                message: "Password has to be more then 10 chars",
                value: 10,
              },
            })}
            id="password"
            placeholder="Min 10 charaters"
          />
          <span>{errors.password?.message}</span>
        </div>

        <input type="submit" value="Log in" />
      </form>
      <span>{isSubmit ? "Thank you" : ""}</span>
    </>
  );
}
