import React, { useState } from "react";
import "../styles/App.css";

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    make: "",
    model: "",
    carPrice: "",
    cardInfo: "",
    expiryDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="App">
      <h2>Car Insurance Form</h2>
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div>
            <label>
              First Name:
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Last Name:
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </label>
            <br />
            <button type="button" onClick={nextStep}>
              Next
            </button>
          </div>
        )}

        {step === 2 && (
          <div>
            <label>
              Brand:
              <input
                type="text"
                name="make"
                value={formData.make}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Model:
              <input
                type="text"
                name="model"
                value={formData.model}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Car Price:
              <input
                type="number"
                name="carPrice"
                value={formData.carPrice}
                onChange={handleChange}
              />
            </label>
            <br />
            <button type="button" onClick={prevStep}>
              Previous
            </button>
            <button type="button" onClick={nextStep}>
              Next
            </button>
          </div>
        )}

        {step === 3 && (
          <div>
            <label>
              Card Info:
              <input
                type="text"
                name="cardInfo"
                value={formData.cardInfo}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Expiry Date:
              <input
                type="month"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
              />
            </label>
            <br />
            <button type="button" onClick={prevStep}>
              Previous
            </button>
            <button type="submit">Submit</button>
          </div>
        )}
      </form>
    </div>
  );
}

export default App;
