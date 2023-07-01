export const getDateFormat = () => {
  const date = new Date();
  const currentMonth = String(date.getMonth()).padStart(2, "0");
  const currentDate = String(date.getDate()).padStart(2, "0");
  const currentHour = String(date.getHours()).padStart(2, "0");
  const currentMinute = String(date.getMinutes()).padStart(2, "0");
  const currentTime = `${date.getFullYear()}/${currentMonth}/${currentDate} ${currentHour}시 ${currentMinute}분`;
  return currentTime;
};
