// react
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

// hooks
import useGetTimeData from "../../../hooks/useGetTimeData";

const LiveTime = ({ modifyClasses = "" }) => {
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

  return (
    <div className={modifyClasses}>
      {time && (
        <p className="text-center text-2xl font-semibold">
          Current Time: {time.hours}:{time.minutes}:{time?.seconds} {partOfDay}
        </p>
      )}
    </div>
  );
};

LiveTime.propTypes = {
  modifyClasses: PropTypes.string,
};

export default LiveTime;
