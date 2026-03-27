"use client";

import { QRCodeCanvas } from "qrcode.react";
import * as htmlToImage from "html-to-image";
import { useRef } from "react";

export default function ContractorClient({ data }) {
  const url = `https://checkbadger.vercel.app/contractor/${data.slug}`;
  const qrRef = useRef(null);

  const handleDownload = () => {
    if (!qrRef.current) return;

    htmlToImage.toPng(qrRef.current).then((dataUrl) => {
      const link = document.createElement("a");
      link.download = "checkbadger-qr.png";
      link.href = dataUrl;
      link.click();
    });
  };

  return (
    <div className="space-y-10">

      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold text-brand">
          {data.company_name}
        </h1>

        <div className="mt-2 text-sm text-slate-500">
          {data.city}, {data.state}
        </div>
      </div>

      {/* STATUS */}
      <div>
        {data.monitoring_status === "active" ? (
          <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium">
            Verified & Active
          </span>
        ) : (
          <span className="bg-yellow-100 text-yellow-700 px-4 py-1 rounded-full text-sm font-medium">
            Profile Created — Verification Pending
          </span>
        )}
      </div>

      {/* INFO */}
      <div className="border rounded-xl p-6 bg-white shadow-sm">
        <h2 className="font-semibold mb-4 text-lg">
          Contractor Information
        </h2>

        <div className="space-y-2 text-sm">
          <p><strong>Owner:</strong> {data.owner_name}</p>
          <p><strong>Phone:</strong> {data.phone}</p>
          <p><strong>Email:</strong> {data.email}</p>
        </div>
      </div>

      {/* INSURANCE */}
      <div className="border rounded-xl p-6 bg-white shadow-sm">
        <h2 className="font-semibold mb-4 text-lg">
          Insurance Status
        </h2>

        <p className="text-sm text-slate-600">
          Insurance documentation has not yet been verified.
        </p>

        <p className="text-xs text-slate-400 mt-4">
          Homeowners should request a Certificate of Insurance (COI) 
          and confirm they are listed on the policy.
        </p>
      </div>

      {/* QR */}
      <div className="text-center border rounded-xl p-6 bg-white shadow-sm">
        <h3 className="font-semibold mb-4">
          Share this verification page
        </h3>

        <div ref={qrRef} className="flex justify-center">
          <QRCodeCanvas value={url} size={160} />
        </div>

        <button
          onClick={handleDownload}
          className="mt-4 bg-brand text-white px-4 py-2 rounded-lg text-sm"
        >
          Download QR Code
        </button>

        <p className="mt-4 text-sm text-slate-500">
          Customers can scan to verify your status instantly.
        </p>
      </div>

      {/* HOW TO USE */}
      <div className="border rounded-xl p-6 bg-white shadow-sm">
        <h3 className="font-semibold text-lg mb-4">
          Use this to build trust with customers
        </h3>

        <ul className="text-sm text-slate-600 space-y-2">
          <li>• Add this QR code to your business cards</li>
          <li>• Place it on your truck or yard signs</li>
          <li>• Include it in estimates and invoices</li>
          <li>• Let homeowners verify you before work begins</li>
        </ul>
      </div>

      {/* DISCLAIMER */}
      <div className="text-xs text-slate-400 border-t pt-6">
        CheckBadger verifies submitted credentials but does not guarantee
        contractor performance or outcomes. Homeowners should independently verify all information.
      </div>

    </div>
  );
}