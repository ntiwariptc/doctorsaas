import React, { useState } from "react";

// Generate random 3-digit MR No.
const generateMrNo = () =>
  "KAS/" + Math.floor(1000 + Math.random() * 9000) + "/25";

const AddPatientForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    sex: "",
    phone: "",
    address: "",
    apptdate: "",
    notedate: "",
    mrno: generateMrNo(),
    examination: {
      visualAcuityRight: "", // Right eye UVA
      visualAcuityLeft: "",  // Left eye UVA
      refractionRight: "",  // Right eye BCVA
      refractionLeft: "",   // Left eye BCVA
      iopRight: "",         // Right eye IOP
      iopLeft: "",          // Left eye IOP
    },
    diagnosis: "",
    investigations: "",
    medicines: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes("examination.")) {
      const key = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        examination: { ...prev.examination, [key]: value },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData);
    setFormData({
      name: "",
      age: "",
      sex: "",
      phone: "",
      address: "",
      apptdate: "",
      notedate: "",
      mrno: generateMrNo(),
      examination: {
        visualAcuityRight: "",
        visualAcuityLeft: "",
        refractionRight: "",
        refractionLeft: "",
        iopRight: "",
        iopLeft: "",
      },
      diagnosis: "",
      investigations: "",
      medicines: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">Add Patient</h2>

      <div className="border p-4 rounded bg-gray-50 shadow-sm text-sm">
        <div className="grid grid-cols-4 gap-x-6 gap-y-4">
          <div>
            <label className="font-semibold">Patient:</label>
            <input
              type="text"
              name="name"
              placeholder="Patient Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border-b border-gray-300 p-1 bg-white"
            />
          </div>

          <div>
            <label className="font-semibold">Age:</label>
            <input
              type="text"
              name="age"
              placeholder="e.g., 60"
              value={formData.age}
              onChange={handleChange}
              className="w-full border-b border-gray-300 p-1 bg-white"
            />
          </div>

          <div>
            <label className="font-semibold">Sex:</label>
            <input
              type="text"
              name="sex"
              placeholder="e.g., Male"
              value={formData.sex}
              onChange={handleChange}
              className="w-full border-b border-gray-300 p-1 bg-white"
            />
          </div>

          <div>
            <label className="font-semibold">Contact:</label>
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border-b border-gray-300 p-1 bg-white"
            />
          </div>

          <div>
            <label className="font-semibold">MR No.:</label>
            <input
              type="text"
              name="mrno"
              value={formData.mrno}
              readOnly
              className="w-full border-b border-gray-300 p-1 bg-gray-100"
            />
          </div>

          <div>
            <label className="font-semibold">Appt. Date:</label>
            <input
              type="date"
              name="apptdate"
              value={formData.apptdate}
              onChange={handleChange}
              className="w-full border-b border-gray-300 p-1 bg-white"
            />
          </div>

          <div>
            <label className="font-semibold">Note Date:</label>
            <input
              type="date"
              name="notedate"
              value={formData.notedate}
              onChange={handleChange}
              className="w-full border-b border-gray-300 p-1 bg-white"
            />
          </div>
        </div>
      </div>

      {/* Examination Section */}
      <div>
        <h3 className="font-semibold text-lg mt-4">Examination</h3>
        <div className="grid grid-cols-2 gap-4 mt-2">
          {/* Right Eye */}
          <div>
            <h4 className="font-medium text-gray-700">Right Eye (OD)</h4>
            <input
              name="examination.visualAcuityRight"
              placeholder="Visual Acuity"
              value={formData.examination.visualAcuityRight}
              onChange={handleChange}
              className="border p-2 w-full mb-2"
            />
            <input
              name="examination.refractionRight"
              placeholder="Refraction"
              value={formData.examination.refractionRight}
              onChange={handleChange}
              className="border p-2 w-full mb-2"
            />
            <input
              name="examination.iopRight"
              placeholder="IOP"
              value={formData.examination.iopRight}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </div>

          {/* Left Eye */}
          <div>
            <h4 className="font-medium text-gray-700">Left Eye (OS)</h4>
            <input
              name="examination.visualAcuityLeft"
              placeholder="Visual Acuity"
              value={formData.examination.visualAcuityLeft}
              onChange={handleChange}
              className="border p-2 w-full mb-2"
            />
            <input
              name="examination.refractionLeft"
              placeholder="Refraction"
              value={formData.examination.refractionLeft}
              onChange={handleChange}
              className="border p-2 w-full mb-2"
            />
            <input
              name="examination.iopLeft"
              placeholder="IOP"
              value={formData.examination.iopLeft}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </div>
        </div>
      </div>

      {/* Diagnosis / Investigations / Medicines */}
      {/* <textarea
        name="diagnosis"
        placeholder="Diagnosis"
        value={formData.diagnosis}
        onChange={handleChange}
        className="border p-2 w-full"
      /> */}
      <textarea
        name="investigations"
        placeholder="Investigations"
        value={formData.investigations}
        onChange={handleChange}
        className="border p-2 w-full"
      />
      <textarea
        name="medicines"
        placeholder="Medicines"
        value={formData.medicines}
        onChange={handleChange}
        className="border p-2 w-full"
      />

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default AddPatientForm;