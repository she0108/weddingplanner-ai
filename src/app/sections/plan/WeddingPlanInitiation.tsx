"use client";
import React, { useState, useEffect } from "react";
import BottomModal from "@/app/components/BottomModal";
import OptionButton from "@/app/components/common/OptionButton";
import DatetimePicker from "@/app/components/plan/DatetimePicker";

export default function WeddingPlanInitiation() {
  const [processStatus, setProcessStatus] = useState<number>(0);
  const [weddingDate, setWeddingDate] = useState<Date>();
  const [remainedDays, setRemainedDays] = useState<number>();
  const [moveinDate, setMoveinDate] = useState<Date>();

  // 클릭: 다음 단계 함수
  const handleNextClick = () => {
    setProcessStatus(processStatus + 1);
  };

  // 클릭: No Action 함수
  const handleNoActionClick = () => {
    console.log("클릭 되었습니다.");
  };

  let process;
  switch (processStatus) {
    case 0:
      process = (
        <BottomModal key="step0" text="" onNextClick={handleNextClick} />
      );
      break;
    case 1:
      process = (
        <BottomModal
          key="step1"
          text="안녕하세요! 저는 당신의 AI 웨딩 플래너 릴리에요! 예비 신혼부부 여러분의 꼼꼼하고 완벽한 신혼준비, 저 릴리가 열심히 도와드릴게요!"
          onNextClick={handleNextClick}
        />
      );
      break;
    case 2:
      process = (
        <>
          <DatetimePicker
            onNextClick={handleNextClick}
            concerningText="아직 고민중이야..."
            setDate={setWeddingDate}
            setRemainedDays={setRemainedDays}
          />
          <BottomModal
            key="step2"
            text="그 전에 몇 가지 간단하게 여러분께 질문 드릴게요. 예식 예정일을 정하셨을까요?"
            onNextClick={handleNoActionClick}
          />
        </>
      );
      break;
    case 3:
      process = (
        <>
          {weddingDate ? (
            <BottomModal
              key="step3"
              text={`결혼식까지 ${remainedDays}일 남으셨네요. 같이 열심히 준비해봅시다! 생각하고 있는 예식 장소는 어떻게 되나요?`}
              onNextClick={handleNextClick}
            />
          ) : (
            <BottomModal
              key="step3"
              text="아직 정하시지는 않으셨군요. 차차 같이 정해보아요. 생각하고 있는 예식 장소는 어떻게 되나요?"
              onNextClick={handleNextClick}
            />
          )}
        </>
      );
      break;
    case 4:
      process = (
        <>
          <DatetimePicker
            onNextClick={handleNextClick}
            concerningText="아직 결정 못했어.."
            setDate={setMoveinDate}
          />
          <BottomModal
            key="step4"
            text="입주 예정일은 혹시 결정하셨을까요?"
            onNextClick={handleNoActionClick}
          />
        </>
      );
      break;
    default:
      break;
  }

  return <div>{process}</div>;
}
