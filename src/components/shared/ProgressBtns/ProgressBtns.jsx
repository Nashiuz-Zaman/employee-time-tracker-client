// react
import PropTypes from "prop-types";

// components
import ButtonBtn from "./../ButtonBtn/ButtonBtn";

const ProgressBtns = ({ modifyClasses = "" }) => {
  return (
    <div className={`flex justify-center items-center gap-4 ${modifyClasses}`}>
      {/* start/resume button */}
      <ButtonBtn text={"Start Working"} colorTheme="black" />

      {/* pause button */}
      <ButtonBtn text={"Clock Out"} colorTheme="danger" />
    </div>
  );
};

ProgressBtns.propTypes = {
  modifyClasses: PropTypes.string,
};

export default ProgressBtns;
