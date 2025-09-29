import React from "react";

function Step(props) {
  var step = props.step;
  var formData = props.formData;
  var handleChange = props.handleChange;
  var nextStep = props.nextStep;
  var prevStep = props.prevStep;
  var handleSubmit = props.handleSubmit;

  function renderStep() {
    if (step === 1) {
      return (
        <div className="step" id="step1">
          <h2>Step 1: Personal Info</h2>
          <label htmlFor="first_name">First Name:</label>
          <input
            id="first_name"
            type="text"
            value={formData.first_name}
            onChange={handleChange}
          />
          <label htmlFor="last_name">Last Name:</label>
          <input
            id="last_name"
            type="text"
            value={formData.last_name}
            onChange={handleChange}
          />
          <button type="button" onClick={nextStep}>
            Next
          </button>
        </div>
      );
    }

    if (step === 2) {
      return (
        <div className="step" id="step2">
          <h2>Step 2: Car Info</h2>
          <label htmlFor="model">Car Model:</label>
          <input
            id="model"
            type="text"
            value={formData.model}
            onChange={handleChange}
          />
          <label htmlFor="car_price">Car Price:</label>
          <input
            id="car_price"
            type="number"
            value={formData.car_price}
            onChange={handleChange}
          />
          <div className="buttons">
            <button type="button" onClick={prevStep}>
              Previous
            </button>
            <button type="button" onClick={nextStep}>
              Next
            </button>
          </div>
        </div>
      );
    }

    if (step === 3) {
      return (
        <div className="step" id="step3">
          <h2>Step 3: Payment Info</h2>
          <label htmlFor="card_info">Card Info:</label>
          <input
            id="card_info"
            type="text"
            value={formData.card_info}
            onChange={handleChange}
          />
          <label htmlFor="expiry_date">Expiry Date:</label>
          <input
            id="expiry_date"
            type="month"
            value={formData.expiry_date}
            onChange={handleChange}
          />
          <div className="buttons">
            <button type="button" onClick={prevStep}>
              Previous
            </button>
            <button type="submit">Submit</button>
          </div>
        </div>
      );
    }
  }

  return <form onSubmit={handleSubmit}>{renderStep()}</form>;
}

export default Step;
