// react imports
import PropTypes from "prop-types";
import { useState } from "react";

// react icons
import { IoEye, IoEyeOff } from "react-icons/io5";

// react router import
import { Link } from "react-router-dom";

// shared component imports
import ButtonBtn from "../../../shared/ButtonBtn/ButtonBtn";

// custom hooks
import useLoginForm from "../../../../hooks/useLoginForm";

const LoginForm = ({ loading, modifyClasses }) => {
  const { loginErrors, handleLoginEmail } = useLoginForm();
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
        Login to Account
      </h2>

      {/* form */}
      <form noValidate onSubmit={handleLoginEmail} className="w-full">
        <div className={loading ? "opacity-50" : "opacity-100"}>
          {/* email field */}
          <div className="mb-4">
            <input
              className={inputClasses}
              type="email"
              id="email"
              name="email"
              placeholder="Employee Email"
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

          {loginErrors?.length > 0 && (
            <div className="space-y-1 mt-4">
              {loginErrors.map((error) => {
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

        <ButtonBtn text="Log In" modifyClasses="mx-auto block mt-10 mb-6" />

        <p className="text-sm text-center">
          Haven&apos;t joined yet?{" "}
          <Link className="text-primary font-semibold" to={"/registration"}>
            Join
          </Link>
        </p>
      </form>

      <p className="text-center my-2">Or</p>

      <Link to="/" className="block text-primary text-center hover:underline">
        Back to Home
      </Link>
    </div>
  );
};

LoginForm.propTypes = {
  loading: PropTypes.bool,
  modifyClasses: PropTypes.string,
};

export default LoginForm;
