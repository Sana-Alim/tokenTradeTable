import { Token } from "@/types/token";
export function mockWebSocket(onData: (data: Token[]) => void) {
  let tokens: Token[] = [
    { id: 1, name: "BTC", price: 67000, change: 0.5, volume: 2000 },
    { id: 2, name: "ETH", price: 3500, change: -0.2, volume: 1500 }
  ];
  const interval = setInterval(() => {
    tokens = tokens.map((t) => ({ ...t, price: t.price + (Math.random() - 0.5) * 50, change: (Math.random() - 0.5) * 2 }));
    onData(tokens);
  }, 2000);
  return { close: () => clearInterval(interval) };
}