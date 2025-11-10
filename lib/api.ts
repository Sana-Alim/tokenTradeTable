import { Token } from "@/types/token";
export async function fetchTokens(): Promise<Token[]> {
  return [
    { id: 1, name: "BTC", price: 67000, change: 0.5, volume: 2000 },
    { id: 2, name: "ETH", price: 3500, change: -0.2, volume: 1500 }
  ];
}