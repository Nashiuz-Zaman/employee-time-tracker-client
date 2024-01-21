// react
import PropTypes from "prop-types";

// hooks
import useConvertSecondsToHMS from "../../../hooks/useConvertSecondsToHMS";

const Countdown = ({ currentDuration = 0, modifyClasses = "" }) => {
  const { hours, minutes, seconds } = useConvertSecondsToHMS(currentDuration);

  return (
    <div className={`${modifyClasses}`}>
      <p className="text-8xl text-center font-extralight">
        {hours}:{minutes}:{seconds}
      </p>
    </div>
  );
};

Countdown.propTypes = {
  currentDuration: PropTypes.number,
  modifyClasses: PropTypes.string,
};

export default Countdown;
