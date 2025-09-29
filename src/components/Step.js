import React from "react";

function Step({ step, data, handleChange, nextStep, prevStep }) {
  if (step === 1) {
    return (
      <div id="step1">
        <input id="first_name" value={data.first_name} onChange={handleChange} />
        <input id="last_name" value={data.last_name} onChange={handleChange} />
        <button type="button" id="next" onClick={nextStep}>Next</button>
      </div>
    );
  }

  if (step === 2) {
    return (
      <div id="step2">
        <input id="model" value={data.model} onChange={handleChange} />
        <input id="car_price" value={data.car_price} onChange={handleChange} />
        <button type="button" id="prev" onClick={prevStep}>Previous</button>
        <button type="button" id="next" onClick={nextStep}>Next</button>
      </div>
    );
  }

  if (step === 3) {
    return (
      <div id="step3">
        <input id="card_info" value={data.card_info} onChange={handleChange} />
        <input id="expiry_date" value={data.expiry_date} onChange={handleChange} />
        <button type="button" id="prev" onClick={prevStep}>Previous</button>
        <button type="submit" id="submit">Submit</button>
      </div>
    );
  }

  return null;
}

export default Step;
