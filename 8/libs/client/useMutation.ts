import { useState } from "react";

interface UseMutationState {
  loading: boolean;
  data?: object;
  error?: object;
}
type UseMutationResult = [(data: any) => void, UseMutationState];

export default function useMutation(url: string): UseMutationResult {
  const [state, setState] = useState<UseMutationState>({
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
