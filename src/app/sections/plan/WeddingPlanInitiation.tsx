"use client";
import React, { useState, useEffect } from "react";
import BottomModal from "@/app/components/BottomModal";

export default function WeddingPlanInitiation() {
  const [processStatus, setProcessStatus] = useState<number>(0);

  const handleNextClick = () => {
    setProcessStatus(processStatus + 1);
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
          text="안녕하세요! 저는 당신의 AI 웨딩 플래너 릴리에요!"
          onNextClick={handleNextClick}
        />
      );
      break;
    case 2:
      process = (
        <BottomModal
          key="step2"
          text="예식 예정일을 정하셨을까요?"
          onNextClick={handleNextClick}
        />
      );
      break;
    case 3:
      process = (
        <BottomModal
          key="step3"
          text="생각하고 있는 예식 장소는 어떻게 되나요?"
          onNextClick={handleNextClick}
        />
      );
      break;
    case 4:
      process = (
        <BottomModal
          key="step4"
          text="입주 예정일은 혹시 결정하셨을까요?"
          onNextClick={handleNextClick}
        />
      );
      break;
    default:
      break;
  }

  return <div>{process}</div>;
}
