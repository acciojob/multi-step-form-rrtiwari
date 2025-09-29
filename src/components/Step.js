import React from "react";

function Step(props) {
  var step = props.step;
  var formData = props.formData;
  var handleChange = props.handleChange;
  var nextStep = props.nextStep;
  var prevStep = props.prevStep;
  var handleSubmit = props.handleSubmit;

  function onFormNext(e) {
    if (e && e.preventDefault) e.preventDefault();
    nextStep();
  }

  if (step === 1) {
    return (
      <form id="step1" className="step" onSubmit={onFormNext}>
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
        <div className="buttons">
          <button type="submit" id="step1-next">
            Next
          </button>
        </div>
      </form>
    );
  }

  if (step === 2) {
    return (
      <form id="step2" className="step" onSubmit={onFormNext}>
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
          <button type="button" id="step2-prev" onClick={prevStep}>
            Previous
          </button>
          <button type="submit" id="step2-next">
            Next
          </button>
        </div>
      </form>
    );
  }

  if (step === 3) {
    return (
      <form id="step3" className="step" onSubmit={handleSubmit}>
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
          <button type="button" id="step3-prev" onClick={prevStep}>
            Previous
          </button>
          <button type="submit" id="step3-submit">
            Submit
          </button>
        </div>
      </form>
    );
  }

  return null;
}

export default Step;
