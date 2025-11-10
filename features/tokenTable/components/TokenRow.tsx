import { Token } from "@/types/token";
import TokenPopover from "./TokenPopover";
export default function TokenRow({ token }: { token: Token }) {
  return (
    <tr className='border-b border-gray-800 hover:bg-gray-800 transition'>
      <td className='p-3 flex items-center gap-2'><TokenPopover token={token} /><span>{token.name}</span></td>
      <td className='p-3'>${token.price.toFixed(2)}</td>
      <td className={token.change >= 0 ? "p-3 text-green-400" : "p-3 text-red-400"}>{token.change.toFixed(2)}%</td>
      <td className='p-3'>{token.volume}</td>
    </tr>
  );
}