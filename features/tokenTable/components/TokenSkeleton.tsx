export default function TokenSkeleton() {
  return (
    <div className='animate-pulse space-y-2'>
      {Array.from({ length: 5 }).map((_, i) => <div key={i} className='h-6 bg-gray-800 rounded-md' />)}
    </div>
  );
}