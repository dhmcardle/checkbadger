export default function Home() {
  return (
    <div>

      {/* Hero Section */}

      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold text-slate-900 leading-tight">
            Verify contractor credentials
            <br/>
            before work begins.
          </h1>

          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
            CheckBadger helps homeowners confirm contractor insurance,
            licensing, and business information before signing a contract.
          </p>

          <div className="mt-10 flex justify-center gap-4">

            <a
              href="/homeowners"
              className="bg-black text-white px-6 py-3 rounded-lg"
            >
              For Homeowners
            </a>

            <a
              href="/contractors"
              className="border px-6 py-3 rounded-lg"
            >
              For Contractors
            </a>

          </div>
        </div>
      </section>

      {/* Trust Section */}

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">

          <div>
            <h3 className="text-xl font-semibold">Insurance Visibility</h3>
            <p className="mt-3 text-slate-600">
              Contractors can display proof of insurance documentation
              homeowners may request before work begins.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Independent Information</h3>
            <p className="mt-3 text-slate-600">
              CheckBadger is not a contractor marketplace and does not sell
              leads. The platform exists to provide transparency.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Educational Resources</h3>
            <p className="mt-3 text-slate-600">
              Homeowners can learn what to ask before hiring a contractor,
              including questions about insurance and materials.
            </p>
          </div>

        </div>
      </section>

    </div>
  )
}