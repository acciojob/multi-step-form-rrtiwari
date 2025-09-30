import React from "react";

function Step({
  step,
  formData,
  handleChange,
  nextStep,
  prevStep,
  handleSubmit,
}) {
  return (
    <form onSubmit={handleSubmit}>
      {step === 1 && (
        <div id="step1" data-testid="step1">
          <input
            id="first_name"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            placeholder="First Name"
          />
          <input
            id="last_name"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            placeholder="Last Name"
          />
          <button type="button" onClick={nextStep}>
            Next
          </button>
        </div>
      )}

      {step === 2 && (
        <div id="step2" data-testid="step2">
          <input
            id="model"
            name="model"
            value={formData.model}
            onChange={handleChange}
            placeholder="Car Model"
          />
          <input
            id="car_price"
            name="car_price"
            value={formData.car_price}
            onChange={handleChange}
            placeholder="Car Price"
          />
          <button type="button" onClick={prevStep}>
            Previous
          </button>
          <button type="button" onClick={nextStep}>
            Next
          </button>
        </div>
      )}

      {step === 3 && (
        <div id="step3" data-testid="step3">
          <input
            id="card_info"
            name="card_info"
            value={formData.card_info}
            onChange={handleChange}
            placeholder="Card Info"
          />
          <input
            id="expiry_date"
            name="expiry_date"
            value={formData.expiry_date}
            onChange={handleChange}
            placeholder="Expiry Date"
          />
          <button type="button" onClick={prevStep}>
            Previous
          </button>
          <button type="submit">Submit</button>
        </div>
      )}
    </form>
  );
}

export default Step;
