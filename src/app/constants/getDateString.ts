export function getDateString(selectedDate: Date) {
  var _year = selectedDate.getFullYear();
  var _month = String(selectedDate.getMonth() + 1).padStart(2, "0");
  var _day = String(selectedDate.getDate()).padStart(2, "0");

  return _year + "년 " + _month + "월 " + _day + "일";
}
