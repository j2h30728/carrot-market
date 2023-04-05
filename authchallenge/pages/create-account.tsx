import useMutation from "@/lib/client/useMutation";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { ResponseType } from "@/lib/server/withHandler";
import Link from "next/link";

interface AccountForm {
  name: string;
  email: string;
}

export default function signUp() {
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm<AccountForm>();
  const [sigin, { loading, data }] =
    useMutation<ResponseType>("/api/users/signIn");

  const onValid = (validForm: AccountForm) => {
    console.log(validForm);
    reset();
    if (loading) return;
    sigin(validForm);
  };
  useEffect(() => {
    if (data) {
      if (data.ok) {
        alert(data?.text);
        router.replace("/log-in");
      } else {
        alert(data?.text);
      }
    }
  }, [data]);
  return (
    <>
      <h1>Create Account</h1>
      <form onSubmit={handleSubmit(onValid)}>
        <div>
          <label>Name:</label>
          <input {...register("name", { required: true })} type="text" />
        </div>
        <div>
          <label>Email:</label>
          <input {...register("email", { required: true })} type="email" />
        </div>
        <button>Create Account</button>
      </form>
      <Link href="log-in">
        <h4>LogIn</h4>
      </Link>
    </>
  );
}
