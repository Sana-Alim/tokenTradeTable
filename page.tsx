import TokenTable from "@/features/tokenTable/components/TokenTable";
export default function Page() {
  return (
    <main className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Token Discovery</h1>
      <TokenTable />
    </main>
  );
}