import React, { useState } from "react";
import AddPatientForm from "./components/AddPatientForm";
import PrintablePrescription from "./components/PrintablePrescription";
import BillingReceipt from "./components/BillingReceipt"; // ✅ NEW

const App = () => {
  const [patients, setPatients] = useState([]);
  const [searchMrNo, setSearchMrNo] = useState("");
  const [selectedPatient, setSelectedPatient] = useState(null);

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("patients");
    if (stored) {
      setPatients(JSON.parse(stored));
    }
  }, []);

  // Save to localStorage whenever patients change
  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients));
  }, [patients]);

  const handleAddPatient = (data) => {
    setPatients((prev) => [...prev, data]);
  };

  const handleSearch = () => {
    const found = patients.find((p) => p.mrno === searchMrNo);
    setSelectedPatient(found || null);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Patient Registration</h1>

      <AddPatientForm onAdd={handleAddPatient} />

      <div className="mt-10 border-t pt-6">
        <h2 className="text-xl font-semibold mb-4">🔎 Generate Billing Receipt</h2>
        <input
          type="text"
          placeholder="Enter MR No. (e.g., KAS/1234/25)"
          value={searchMrNo}
          onChange={(e) => setSearchMrNo(e.target.value)}
          className="border p-2 mr-2"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </div>

      {selectedPatient && (
        <div className="mt-8">
          <BillingReceipt patient={selectedPatient} />
        </div>
      )}
    </div>
  );
};

export default App;