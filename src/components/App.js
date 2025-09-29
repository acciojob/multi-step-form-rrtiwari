import React, { useState } from "react";
import "../styles/App.css";
import Step from "./Step";

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    model: "",
    car_price: "",
    card_info: "",
    expiry_date: ""
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
  };

  return (
    <div id="MultiStepForm">
      <form onSubmit={handleSubmit}>
        <Step
          step={step}
          data={formData}
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      </form>
    </div>
  );
}

export default App;




