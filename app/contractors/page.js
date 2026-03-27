export default function ContractorsPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">

      <h1 className="text-4xl font-bold text-brand">
        Get Verified. Build Trust. Win More Jobs.
      </h1>

      <p className="mt-6 text-lg text-slate-600 max-w-2xl">
        CheckBadger gives your customers confidence before the job begins. 
        Show proof of insurance, identity, and credibility with a simple scan.
      </p>

      <div className="mt-10 grid md:grid-cols-3 gap-6">

        <div className="p-6 border rounded-xl">
          <h3 className="font-semibold">Win More Deals</h3>
          <p className="text-sm text-slate-500 mt-2">
            Remove hesitation by showing verified credentials instantly.
          </p>
        </div>

        <div className="p-6 border rounded-xl">
          <h3 className="font-semibold">Stand Out</h3>
          <p className="text-sm text-slate-500 mt-2">
            Differentiate from uninsured or unverified competitors.
          </p>
        </div>

        <div className="p-6 border rounded-xl">
          <h3 className="font-semibold">Simple QR Access</h3>
          <p className="text-sm text-slate-500 mt-2">
            Put your verification page on trucks, cards, and estimates.
          </p>
        </div>

      </div>

      <div className="mt-12">
        <a
          href="/signup"
          className="bg-brand text-white px-8 py-4 rounded-xl shadow-lg"
        >
          Get Verified
        </a>
      </div>

    </main>
  );
}