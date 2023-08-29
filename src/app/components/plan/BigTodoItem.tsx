"use client";

import React, { useState } from "react";
import SmallTodoItem from "./SmallTodoItem";
import Image from "next/image";

interface BigTodoItemProps {
  text: string;
  // todos: string[];
}

const BigTodoItem: React.FC<BigTodoItemProps> = ({ text }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen ? (
        <div className="w-full h-auto bg-ivory rounded-10 flex flex-col px-15 pb-12">
          <h1
            onClick={() => setIsOpen(false)}
            className="text-18 font-500 text-brown-700 leading-50"
          >
            {text}
          </h1>
          <div className="flex flex-col space-y-6">
            <SmallTodoItem text="상견례 날짜 확인" />
            <SmallTodoItem text="상견례 장소 예약" />
            <SmallTodoItem text="상견례 선물 주문" />
            <SmallTodoItem text="숙소 예약" />
          </div>
        </div>
      ) : (
        <div
          onClick={() => setIsOpen(true)}
          className="w-full h-50 bg-ivory rounded-10 flex flex-row justify-between items-center px-15"
        >
          <h1 className="text-18 font-500 text-brown-700">{text}</h1>
          <Image
            src="/images/flower_pink.png"
            width={25}
            height={25}
            alt="꽃"
          />
        </div>
      )}
    </>
  );
};

export default BigTodoItem;
