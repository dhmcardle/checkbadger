export default function Home() {
  return (
    <main style={{maxWidth:900, margin:"auto", padding:40, fontFamily:"Arial"}}>

      <h1>CheckBadger</h1>

      <p>
      Find roofing contractors you can trust.
      CheckBadger verifies identity, insurance, and legitimacy
      so homeowners can hire with confidence.
      </p>

      <div style={{marginTop:30}}>
        <a href="/directory">Find Contractors</a>
        {" | "}
        <a href="/apply">Get Verified</a>
      </div>

      <hr style={{margin:"40px 0"}}/>

      <h2>How It Works</h2>

      <ol>
        <li>Contractors apply for verification</li>
        <li>CheckBadger confirms insurance and legitimacy</li>
        <li>Homeowners hire with confidence</li>
      </ol>

    </main>
  )
}