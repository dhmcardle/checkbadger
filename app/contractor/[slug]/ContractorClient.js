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
    <div className="max-w-3xl mx-auto px-6 py-20">

        <div className="bg-white border rounded-2xl shadow-xl p-8">

        <div className="flex items-center justify-between">

            <div>
            <h1 className="text-2xl font-bold text-slate-900">
                {data.company_name}
            </h1>

            <p className="text-sm text-slate-500 mt-1">
                {data.city}, {data.state}
            </p>
            </div>

            <div className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium">
            Verified & Active
            </div>

        </div>

        <div className="mt-8 border-t pt-6 space-y-3 text-sm">

            <p><strong>Owner:</strong> {data.owner_name}</p>
            <p><strong>Phone:</strong> {data.phone}</p>
            <p><strong>Email:</strong> {data.email}</p>

        </div>

        <div className="mt-8 border-t pt-6">

            <h3 className="font-semibold text-slate-900">
            Insurance Verification
            </h3>

            <p className="mt-2 text-sm text-slate-600">
            Coverage verified and actively monitored.
            </p>

        </div>

        <div className="mt-8 border-t pt-6 text-center">

            <div ref={qrRef} className="flex justify-center">
            <QRCodeCanvas value={url} size={160} />
            </div>

            <button
            onClick={handleDownload}
            className="mt-4 bg-slate-900 text-white px-4 py-2 rounded-lg text-sm"
            >
            Download QR Code
            </button>

        </div>

        </div>

    </div>
   );
}