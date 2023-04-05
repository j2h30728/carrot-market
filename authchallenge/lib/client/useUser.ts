import { useRouter } from "next/router";
import { useEffect } from "react";
import useSWR from "swr";

export default function useUser() {
  const router = useRouter();
  const { data, error } = useSWR("/api/users/me");
  useEffect(() => {
    console.log("test", data);
    if (data && !data.ok) router.replace("/create-account");
  }, [data, router]);

  return { user: data?.profile, isLoading: !data && !error };
}
