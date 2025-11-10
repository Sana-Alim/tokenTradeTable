import { useQuery } from "@tanstack/react-query";
import { fetchTokens } from "@/lib/api";
export function useTokenData() {
  return useQuery({ queryKey: ["tokens"], queryFn: fetchTokens, refetchInterval: 10000 });
}