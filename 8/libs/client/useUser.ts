import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then(res => res.json());
export default function useUser() {
  const { data, error } = useSWR("/api/users/me", fetcher);
  return data;
}
