import React, { useRef } from "react";

const BillingReceipt = ({ patient }) => {
  const printRef = useRef();

  const handlePrint = () => {
    const printContents = printRef.current.innerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload();
  };

  if (!patient) return <p>No patient found with this MR No.</p>;

  return (
    <div ref={printRef} className="max-w-3xl mx-auto p-6 border text-sm bg-white text-black">
      <h1 className="text-3xl font-bold text-center mb-4">CHITARA EYE FOUNDATION</h1>
      <h2 className="text-md font-semibold text-center mb-2">ADVANCE EYE CARE</h2>
      <p className="text-center mb-4">Societies Regd. Act-21,1880</p>
      <hr className="border mb-4" />

      <div className="mb-4">
        <p><strong>Receipt No:</strong> {Math.floor(Math.random() * 100000)}</p>
        <p><strong>Date:</strong> {new Date().toLocaleDateString()}</p>
        <p><strong>UHID:</strong> {patient.mrno}</p>
      </div>

      <div className="mb-4">
        <p><strong>Received with thanks from:</strong> Mr/Mrs {patient.name}</p>
        <p><strong>Age:</strong> {patient.age} | <strong>Sex:</strong> {patient.sex}</p>
        <p><strong>By Cash/Cheque:</strong> Cash</p>
        <p><strong>Amount:</strong> ₹800</p>
        <p><strong>On account of:</strong> Consultation Operation (including all charges)</p>
      </div>

      <div className="text-right mt-10">
        <p>Signature: ____________________</p>
      </div>

      <div className="text-right mt-4">
        <button onClick={handlePrint} className="bg-green-600 text-white px-4 py-2 rounded print:hidden">
          Print / Download PDF
        </button>
      </div>
    </div>
  );
};

export default BillingReceipt;
