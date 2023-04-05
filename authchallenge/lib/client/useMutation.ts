import { useState } from "react";

interface UseMutationState<T> {
  loading: boolean;
  data?: T;
  error?: unknown;
}
type UseMutationResult<T> = [(data: any) => void, UseMutationState<T>];

export default function useMutation<T>(url: string): UseMutationResult<T> {
  const [state, setState] = useState<UseMutationState<T>>({
    loading: false,
    data: undefined,
    error: undefined,
  });

  function mutation(data: T) {
    setState(prev => ({ ...prev, loading: true }));
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(response => response.json().catch(() => {}))
      .then(data => setState(prev => ({ ...prev, data, loading: false })))
      .catch(error => setState(prev => ({ ...prev, error, loading: false })));
  }

  return [mutation, { ...state }];
}
