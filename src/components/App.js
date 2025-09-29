import React, { useState } from "react";
import Step from "./Step";
import "../styles/App.css";

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    model: "",
    car_price: "",
    card_info: "",
    expiry_date: ""
  });

  function handleChange(e) {
    const id = e.target.id;
    const value = e.target.value;
    setFormData(function(prev) {
      return Object.assign({}, prev, { [id]: value });
    });
  }

  function nextStep() {
    setCurrentStep(function(prevStep) {
      return prevStep + 1;
    });
  }

  function prevStep() {
    setCurrentStep(function(prevStep) {
      return prevStep - 1;
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted! Check console for details.");
  }

  return (
    <div className="App">
      <h1>Multi-Step Form</h1>
      <Step
        step={currentStep}
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


