"use client";
import React, { useState } from "react";
import Image from "next/image";
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import ko from "date-fns/locale/ko";
import "react-datepicker/dist/react-datepicker.css";

import { getDateString } from "@/app/constants/getDateString";

import checkButton from "public/icons/check_button.png";
import checkButtonDisabled from "public/icons/check_button_disabled.png";

interface DatetimePickerProps {
  onNextClick: () => void;
  concerningText: string;
  setDate: (date: Date) => void;
  setRemainedDays?: (remainedDays: number) => void;
}

const DatetimePicker: React.FC<DatetimePickerProps> = ({
  onNextClick,
  concerningText,
  setDate,
  setRemainedDays,
}) => {
  registerLocale("ko", ko); // DatePicker Locale 설정

  const startDate = new Date(2024, 0, 1); // 초기값: 2024년 1월 1일
  const currentDate = new Date();
  const [selectedDate, setSelectedDate] = useState<Date>(startDate); // 선택한 날짜
  const selectedDateInString = getDateString(selectedDate); // 선택한 날짜 문자열로 변환

  // 남은 날짜 계산 함수
  const calculateRemainedDays = () => {
    const timeDifference = selectedDate.getTime() - currentDate.getTime(); // 날짜 간 차이 구하기
    const remainedDays = Math.ceil(timeDifference / (1000 * 3600 * 24)); // 밀리초를 일수로 변환
    return remainedDays;
  };

  // 날짜 선택 시 함수
  const handleOnChange = (date: Date) => {
    setSelectedDate(date);
    console.log(date);
  };

  // 버튼 클릭 시 함수
  const handleCheckButtonClick = () => {
    setDate(selectedDate);
    const remainedDays = calculateRemainedDays();
    if (setRemainedDays && remainedDays !== undefined) {
      setRemainedDays(remainedDays);
    }
    onNextClick();
  };

  // 비활성화 버튼 클릭 시 함수
  const handleDisabledCheckButtonClick = () => {
    console.log("지금 날짜보다 이전의 날짜를 선택하셨습니다.");
  };

  return (
    <div id="date-picker-wrapper">
      <div className="absolute top-40 left-1/2 transform -translate-x-1/2 flex flex-col justify-center items-center gap-y-10">
        <DatePicker
          locale="ko"
          selected={selectedDate}
          selectsStart
          disabledKeyboardNavigation
          inline
          open={true}
          onChange={(date) => {
            if (date !== null) {
              handleOnChange(date);
            }
          }}
          dateFormat="yyyy년 MM월 dd일"
          className="w-240 border rounded py-6 shadow-md border-brown-700 bg-white/80 text-center"
        />
        {selectedDate < currentDate ? (
          <div
            className="relative w-full py-5 rounded-6 bg-gray-100 text-center flex flex-row justify-center items-center hover:bg-gray-200"
            onClick={handleDisabledCheckButtonClick}
          >
            <h4 className="text-16">{selectedDateInString}</h4>
            <button
              onClick={handleDisabledCheckButtonClick}
              className="absolute text-blue-500 hover:underline right-6"
              style={{ height: "28px", padding: 1 }}
            >
              <Image
                src={checkButtonDisabled}
                alt="비활성화 버튼"
                style={{ height: "100%", objectFit: "contain" }}
              />
            </button>
          </div>
        ) : (
          <div
            className="relative w-full py-5 rounded-6 bg-gray-100 text-center flex flex-row justify-center items-center hover:bg-white"
            onClick={handleCheckButtonClick}
          >
            <h4 className="text-16">{selectedDateInString}</h4>
            <button
              onClick={handleCheckButtonClick}
              className="absolute text-blue-500 hover:underline right-6"
              style={{ height: "28px", padding: 1 }}
            >
              <Image
                src={checkButton}
                alt="확인 버튼"
                style={{ height: "100%", objectFit: "contain" }}
              />
            </button>
          </div>
        )}
        <div className="relative w-full py-5 rounded-6 bg-gray-200 text-center flex flex-row justify-center items-center hover:bg-gray-300">
          <h4 className="text-16">{concerningText}</h4>
        </div>
      </div>
    </div>
  );
};

export default DatetimePicker;
