"use client";

import React, { useState } from "react";
import SmallTodoItem from "./SmallTodoItem";
import Image from "next/image";
import { bigTodo, smallTodo } from "../../../../public/data/todo";

interface BigTodoItemProps {
  index: number;
}

const BigTodoItem: React.FC<BigTodoItemProps> = ({ index }) => {
  const [isOpen, setIsOpen] = useState(false);

  console.log("BigTodoItem", index);

  return (
    <>
      {isOpen ? (
        <div className="w-full h-auto bg-ivory rounded-10 flex flex-col px-15 pb-12">
          <h1
            onClick={() => setIsOpen(false)}
            className="text-18 font-500 text-brown-700 leading-50"
          >
            {bigTodo[index]}
          </h1>
          <div className="flex flex-col space-y-6">
            {smallTodo[index].map((text, index) => (
              <SmallTodoItem key={index} text={text} />
            ))}
          </div>
        </div>
      ) : (
        <div
          onClick={() => setIsOpen(true)}
          className="w-full h-50 bg-ivory rounded-10 flex flex-row justify-between items-center px-15"
        >
          <h1 className="text-18 font-500 text-brown-700">{bigTodo[index]}</h1>
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
