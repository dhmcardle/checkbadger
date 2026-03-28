import { ShieldCheck, FileCheck, Eye } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-white via-slate-50 to-white">

      {/* HERO */}
      <section className="relative h-[600px] flex items-center">

        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/house.jpg"
            alt="Roofing background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent"></div>

        {/* Content */}
        <div className="relative max-w-6xl mx-auto px-6 w-full">

          <div className="max-w-2xl text-white">

            <h1 className="text-5xl font-bold leading-tight">
              Independent Verification
              <br />
              Roofers Can Show Homeowners
            </h1>

            <p className="mt-6 text-lg text-slate-200">
              Prove your business is legitimate and insured. Close jobs faster
              and stand out from storm chasers with independent verification.
            </p>

            <div className="mt-8 flex gap-4">

              <a
                href="/signup"
                className="bg-amber-500 text-black px-6 py-3 rounded-lg font-semibold shadow hover:bg-amber-400 transition"
              >
                Get Verified
              </a>

              <a
                href="/contractors"
                className="bg-white text-slate-900 px-6 py-3 rounded-lg font-medium shadow"
              >
                Search Contractors
              </a>

            </div>

          </div>

          {/* Floating Card */}
          <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden md:block">

            <div className="bg-white rounded-xl shadow-2xl p-6 w-[320px]">

              <h3 className="font-semibold text-slate-900">
                Contractor Status
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                DFW Roofing Co.
              </p>

              <div className="mt-4 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs inline-block">
                Verified & Active
              </div>

              <p className="mt-4 text-sm text-slate-600">
                $1M General Liability Coverage
              </p>

              <p className="text-xs text-slate-400 mt-4">
                Verified by CheckBadger
              </p>

            </div>

          </div>

        </div>

      </section>

      

      {/* PROBLEM */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <h2 className="text-2xl font-bold text-slate-900">
          Why homeowners hesitate to hire contractors
        </h2>

        <div className="mt-8 grid md:grid-cols-3 gap-6">

          {[
            {
              title: "Unverified Insurance",
              text: "Homeowners rarely know if coverage is active or valid.",
            },
            {
              title: "Unclear Accountability",
              text: "It’s often difficult to confirm who is responsible for the work.",
            },
            {
              title: "High Financial Risk",
              text: "Projects often require large upfront payments with little transparency.",
            },
          ].map((item, i) => (
            <div key={i} className="p-6 border rounded-xl bg-white shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-slate-500 mt-2">{item.text}</p>
            </div>
          ))}

        </div>

      </section>

      {/* SOLUTION */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <h2 className="text-2xl font-bold text-slate-900">
          A new standard for contractor trust
        </h2>

        <p className="mt-4 text-slate-600 max-w-2xl">
          CheckBadger gives contractors a clear way to prove legitimacy, and homeowners 
          a simple way to verify who they’re hiring — instantly, and without ambiguity.
        </p>

      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white border rounded-2xl p-8 shadow-lg hover:shadow-xl transition">

            <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
              <ShieldCheck className="text-green-600 w-6 h-6" />
            </div>

            <h3 className="mt-6 text-lg font-semibold text-slate-900">
              Independently Verified
            </h3>

            <p className="mt-3 text-sm text-slate-600">
              We review submitted contractor credentials before approval. No self-reported claims.
            </p>

          </div>

          <div className="bg-white border rounded-2xl p-8 shadow-lg hover:shadow-xl transition">

            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
              <FileCheck className="text-blue-600 w-6 h-6" />
            </div>

            <h3 className="mt-6 text-lg font-semibold text-slate-900">
              Insurance Transparency
            </h3>

            <p className="mt-3 text-sm text-slate-600">
              Homeowners can confirm coverage status before work begins — reducing risk and uncertainty.
            </p>

          </div>

          <div className="bg-white border rounded-2xl p-8 shadow-lg hover:shadow-xl transition">

            <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center">
              <Eye className="text-amber-600 w-6 h-6" />
            </div>

            <h3 className="mt-6 text-lg font-semibold text-slate-900">
              Visible Trust Signal
            </h3>

            <p className="mt-3 text-sm text-slate-600">
              Contractors share a QR code that proves legitimacy instantly at the job site.
            </p>

          </div>

        </div>

      </section>
      

      <section className="max-w-5xl mx-auto px-6 py-20">

        <div className="bg-white border rounded-2xl shadow-xl p-8">

          <h2 className="text-xl font-semibold text-slate-900">
            What verification includes
          </h2>

          <div className="mt-8 grid md:grid-cols-3 gap-6">

            <div>
              <h3 className="font-medium text-slate-900">Business Identity</h3>
              <ul className="mt-3 text-sm text-slate-600 space-y-2">
                <li>✔ Registered business name</li>
                <li>✔ Owner / responsible party</li>
                <li>✔ Years in business</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-slate-900">Insurance Verification</h3>
              <ul className="mt-3 text-sm text-slate-600 space-y-2">
                <li>✔ Active coverage status</li>
                <li>✔ Policy limits reviewed</li>
                <li>✔ Expiration tracking</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-slate-900">Ongoing Monitoring</h3>
              <ul className="mt-3 text-sm text-slate-600 space-y-2">
                <li>✔ Status updates</li>
                <li>✔ Renewal tracking</li>
                <li>✔ Visibility to homeowners</li>
              </ul>
            </div>

          </div>

        </div>

      </section>


      {/* FINAL CTA */}
      <section className="relative py-24 text-center text-slate-500">

        {/* gradient background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900"></div>

        <h2 className="text-3xl font-bold">
          Trust should be established before the first nail
        </h2>

        <p className="mt-4 text-slate-300">
          Join contractors who are setting a higher standard.
        </p>

        <a
          href="/signup"
          className="inline-block mt-8 bg-white text-slate-900 px-6 py-3 rounded-xl font-medium shadow hover:bg-slate-100 transition"
        >
          Get Verified
        </a>

      </section>

    </main>
  );
}