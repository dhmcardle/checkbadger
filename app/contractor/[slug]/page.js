import { supabase } from "../../../lib/supabase";
import ContractorClient from "./ContractorClient";

export default async function ContractorPage({ params }) {
  const { slug } = await params;

  const { data } = await supabase
    .from("contractors")
    .select("*")
    .eq("slug", slug)
    .single();

  if (!data) {
    return <div className="p-10 text-center">Contractor not found</div>;
  }

  if (data.monitoring_status !== "active") {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-semibold text-slate-900">
          Contractor Pending Verification
        </h1>
        <p className="mt-2 text-slate-500">
          This contractor has submitted information and is currently under review.
        </p>
      </div>
    );
  }

  return <ContractorClient data={data} />;
}