import React from "react";

const FormField = ({
  name,
  value,
  handleChange,
  labelName,
  type,
  isSupriseMe,
  placeholder,
  handleSurpriseMe,
}) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label
          htmlFor={name}
          className="block text-gray-900 text-sm font-medium"
        >
          {labelName}
        </label>
        {isSupriseMe && (
          <button
            type="button"
            onClick={handleSurpriseMe}
            className="text-xs font-semibold py-1 px-2 text-black bg-[#e2dede] rounded-[5px]"
          >
            Surprice me
          </button>
        )}
      </div>
      <input
        required
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="bg-gray-50 text-gray-900 border border-gray-300 w-full p-3 outline-none
       rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] text-sm"
      />
    </div>
  );
};

export default FormField;
