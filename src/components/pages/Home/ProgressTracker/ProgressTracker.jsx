// react
import PropTypes from "prop-types";

// components
import ProgressBtns from "../../../shared/ProgressBtns/ProgressBtns";
import Countdown from "../../../shared/Countdown/Countdown";
import LiveTime from "../../../shared/LiveTime/LiveTime";
import LiveDate from "../../../shared/LiveDate/LiveDate";

// redux
import { useSelector } from "react-redux";

const ProgressTracker = ({ modifyClasses = "" }) => {
  const { currentDuration } = useSelector((store) => store.workHours);

  return (
    <div className={`${modifyClasses}`}>
      {/* heading */}
      <h2 className="text-center text-3xl mb-8 font-semibold">
        Have a good day at work!
      </h2>

      <div className="mb-8 space-y-2">
        <LiveDate modifyClasses="text-xl font-semibold" />

        <LiveTime modifyClasses="text-xl font-semibold" />
      </div>

      {/* progress buttons */}
      <ProgressBtns modifyClasses="mb-12" />

      {/* countdown */}
      <Countdown currentDuration={currentDuration} />
    </div>
  );
};

ProgressTracker.propTypes = {
  modifyClasses: PropTypes.string,
};

export default ProgressTracker;
