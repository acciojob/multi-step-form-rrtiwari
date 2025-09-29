import React, { useState } from "react";
import Step from "./Step";
import "../styles/App.css"

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    model: "",
    car_price: "",
    card_info: "",
    expiry_date: "",
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div>
      <h1>Multi-Step Form</h1>
      <Step
        step={step}
        formData={formData}
        handleChange={handleChange}
        nextStep={nextStep}
        prevStep={prevStep}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;


