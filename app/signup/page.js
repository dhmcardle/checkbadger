"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase";
import slugify from "slugify";

export default function Signup() {
  const [form, setForm] = useState({
    company_name: "",
    owner_name: "",
    city: "",
    state: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [successUrl, setSuccessUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const slug = slugify(
        `${form.company_name}-${form.city}-${Date.now()}`,
        { lower: true, }
    );

    const { error } = await supabase.from("contractors").insert([
      {
        ...form,
        slug,
        monitoring_status: "pending",
      },
    ]);

    setLoading(false);

    if (error) {
      console.error(error);
      alert(error.message);
    } else {
      setSuccessUrl(`/contractor/${slug}`);
    }
  };

  return (
    <main className="max-w-xl mx-auto px-6 py-20">

      <h1 className="text-3xl font-bold">Get Verified</h1>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4">

        <input
          placeholder="Company Legal Name (as registered)"
          className="w-full border p-3 rounded-lg"
          onChange={(e) => setForm({ ...form, company_name: e.target.value })}
        />

        <input
          placeholder="Owner Name"
          className="w-full border p-3 rounded-lg"
          onChange={(e) => setForm({ ...form, owner_name: e.target.value })}
        />

        <input
          placeholder="City"
          className="w-full border p-3 rounded-lg"
          onChange={(e) => setForm({ ...form, city: e.target.value })}
        />

        <input
          placeholder="State"
          className="w-full border p-3 rounded-lg"
          onChange={(e) => setForm({ ...form, state: e.target.value })}
        />

        <input
          placeholder="Email Address"
          className="w-full border p-3 rounded-lg"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          placeholder="Phone"
          className="w-full border p-3 rounded-lg"
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />

        <button className="bg-brand text-white px-6 py-3 rounded-lg">
          {loading ? "Saving..." : "Create Profile"}
        </button>

      </form>

      {successUrl && (
        <div className="mt-6 p-4 border rounded-lg bg-green-50">
          <p>Your profile is live:</p>
          <a href={successUrl} className="text-blue-600 underline">
            {successUrl}
          </a>
        </div>
      )}

    </main>
  );
}