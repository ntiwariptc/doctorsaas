import React, { useState } from "react";
import AddPatientForm from "./components/AddPatientForm";
import PrintablePrescription from "./components/PrintablePrescription";
import BillingReceipt from "./components/BillingReceipt"; // ✅ NEW

function App() {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [registrationId] = useState("REG-" + Math.floor(100 + Math.random() * 900)); // generate only once

  const handleAddPatient = (patient) => {
    const patientWithId = {
      ...patient,
      registrationId, // use the same ID passed to the form
    };
    setPatients([...patients, patientWithId]);
    setSelectedPatient(patientWithId);
  };

  return (
    <div className="p-6">
      <AddPatientForm onAdd={handleAddPatient} registrationId={registrationId} />
      {selectedPatient && (
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Generated Report</h2>
          <PrintablePrescription patient={selectedPatient} />
        </div>
      )}
      {selectedPatient && (
        <div className="mt-8">
          <BillingReceipt patient={selectedPatient} />
        </div>
      )}
    </div>
    //</div>
    
  );
}

export default App;
