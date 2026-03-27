import { supabase } from "../../../lib/supabase";
import ContractorClient from "./ContractorClient";

export default async function ContractorPage({ params }) {
  const { slug } = await params;

  const { data } = await supabase
    .from("contractors")
    .select("*")
    .eq("slug", slug)
    .single();

  if (!data || data.monitoring_status !== "active") {
  return <div className="text-center py-20">Contractor not found</div>;
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <ContractorClient data={data} />
    </main>
  );
}