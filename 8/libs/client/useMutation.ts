import { useState } from "react";

interface UseMutationState {
  loading: boolean;
  data?: object;
  error?: object;
}
type UseMutationResult = [(data: any) => void, UseMutationState];

export default function useMutation(url: string): UseMutationResult {
  const [loading, setLoading] = useState(false);
  const [data, setSetdata] = useState<undefined | any>();
  const [error, setError] = useState<undefined | any>();
  function mutation(data: any) {}
  return [mutation, { loading, data, error }];
}
