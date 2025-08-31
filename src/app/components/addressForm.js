import React from "react";
import { states } from "./functions/states";

const AddressForm = ({ register, errors }) => {
  return (
    <div className="grid lg:grid-cols-12 grid-cols-1 mt-6 gap-5">
      {/* First Name */}
      <div className="lg:col-span-6">
        <label className="form-label font-semibold">
          First Name: <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          placeholder="First Name"
          className="w-full py-2 px-3 h-10 bg-transparent rounded border mt-2"
          {...register("first_name", {
            required: "First Name is required",
          })}
        />
        {errors.first_name && (
          <p className="text-red-500 text-sm mt-1">
            {errors.first_name.message}
          </p>
        )}
      </div>

      {/* Last Name */}
      <div className="lg:col-span-6">
        <label className="form-label font-semibold">
          Last Name: <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          placeholder="Last Name"
          className="w-full py-2 px-3 h-10 bg-transparent rounded border mt-2"
          {...register("last_name", {
            required: "Last Name is required",
          })}
        />
        {errors.last_name && (
          <p className="text-red-500 text-sm mt-1">
            {errors.last_name.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div className="lg:col-span-6">
        <label className="form-label font-semibold">
          Your Email: <span className="text-red-600">*</span>
        </label>
        <input
          type="email"
          placeholder="Email"
          className="w-full py-2 px-3 h-10 bg-transparent rounded border mt-2"
          {...register("email", {
            required: "Email is required",
          })}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Mobile Number */}
      <div className="lg:col-span-6">
        <label className="form-label font-semibold">
          Mobile Number: <span className="text-red-600">*</span>
        </label>
        <input
          type="tel"
          placeholder="Mobile Number"
          className="w-full py-2 px-3 h-10 bg-transparent rounded border mt-2"
          {...register("mobile_no", {
            required: "Mobile Number is required",
          })}
        />
        {errors.mobile_no && (
          <p className="text-red-500 text-sm mt-1">
            {errors.mobile_no.message}
          </p>
        )}
      </div>

      {/* Address Line 1 */}
      <div className="lg:col-span-12">
        <label className="form-label font-semibold">
          Address: <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          placeholder="Address Line 1"
          className="w-full py-2 px-3 h-10 bg-transparent rounded border mt-2"
          {...register("address_line1", {
            required: "Address is required",
          })}
        />
        {errors.address_line1 && (
          <p className="text-red-500 text-sm mt-1">
            {errors.address_line1.message}
          </p>
        )}
      </div>

      {/* Address Line 2 */}
      <div className="lg:col-span-12">
        <label className="form-label font-semibold">Address 2:</label>
        <input
          type="text"
          placeholder="Address Line 2"
          className="w-full py-2 px-3 h-10 bg-transparent rounded border mt-2"
          {...register("address_line2")}
        />
      </div>

      {/* Country */}
      <div className="lg:col-span-4">
        <label className="font-semibold">
          Country: <span className="text-red-600">*</span>
        </label>
        <select
          className="form-select mt-2 w-full py-2 px-3 h-10 rounded border"
          defaultValue=""
          {...register("country", {
            required: "Country is required",
          })}
        >
          <option value="" disabled>
            Select a country
          </option>
          <option value="India">India</option>
        </select>
        {errors.country && (
          <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>
        )}
      </div>

      {/* State */}
      <div className="lg:col-span-4">
        <label className="font-semibold">
          State: <span className="text-red-600">*</span>
        </label>
        <select
          className="form-select mt-2 w-full py-2 px-3 h-10 rounded border"
          defaultValue=""
          {...register("state", {
            required: "State is required",
          })}
        >
          <option value="" disabled>
            Select a state
          </option>
          {states.map((state) => {
            return (
              <option key={state} value={state}>
                {state}
              </option>
            );
          })}
          {/* <option value="Maharashtra">Maharashtra</option>
          <option value="Delhi">Delhi</option> */}
        </select>
        {errors.state && (
          <p className="text-red-500 text-sm mt-1">{errors.state.message}</p>
        )}
      </div>

      {/* Zip Code */}
      <div className="lg:col-span-4">
        <label className="form-label font-semibold">
          Zip Code: <span className="text-red-600">*</span>
        </label>
        <input
          type="number"
          placeholder="Zip Code"
          className="w-full py-2 px-3 h-10 bg-transparent rounded border mt-2"
          {...register("postal_code", {
            required: "Zip Code is required",
          })}
        />
        {errors.postal_code && (
          <p className="text-red-500 text-sm mt-1">
            {errors.postal_code.message}
          </p>
        )}
      </div>

      {/* Checkboxes */}
      {/* <div className="lg:col-span-12">
        <div className="flex items-center mb-2">
          <input
            type="checkbox"
            id="sameaddress"
            checked={isAddressSame}
            onChange={() => setIsAddressSame(!isAddressSame)}
            //   {...register("same_as_billing")}
            className="form-checkbox me-2"
          />
          <label htmlFor="sameaddress" className="text-slate-400">
            Shipping address is the same as my billing address
          </label>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="savenexttime"
            checked={saveShippingAddress}
            onChange={() => setSaveShippingAddress(!saveShippingAddress)}
            //   {...register("save_for_next_time")}
            className="form-checkbox me-2"
          />
          <label htmlFor="savenexttime" className="text-slate-400">
            Save this information for next time
          </label>
        </div>
      </div> */}
    </div>
  );
};

export default AddressForm;
