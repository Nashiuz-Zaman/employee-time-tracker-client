// react
import PropTypes from "prop-types";
import { useState } from "react";

// react icons
import { IoCloudUpload } from "react-icons/io5";
import { IoEye, IoEyeOff } from "react-icons/io5";

// react router import
import { Link } from "react-router-dom";

// custom hooks import
import useRegistrationForm from "../../../../hooks/useRegistrationForm";

// shared component imports
import ButtonBtn from "../../../shared/ButtonBtn/ButtonBtn";

import FileUploadBtn from "../../../shared/FileUploadBtn/FileUploadBtn";

const RegistrationForm = ({ loading = false, modifyClasses }) => {
  const { registrationErrors, handleSubmit } = useRegistrationForm();
  const [showPassword, setShowPassword] = useState(false);

  // common styles for input and label jsx elements
  const inputClasses =
    "block w-full rounded-default border border-textLight py-2 px-4 text-textPrimary";

  return (
    <div
      className={`w-full mx-auto py-12 px-5 xsm:px-8 sm:px-10 2md:px-12 lg:px-10 ${modifyClasses}`}
    >
      {/* heading */}
      <h2 className="capitalize mb-custom2xsm text-center text-2xl">
        Join Company Database
      </h2>

      {/* form */}
      <form noValidate onSubmit={handleSubmit} className="w-full">
        <div className={`${loading ? "opacity-50" : "opacity-100"}`}>
          {/* username field */}
          <div className="mb-4">
            <input
              className={inputClasses}
              name="name"
              type="text"
              id="fullname"
              placeholder="Full Name"
            />
          </div>

          {/* photo upload button */}
          <div className="mb-4 grid grid-cols-2 items-center">
            <p>Your Photo</p>

            <FileUploadBtn>
              Browse <IoCloudUpload className="text-xl" />
            </FileUploadBtn>
          </div>

          {/* email field */}
          <div className="mb-4">
            <input
              className={inputClasses}
              type="email"
              id="email"
              name="email"
              placeholder="Email"
            />
          </div>

          {/* password field */}
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

          {/* show errors here */}
          {registrationErrors?.length > 0 && (
            <div className="space-y-1 mt-4">
              {registrationErrors.map((error) => {
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
          )}
        </div>

        {/* submit button */}
        <ButtonBtn
          loading={loading}
          text="Register"
          modifyClasses="mx-auto block mt-10 mb-4"
        />

        <p className="text-sm text-center">
          Already have an account?{" "}
          <Link className="text-primary font-semibold" to={"/login"}>
            Log In
          </Link>
        </p>
      </form>

      <p className="text-center my-5">Or</p>

      <Link to="/" className="block text-primary text-center hover:underline">
        Back to Home
      </Link>
    </div>
  );
};

RegistrationForm.propTypes = {
  loading: PropTypes.bool,
  modifyClasses: PropTypes.string,
};

export default RegistrationForm;
