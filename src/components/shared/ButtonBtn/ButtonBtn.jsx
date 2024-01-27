// react imports
import PropTypes from "prop-types";

// component
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const ButtonBtn = ({
  text,
  onClickFunction = null,
  colorTheme = "",
  modifyClasses = "",
  theme = "light",
  loading = false,
  disabled = false,
}) => {
  // common classes
  const outlinedClasses =
    "bg-transparent border border-gray-300 hover:border-white text-gray-300 hover:text-white";

  const oulinedPrimaryClasses = `bg-transparent border ${
    theme === "dark"
      ? "border-white text-white"
      : "border-primary text-primary "
  }  hover:text-primaryDark hover:border-primaryDark`;

  const primaryClasses = `border ${
    theme === "dark"
      ? "bg-primaryDarkTheme border-primaryDarkTheme"
      : "bg-primary border-primary"
  } hover:border-primaryDark hover:bg-primaryDark text-white`;

  const blackClasses =
    "bg-blackLight border border-blackLight hover:bg-textPrimary hover:border-textPrimary text-white";

  const dangerClasses =
    "bg-red-700 border border-red-700 hover:bg-red-500 hover:border-red-500 text-white";

  const allClasses = `block min-w-[8rem] w-max capitalize transition-all duration-default rounded-defaultLg text-center px-6 py-2 3xl:text-xl 2xl:py-3 active:scale-95 disabled:opacity-50 ${modifyClasses}`;

  return (
    <button
      disabled={disabled}
      onClick={onClickFunction}
      // decide the design of button according to the props
      className={`${
        colorTheme === "outlined"
          ? outlinedClasses
          : colorTheme === "outlinedPrimary"
          ? oulinedPrimaryClasses
          : colorTheme === "black"
          ? blackClasses
          : colorTheme === "danger"
          ? dangerClasses
          : primaryClasses
      } ${allClasses}`}
    >
      {loading && (
        <LoadingSpinner onlyLoader={true} loaderSizeClass={"3xl:text-2xl"} />
      )}
      {!loading && text}
    </button>
  );
};

ButtonBtn.propTypes = {
  text: PropTypes.string.isRequired,
  onClickFunction: PropTypes.func,
  colorTheme: PropTypes.string,
  modifyClasses: PropTypes.string,
  theme: PropTypes.string,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default ButtonBtn;
