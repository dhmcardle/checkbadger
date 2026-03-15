export default function Homeowners() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">

      <h1 className="text-4xl font-bold">Homeowner Resources</h1>

      <p className="mt-6 text-lg text-slate-600">
        CheckBadger provides homeowners information that may help them
        understand questions to ask before hiring a contractor.
      </p>

      <div className="mt-12 space-y-8">

        <div>
          <h3 className="text-xl font-semibold">
            Ask for proof of insurance
          </h3>

          <p className="text-slate-600 mt-2">
            Homeowners often request confirmation that their property is
            listed on a contractor’s insurance policy before work begins.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">
            Understand roofing materials
          </h3>

          <p className="text-slate-600 mt-2">
            Roofing materials vary in grade and warranty length. Understanding
            these differences can help when reviewing estimates.
          </p>
        </div>

      </div>

    </div>
  )
}