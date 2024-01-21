const useConvertSecondsToHMS = (givenSeconds) => {
  if (isNaN(givenSeconds) || givenSeconds < 0) {
    return "Invalid input. Please provide a non-negative number data type.";
  }

  const hours = Math.floor(givenSeconds / 3600);
  const minutes = Math.floor((givenSeconds % 3600) / 60);
  const seconds = Math.floor(givenSeconds % 60);

  const timesArr = [hours, minutes, seconds].map((el) => {
    if (el < 10) {
      return el.toString().padStart(2, "0");
    }

    return el.toString();
  });

  return {
    hours: timesArr[0],
    minutes: timesArr[1],
    seconds: timesArr[2],
  };
};

export default useConvertSecondsToHMS;
