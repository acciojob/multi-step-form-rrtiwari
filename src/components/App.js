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
    var id = e.target.id;
    var value = e.target.value;
    setFormData(function(prev) {
      return Object.assign({}, prev, { [id]: value });
    });
  }

  function setStepAndExpose(next) {
    setCurrentStep(function(prevStep) {
      var newStep = typeof next === "function" ? next(prevStep) : next;
      window.__CURRENT_STEP__ = newStep;
      try {
        document.body.setAttribute("data-current-step", String(newStep));
      } catch (err) {}
      console.log("step change", prevStep, "->", newStep);
      return newStep;
    });
  }

  function nextStep() {
    setStepAndExpose(function(prev) {
      return prev + 1;
    });
  }

  function prevStep() {
    setStepAndExpose(function(prev) {
      return prev - 1;
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Form submitted! Check console for details.");
  }

  return (
    <div className="App">
      <h1>Multi-Step Form</h1>
      <div id="current-step-indicator" data-step={currentStep}>
        {currentStep}
      </div>
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



