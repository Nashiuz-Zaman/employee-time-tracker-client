// react
import PropTypes from "prop-types";

// react icons
import { IoCloudUpload } from "react-icons/io5";

// react router import
import { Link } from "react-router-dom";

// custom hooks import
import useRegistrationForm from "../../../../hooks/useRegistrationForm";

// shared component imports
import ButtonBtn from "../../../shared/ButtonBtn/ButtonBtn";
import FileUploadBtn from "../../../shared/FileUploadBtn/FileUploadBtn";
import InputField from "../../../shared/InputField/InputField";
import PasswordInputField from "../../../shared/PasswordInputField/PasswordInputField";

const RegistrationForm = ({ loading = false, modifyClasses }) => {
  const { registrationErrors, handleSubmit } = useRegistrationForm();

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
          <div className="space-y-5">
            {/* username field */}
            <InputField name="name" placeholder="Full Name" />

            {/* photo upload  */}
            <div className="mb-4 grid grid-cols-2 items-center">
              <p>Your Photo</p>

              <FileUploadBtn>
                Browse <IoCloudUpload className="text-xl" />
              </FileUploadBtn>
            </div>

            {/* email field */}
            <InputField
              type="email"
              name="email"
              placeholder="Employee Email"
              modifyClasses="mb-4"
            />

            {/* password field */}
            <PasswordInputField name="password" placeholder="Password" />
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
          modifyClasses="mx-auto block mt-10 mb-6"
        />

        <p className="text-sm text-center">
          Already have an account?{" "}
          <Link className="text-primary font-semibold" to={"/login"}>
            Log In
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

RegistrationForm.propTypes = {
  loading: PropTypes.bool,
  modifyClasses: PropTypes.string,
};

export default RegistrationForm;
