"use client";

import Image from "next/image";
import React, { useState } from "react";

interface TodoTabProps {
  children: React.ReactNode; // children의 타입을 React.ReactNode로 지정
}

const TodoTab: React.FC<TodoTabProps> = ({ children }) => {
  const [currentTab, setCurrentTab] = useState("todo");

  const handleTabClick = (clicked: string) => {
    setCurrentTab(clicked);
  };

  return (
    <div className="w-full h-4/5 bg-beige relative flex flex-col">
      <div
        id="tab-container"
        className="h-33 absolute -top-32 left-16 flex flex-row space-x-7"
      >
        {currentTab == "todo" ? (
          <div className="w-72 h-33 bg-beige rounded-t-10 text-16 font-700 text-brown-700 text-center leading-38">
            시작 전
          </div>
        ) : (
          <div
            onClick={() => handleTabClick("todo")}
            className="w-72 h-33 bg-brown-300 rounded-t-10 text-16 font-700 text-brown-600 text-center leading-38"
          >
            시작 전
          </div>
        )}
        {currentTab == "in progress" ? (
          <div className="w-72 h-33 bg-beige rounded-t-10 text-16 font-700 text-brown-700 text-center leading-38">
            진행 중
          </div>
        ) : (
          <div
            onClick={() => handleTabClick("in progress")}
            className="w-72 h-33 bg-brown-300 rounded-t-10 text-16 font-700 text-brown-600 text-center leading-38"
          >
            진행 중
          </div>
        )}
        {currentTab == "done" ? (
          <div className="w-72 h-33 bg-beige rounded-t-10 text-16 font-700 text-brown-700 text-center leading-38">
            완료
          </div>
        ) : (
          <div
            onClick={() => handleTabClick("done")}
            className="w-72 h-33 bg-brown-300 rounded-t-10 text-16 font-700 text-brown-600 text-center leading-38"
          >
            완료
          </div>
        )}
      </div>
      {children}
    </div>
  );
};

export default TodoTab;
