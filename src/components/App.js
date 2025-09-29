import React, { useState } from "react";
import "../styles/App.css";

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    make: "",
    model: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep((s) => Math.min(s + 1, 3));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div id="step1" className={step === 1 ? "active" : "hidden"}>
          <h2>Step 1: Personal Info</h2>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <button type="button" onClick={nextStep}>
            Next
          </button>
        </div>

        <div id="step2" className={step === 2 ? "active" : "hidden"}>
          <h2>Step 2: Car Info</h2>
          <input
            type="text"
            name="make"
            placeholder="Car Make"
            value={formData.make}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="model"
            placeholder="Car Model"
            value={formData.model}
            onChange={handleChange}
            required
          />
          <button type="button" onClick={prevStep}>
            Back
          </button>
          <button type="button" onClick={nextStep}>
            Next
          </button>
        </div>

        <div id="step3" className={step === 3 ? "active" : "hidden"}>
          <h2>Step 3: Review & Submit</h2>
          <p>First Name: {formData.firstName}</p>
          <p>Last Name: {formData.lastName}</p>
          <p>Car Make: {formData.make}</p>
          <p>Car Model: {formData.model}</p>
          <button type="button" onClick={prevStep}>
            Back
          </button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
