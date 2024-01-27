// react
import { useCallback } from "react";

const useGetTimeData = () => {
  const getTime = useCallback(() => {
    const dateObject = new Date();
    const hours = dateObject.getHours();
    const partOfDay = hours < 12 ? "AM" : "PM";
    const minutes = dateObject.getMinutes();
    const seconds = dateObject.getSeconds();

    return { hours, partOfDay, minutes, seconds };
  }, []);

  const getDate = useCallback(() => {
    const dateObject = new Date();
    const dayOfTheMonth = dateObject.getDate();
    const month = dateObject.getMonth() + 1;
    const year = dateObject.getFullYear();

    return { dayOfTheMonth, month, year };
  }, []);

  const padTime = useCallback((data = 0) => {
    return data < 10 ? data.toString().padStart(2, "0") : data;
  }, []);

  return { getTime, getDate, padTime };
};

export default useGetTimeData;
