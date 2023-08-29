"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

interface BottomModalProps {
  text: string;
}

const BottomModal: React.FC<BottomModalProps> = ({ text }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextAbled, setNextAbled] = useState(false);

  // 타이핑 효과
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 50);

      return () => clearTimeout(timeout);
    } else {
      setNextAbled(true);
    }
  }, [currentIndex, text]);

  const handleClick = () => {
    // 타이핑 효과 스킵
    if (currentText != text) {
      setCurrentIndex(text.length);
      setCurrentText(text);
      return;
    }
    // 다음 화면
    if (nextAbled) {
      console.log("다음 대사");
    }
  };

  return (
    <div className="absolute w-11/12 h-126 bottom-20 left-1/2 transform -translate-x-1/2 ">
      <div className="relative w-full h-full bg-white/80 rounded-10 border-brown-700 border-1.5">
        {/* 캐릭터 */}
        <div className="w-auto h-95 absolute -top-75 left-6 animate-float">
          {true ? (
            <Image
              src="/images/lily_small_front.png"
              width={99}
              height={95}
              alt="캐릭터 정면"
            />
          ) : (
            <Image
              src="/images/lily_small_side.png"
              width={126}
              height={95}
              alt="캐릭터 측면"
            />
          )}
        </div>
        {/* 텍스트 */}
        <p
          onClick={handleClick}
          className="h-full py-18 px-20 text-16 font-500 text-brown-700 text-center whitespace-pre-line"
        >
          {currentText}
        </p>
        {/* 다음 버튼 */}
        {nextAbled && (
          <Image
            src="/icons/next_button.svg"
            width={15}
            height={9}
            alt="다음 버튼"
            className="absolute right-20 bottom-18 animate-pulse"
          />
        )}
      </div>
    </div>
  );
};

export default BottomModal;
