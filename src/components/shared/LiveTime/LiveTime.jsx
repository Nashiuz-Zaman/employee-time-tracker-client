// react
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

// hooks
import useGetTimeData from "../../../hooks/useGetTimeData";

const LiveTime = ({
  text = "Time",
  format12Hours = false,
  modifyClasses = "",
  noText = false,
}) => {
  const { getTime, padTime } = useGetTimeData();
  const [time, setTime] = useState(null);
  const [partOfDay, setPartOfDay] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      const { hours, minutes, seconds, partOfDay } = getTime();
      setPartOfDay(partOfDay);

      const timeDataArr = [hours, minutes, seconds].map((el) => padTime(el));

      setTime({
        hours: timeDataArr[0],
        minutes: timeDataArr[1],
        seconds: timeDataArr[2],
      });

      clearTimeout(timer);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [getTime, padTime, time]);

  if (time) {
    return (
      <p className={`text-center ${modifyClasses}`}>
        {!noText && text}: {time.hours}:{time.minutes}:{time?.seconds}{" "}
        {format12Hours && partOfDay}
      </p>
    );
  }
};

LiveTime.propTypes = {
  text: PropTypes.string,
  noText: PropTypes.bool,
  format12Hours: PropTypes.bool,
  modifyClasses: PropTypes.string,
};

export default LiveTime;
