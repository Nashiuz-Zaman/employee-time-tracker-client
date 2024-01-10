// react imports
import PropTypes from "prop-types";
import { useState } from "react";

// react icons
import { IoEye, IoEyeOff } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

// shared component imports
import ButtonBtn from "./../ButtonBtn/ButtonBtn";

const ClockInForm = ({ modifyClasses }) => {
  const [showPassword, setShowPassword] = useState(false);

  // common styles for input and label jsx elements
  const inputClasses =
    "block w-full rounded-default border border-textLight py-2 px-4 text-textPrimary";

  const labelClasses = "block font-bold mb-4";

  return (
    <div
      className={`w-[90%] sm:w-[50%] lg:w-[90%] xl:w-[70%] 3xl:w-[60%] mx-auto ${modifyClasses}`}
    >
      {/* heading */}
      <h2 className="font-bold text-center lg:text-left text-primary capitalize mb-4 lg:mb-5 text-2xl">
        Start/Resume your shift
      </h2>

      {/* form */}
      <form onSubmit={null} className="w-full space-y-4 lg:space-y-5">
        {/* email field */}
        <label className="block">
          <span className={labelClasses}>Employee ID</span>
          <input
            className={inputClasses}
            type="text"
            name="employeeId"
            placeholder="Employee ID"
          />
        </label>

        {/* password field */}
        <label className="block">
          <span className={labelClasses}>Password</span>
          <div className="relative">
            <input
              className={inputClasses}
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Password"
            />

            {/* show/no show password buttons */}
            <button
              aria-label="Show or not show password button"
              type="button"
              className="block w-max absolute top-1/2 -translate-y-1/2 right-3 text-textPrimary"
              onClick={(e) => {
                e.preventDefault();
                setShowPassword((prev) => !prev);
              }}
            >
              {showPassword ? (
                <IoEyeOff className="text-xl" />
              ) : (
                <IoEye className="text-xl" />
              )}
            </button>
          </div>
        </label>

        {/* {clockFormErrors?.length > 0 && (
          <div className="space-y-1 mt-4">
            {clockFormErrors.map((error) => {
              return (
                <p
                  key={error}
                  className="text-sm text-center font-semibold text-red-600"
                >
                  * {error}
                </p>
              );
            })}
          </div>
        )} */}

        <ButtonBtn text="Clock In" modifyClasses="mx-auto block !mt-10" />
      </form>
    </div>
  );
};

ClockInForm.propTypes = {
  modifyClasses: PropTypes.string,
};

export default ClockInForm;
