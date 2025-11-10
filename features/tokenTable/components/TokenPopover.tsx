"use client";
import * as Tooltip from "@radix-ui/react-tooltip";
import { Token } from "@/types/token";
export default function TokenPopover({ token }: { token: Token }) {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild><div className='cursor-pointer font-semibold'>{token.name}</div></Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content className='bg-gray-800 text-white p-2 rounded-md text-sm shadow-lg'>
            <p>{token.name}</p><p>Price: ${token.price.toFixed(2)}</p>
            <Tooltip.Arrow className='fill-gray-800' />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}