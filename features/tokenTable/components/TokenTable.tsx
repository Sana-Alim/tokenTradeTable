"use client";
import { useTokenData } from "../hooks/useTokenData";
import { usePriceUpdates } from "../hooks/usePriceUpdates";
import TokenRow from "./TokenRow";
import TokenSkeleton from "./TokenSkeleton";
export default function TokenTable() {
  const { data, isLoading, isError } = useTokenData();
  usePriceUpdates();
  if (isLoading) return <TokenSkeleton />;
  if (isError) return <p className='text-red-500'>Error loading tokens.</p>;
  return (
    <div className='overflow-x-auto'>
      <table className='min-w-full border border-gray-800 rounded-xl'>
        <thead className='bg-gray-900'>
          <tr><th className='p-3 text-left'>Token</th><th className='p-3 text-left'>Price</th><th className='p-3 text-left'>Change</th><th className='p-3 text-left'>Volume</th></tr>
        </thead>
        <tbody>{data?.map((t) => <TokenRow key={t.id} token={t} />)}</tbody>
      </table>
    </div>
  );
}