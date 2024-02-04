// react imports
import PropTypes from "prop-types";

// react router import
import { Link } from "react-router-dom";

// shared component imports
import ButtonBtn from "../../../shared/ButtonBtn/ButtonBtn";
import InputField from "../../../shared/InputField/InputField";

// custom hooks
import useLoginForm from "../../../../hooks/useLoginForm";
import PasswordInputField from "../../../shared/PasswordInputField/PasswordInputField";

const LoginForm = ({ loading, modifyClasses }) => {
  const { loginErrors, handleLoginEmail } = useLoginForm();

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
          <InputField
            type="email"
            name="email"
            placeholder="Employee Email"
            modifyClasses="mb-4"
          />

          <PasswordInputField name="password" placeholder="Password" />

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
