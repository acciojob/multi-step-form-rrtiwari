import React, { useState } from "react";
import "../styles/App.css";

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    model: "",
    car_price: "",
    card_info: "",
    expiry_date: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep((s) => Math.min(s + 1, 3));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div id="step1">
            <input
              id="first_name"
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              id="last_name"
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <button type="button" onClick={nextStep}>Next</button>
          </div>
        )}

        {step === 2 && (
          <div id="step2">
            <input
              id="model"
              type="text"
              name="model"
              placeholder="Car Model"
              value={formData.model}
              onChange={handleChange}
              required
            />
            <input
              id="car_price"
              type="number"
              name="car_price"
              placeholder="Car Price"
              value={formData.car_price}
              onChange={handleChange}
              required
            />
            <button type="button" onClick={prevStep}>Back</button>
            <button type="button" onClick={nextStep}>Next</button>
          </div>
        )}

        {step === 3 && (
          <div id="step3">
            <input
              id="card_info"
              type="text"
              name="card_info"
              placeholder="Card Information"
              value={formData.card_info}
              onChange={handleChange}
              required
            />
            <input
              id="expiry_date"
              type="text"
              name="expiry_date"
              placeholder="Expiry Date"
              value={formData.expiry_date}
              onChange={handleChange}
              required
            />
            <button type="button" onClick={prevStep}>Back</button>
            <button type="submit">Submit</button>
          </div>
        )}
      </form>
    </div>
  );
}

export default App;

