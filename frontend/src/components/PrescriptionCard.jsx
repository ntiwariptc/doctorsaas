// components/PrescriptionCard.jsx
import React from 'react';

const PrescriptionCard = React.forwardRef(({ patient }, ref) => (
  <div ref={ref} className="p-4 text-left font-sans">
    <h2 className="text-xl font-bold mb-4">Prescription</h2>
    <p><strong>Name:</strong> {patient.name}</p>
    <p><strong>Age:</strong> {patient.age}</p>
    <p><strong>Phone:</strong> {patient.phone}</p>
    <p><strong>Address:</strong> {patient.address}</p>
    <p><strong>Disease:</strong> {patient.disease || 'N/A'}</p>
    <p><strong>Medical History:</strong> {patient.medicalHistory || 'N/A'}</p>
    <p><strong>Medicines:</strong></p>
    <ul className="list-disc ml-6">
      {patient.medicines?.map((med, index) => (
        <li key={index}>{med}</li>
      ))}
    </ul>
    <p className="mt-6 text-sm italic">* Doctor’s Signature *</p>
  </div>
));

export default PrescriptionCard;
