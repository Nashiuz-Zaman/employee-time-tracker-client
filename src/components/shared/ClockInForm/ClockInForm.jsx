// react imports
import PropTypes from "prop-types";

// hooks
import useLoginForm from "../../../hooks/useLoginForm";

// shared component imports
import ButtonBtn from "./../ButtonBtn/ButtonBtn";
import InputField from "../InputField/InputField";
import PasswordInputField from "../PasswordInputField/PasswordInputField";

const ClockInForm = ({ modifyClasses }) => {
  const { loginErrors, handleLoginEmail } = useLoginForm();

  return (
    <div
      className={`w-[90%] sm:w-[50%] lg:w-[90%] xl:w-[70%] 3xl:w-[60%] mx-auto ${modifyClasses}`}
    >
      {/* heading */}
      <h2 className="font-bold text-center lg:text-left text-primary capitalize mb-4 lg:mb-5 text-2xl">
        Start/Resume your shift
      </h2>

      {/* form */}
      <form
        noValidate
        onSubmit={handleLoginEmail}
        className="w-full space-y-4 lg:space-y-5"
      >
        {/* email field */}
        <InputField type="email" name="email" placeholder="Email" />

        {/* password field */}
        <PasswordInputField placeholder="Password" name="password" />

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

        <ButtonBtn text="Clock In" modifyClasses="!w-full block !mt-10" />
      </form>
    </div>
  );
};

ClockInForm.propTypes = {
  modifyClasses: PropTypes.string,
};

export default ClockInForm;
