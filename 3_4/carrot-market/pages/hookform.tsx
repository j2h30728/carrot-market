import { useState } from "react";
import { FieldErrors, useForm } from "react-hook-form";
interface LoginForm {
  username: string;
  password: string;
  email: string;
}
export default function Forms() {
  const { register, handleSubmit } = useForm<LoginForm>();
  const onValid = () => {
    console.log("im valid body");
  };
  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };
  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
      <input
        {...register("username", {
          required: "Username is required",
          minLength: {
            message: "The username shuld be longer then 6 chars",
            value: 5,
          },
        })}
        type="text"
        placeholder="Username"
      />
      <input
        {...register("email", { required: "Email is required" })}
        type="email"
        placeholder="Email"
      />
      <input
        {...register("password", { required: "password is reqruied" })}
        type="password"
        placeholder="Password"
      />
      <input type="submit" value="제출" />
    </form>
  );
}
