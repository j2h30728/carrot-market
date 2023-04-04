import { useState } from "react";

interface UseMutationState<T> {
  loading: boolean;
  data?: T;
  error?: object;
}
type UseMutationResult<T> = [(data: any) => void, UseMutationState<T>];

export default function useMutation<T = any>(
  url: string
): UseMutationResult<T> {
  const [state, setState] = useState<UseMutationState<T>>({
    loading: false,
    data: undefined,
    error: undefined,
  });

  async function mutation(data: any) {
    setState(prev => ({ ...prev, loading: true }));
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      console.log(json);
      setState(prev => ({ ...prev, data: json }));
      setState(prev => ({ ...prev, loading: false }));
    } catch (error) {
      if (typeof error === "object" && error !== null) {
        console.log(error);
        setState(prev => ({ ...prev, error: error as Error }));
      } else {
        console.log(error);
        setState(prev => ({ ...prev, error: new Error(String(error)) }));
      }
    }
  }
  return [mutation, { ...state }];
}
