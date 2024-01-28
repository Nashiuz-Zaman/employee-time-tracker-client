// react
import PropTypes from "prop-types";

// hooks
import useGetTimeData from "../../../hooks/useGetTimeData";

const LiveDate = ({
  text = "Today is",
  modifyClasses = "",
  noText = false,
}) => {
  const { getDate } = useGetTimeData();

  const { dayOfTheMonth, monthName, year } = getDate();

  return (
    <p className={`text-center ${modifyClasses}`}>
      {!noText && text}: {dayOfTheMonth} {monthName} {year}
    </p>
  );
};

LiveDate.propTypes = {
  text: PropTypes.string,
  noText: PropTypes.bool,
  modifyClasses: PropTypes.string,
};

export default LiveDate;
