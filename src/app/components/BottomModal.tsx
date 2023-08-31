"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

interface BottomModalProps {
  text: string;
  onNextClick: () => void;
}

const BottomModal: React.FC<BottomModalProps> = ({ text, onNextClick }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextAbled, setNextAbled] = useState(false);
  const [typingInProgress, setTypingInProgress] = useState(true);

  // 새로운 텍스트가 전달될 때마다,
  // 타이핑 효과를 다시 시작하도록 처리
  useEffect(() => {
    setCurrentText("");
    setCurrentIndex(0);
    setNextAbled(false);
    setTypingInProgress(true);

    // TTS 실행
    if (text) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 2;
      window.speechSynthesis.speak(utterance);
    }
  }, [text]);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      setNextAbled(true);
      setTypingInProgress(false);
    }
  }, [currentIndex, text]);

  const handleClick = () => {
    if (!typingInProgress) {
      setCurrentIndex(text.length);
      setCurrentText(text);
      onNextClick();
      setTypingInProgress(true);
    }
  };

  return (
    <div
      className="absolute w-11/12 h-126 bottom-20 left-1/2 transform -translate-x-1/2"
      onClick={handleClick}
    >
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
        {/* 뒤로가기 버튼 */}
        <div
          onClick={() => console.log("뒤로가기")}
          className="w-32 h-32 absolute -top-38 right-0 bg-brown-700 rounded-10 flex justify-center items-center"
        >
          <Image
            src="/icons/back_arrow.png"
            width={25}
            height={25}
            alt="뒤로가기 아이콘"
            className="ml-1 mb-1"
          />
        </div>
        {/* 텍스트 */}
        <p
          className="h-full py-18 px-20 text-16 font-500 text-brown-700 text-center whitespace-pre-line"
          onClickCapture={handleClick}
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
            onClickCapture={handleClick}
          />
        )}
      </div>
    </div>
  );
};

export default BottomModal;
