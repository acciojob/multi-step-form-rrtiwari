import React, { useState } from "react";
import "../styles/App.css";

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

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
  };

  return (
    <div>
      <h1>Multi-Step Form</h1>

      {step === 1 && (
        <div id="step1">
          <input
            id="first_name"
            value={formData.first_name}
            onChange={handleChange}
            placeholder="First Name"
          />
          <input
            id="last_name"
            value={formData.last_name}
            onChange={handleChange}
            placeholder="Last Name"
          />
          <button type="button" onClick={nextStep}>Next</button>
        </div>
      )}

      {step === 2 && (
        <div id="step2">
          <input
            id="model"
            value={formData.model}
            onChange={handleChange}
            placeholder="Car Model"
          />
          <input
            id="car_price"
            value={formData.car_price}
            onChange={handleChange}
            placeholder="Car Price"
          />
          <button type="button" onClick={prevStep}>Previous</button>
          <button type="button" onClick={nextStep}>Next</button>
        </div>
      )}

      {step === 3 && (
        <form id="step3" onSubmit={handleSubmit}>
          <input
            id="card_info"
            value={formData.card_info}
            onChange={handleChange}
            placeholder="Card Info"
          />
          <input
            id="expiry_date"
            value={formData.expiry_date}
            onChange={handleChange}
            placeholder="Expiry Date"
          />
          <button type="button" onClick={prevStep}>Previous</button>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default App;



