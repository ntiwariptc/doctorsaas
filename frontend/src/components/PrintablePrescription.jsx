import React, { useRef } from "react";

const PrintablePrescription = ({ patient }) => {
  const printRef = useRef();

  const handlePrint = () => {
    if (!printRef.current) return;
    const printContents = printRef.current.innerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload();
  };

  if (!patient) return null;

  return (
    <div
      ref={printRef}
      className="p-6 max-w-5xl mx-auto bg-white border text-sm text-black"
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-6 print:text-blue-900 text-blue-900">
        {/* Left: Clinic Info */}
        <div className="text-left">
          <h1 className="text-4xl font-extrabold uppercase text-blue-900">
            Chitara Eye Foundation
          </h1>
          <p className="text-sm mt-1 text-blue-800">
            Tara Complex, Radha Rani Sinha Rd, Adampur, Bhagalpur, Bihar 812001
          </p>
          <p className="text-sm mt-1 text-blue-800">
            <strong className="font-semibold">GST No:</strong> 19AADCD4418M1ZE
          </p>
          <div className="text-sm mt-1 text-blue-800">
            📞 06412405673 | 📠 06412405673
          </div>
        </div>

        {/* Right: Doctor Info */}
        <div className="text-right text-sm text-blue-800">
          <p className="font-semibold">Dr. Sanjay Kumar Sharma</p>
          <p>MBBS, MS (Ophthalmology)</p>
          <p className="mt-2 font-semibold">Dr. Pranay Kumar</p>
          <p>MBBS, DNB (Ophthalmology)</p>
        </div>
      </div>

      <hr className="border-t-2 border-blue-500 mb-4" />

      {/* Patient Info Table */}
      <table className="w-full table-fixed border border-collapse mb-4">
        <tbody>
          <tr>
            <td className="border p-2 font-semibold w-1/8">Patient:</td>
            <td className="border p-2 w-1/4">{patient.name || "-"}</td>
            <td className="border p-2 font-semibold w-1/8">Age/Sex:</td>
            <td className="border p-2 w-1/4">{`${patient.age || "-"}/${
              patient.sex || "-"
            }`}</td>
            <td className="border p-2 font-semibold w-1/8">Contact:</td>
            <td className="border p-2 w-1/4">{patient.phone || "-"}</td>
            <td className="border p-2 font-semibold w-1/8">MR No.:</td>
            <td className="border p-2 w-1/4">{patient.mrno || "-"}</td>
          </tr>
          <tr>
            <td className="border p-2 font-semibold">Appt. Date:</td>
            <td className="border p-2">{patient.apptdate || "-"}</td>
            <td className="border p-2 font-semibold">Note Date:</td>
            <td className="border p-2 italic">{patient.notedate || "-"}</td>
          </tr>
        </tbody>
      </table>

      {/* Examination Section */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">ON EXAMINATION</h2>
        <table className="w-full table-fixed border border-collapse">
          <thead>
            <tr>
              <th className="border p-2 font-semibold w-1/6">Parameter</th>
              <th className="border p-2 font-semibold w-2/6">Right Eye (OD)</th>
              <th className="border p-2 font-semibold w-2/6">Left Eye (OS)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2 font-semibold">UVA:</td>
              <td className="border p-2">
                {patient.examination?.visualAcuityRight || "-"}
              </td>
              <td className="border p-2">
                {patient.examination?.visualAcuityLeft || "-"}
              </td>
            </tr>
            <tr>
              <td className="border p-2 font-semibold">BCVA:</td>
              <td className="border p-2">
                {patient.examination?.refractionRight || "-"}
              </td>
              <td className="border p-2">
                {patient.examination?.refractionLeft || "-"}
              </td>
            </tr>
            <tr>
              <td className="border p-2 font-semibold">IOP:</td>
              <td className="border p-2">
                {patient.examination?.iopRight || "-"}
              </td>
              <td className="border p-2">
                {patient.examination?.iopLeft || "-"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Diagnosis Section */}
      {/* <div className="mb-4">
        <h2 className="text-xl font-semibold mb-1">Diagnosis</h2>
        <p>{patient.diagnosis || "-"}</p>
      </div> */}

      {/* Investigations Section */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-1">Investigations</h2>
        <p>{patient.investigations || "-"}</p>
      </div>

      {/* Medicines Section */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-1">Treatment / Medicines</h2>
        <p>{patient.medicines || "-"}</p>
      </div>

      {/* Signature + Print */}
      <div className="text-right mt-10">
        <p className="italic">Signature: ____________________</p>
      </div>

      <div className="text-right mt-4">
        <button
          onClick={handlePrint}
          className="bg-green-600 text-white px-4 py-2 rounded print:hidden"
        >
          Print / Download PDF
        </button>
      </div>
    </div>
  );
};

export default PrintablePrescription;
