// react
import PropTypes from "prop-types";
import { useState } from "react";

// react icons
import { IoEye, IoEyeOff } from "react-icons/io5";

const PasswordInput = ({
  defaultValue = "",
  placeholder = "Default placeholder",
  name = "",
  modifyClasses = "",
}) => {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className={`border-b relative transition-all duration-default border-gray-400 text- ${modifyClasses}`}
    >
      <p
        className={`absolute transition-all duration-[inherit] ${
          focused
            ? "text-xs -translate-y-1 text-textPrimary font-semibold"
            : "text-gray-400 translate-y-3"
        }`}
      >
        {placeholder}
      </p>

      <input
        onFocus={() => setFocused(true)}
        onBlur={() => {
          setFocused(value.length ? true : false);
        }}
        className={`block text-sm bg-transparent pt-4 pb-2 pr-4 text-textMediumLight focus:outline-none relative z-20`}
        type={showPassword ? "text" : "password"}
        defaultValue={defaultValue}
        name={name}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />

      <button
        aria-label="Show or not show password button"
        type="button"
        className="block w-max absolute top-[14px] right-3 text-textPrimary"
        onClick={(e) => {
          e.preventDefault();
          setShowPassword((prev) => !prev);
        }}
      >
        {showPassword ? (
          <IoEyeOff className="text-lg" />
        ) : (
          <IoEye className="text-lg" />
        )}
      </button>
    </div>
  );
};

PasswordInput.propTypes = {
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  modifyClasses: PropTypes.string,
};

export default PasswordInput;
