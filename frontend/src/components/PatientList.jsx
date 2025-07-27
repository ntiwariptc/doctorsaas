import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

const PatientList = () => {
  const [patients, setPatients] = useState([]);
  const printRef = useRef();

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/patients")
      .then((res) => {
        if (Array.isArray(res.data)) {
          setPatients(res.data);
        } else {
          console.error("Fetched data is not an array:", res.data);
        }
      })
      .catch((err) => {
        console.error("Error fetching patients:", err);
      });
  }, []);

  const handlePrint = (patient) => {
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <html>
        <head>
          <title>Prescription for ${patient.name}</title>
        </head>
        <body>
          <h1>Prescription</h1>
          <p><strong>Name:</strong> ${patient.name}</p>
          <p><strong>Age:</strong> ${patient.age}</p>
          <p><strong>Phone:</strong> ${patient.phone}</p>
          <p><strong>Address:</strong> ${patient.address}</p>
          <p><strong>Disease:</strong> ${patient.disease}</p>
          <p><strong>Medical History:</strong> ${patient.medicalHistory}</p>
          <p><strong>Medicines:</strong> ${patient.medicines}</p>
          <br/>
          <p><em>Doctor Signature:</em> __________________</p>
          <script>
            window.onload = function() {
              window.print();
              window.onafterprint = function() {
                window.close();
              };
            };
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Patient List</h2>
      {patients.length === 0 ? (
        <p>No patients found.</p>
      ) : (
        <ul className="space-y-4">
          {patients.map((patient) => (
            <li
              key={patient._id}
              className="p-4 border rounded-md shadow-md bg-white"
            >
              <p><strong>Name:</strong> {patient.name}</p>
              <p><strong>Age:</strong> {patient.age}</p>
              <p><strong>Phone:</strong> {patient.phone}</p>
              <p><strong>Address:</strong> {patient.address}</p>
              <p><strong>Disease:</strong> {patient.disease}</p>
              <p><strong>Medical History:</strong> {patient.medicalHistory}</p>
              <p><strong>Medicines:</strong> {patient.medicines}</p>
              <button
                onClick={() => handlePrint(patient)}
                className="mt-2 px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Print Prescription
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PatientList;
