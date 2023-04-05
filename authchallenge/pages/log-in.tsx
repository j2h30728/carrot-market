import useMutation from "@/lib/client/useMutation";
import { ResponseType } from "@/lib/server/withHandler";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

interface AccountForm {
  name: string;
  email: string;
}

export default function login() {
  const router = useRouter();
  const [login, { loading, data }] =
    useMutation<ResponseType>("/api/users/logIn");

  const { register, handleSubmit, reset } = useForm<AccountForm>();

  const onValid = (validForm: AccountForm) => {
    console.log(validForm);
    reset();
    if (loading) return;
    login(validForm);
  };
  useEffect(() => {
    if (data) {
      if (data.ok) {
        alert(data?.text);
        router.replace("/");
      } else {
        alert(data?.text);
      }
    }
  }, [data]);
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onValid)}>
        <div>
          <label>Email:</label>
          <input {...register("email", { required: true })} type="email" />
        </div>
        <button>Login</button>
      </form>
    </>
  );
}
