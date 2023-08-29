"use client";

import useTodoStore from "@/app/store/todoStore";
import Image from "next/image";
import React, { useState } from "react";
import { smallTodo } from "../../../../public/data/todo";

interface SmallTodoItemProps {
  bigIndex: number;
  smallIndex: number;
}

const SmallTodoItem: React.FC<SmallTodoItemProps> = ({
  bigIndex,
  smallIndex,
}) => {
  const { smallTodoState, doo, undo } = useTodoStore();

  const handleClick = () => {
    if (smallTodoState[bigIndex][smallIndex]) {
      undo(bigIndex, smallIndex);
    } else {
      doo(bigIndex, smallIndex);
    }
  };

  return (
    <div className="w-auto h-22 flex flex-row justify-start">
      <div
        onClick={handleClick}
        className="w-22 h-22 flex justify-center items-center"
      >
        <Image
          src={
            smallTodoState[bigIndex][smallIndex]
              ? "/images/flower_pink.png"
              : "/images/flower_beige.png"
          }
          width={18}
          height={18}
          alt="꽃"
        />
      </div>
      <h1 className="text-16 font-400 text-brown-700 leading-22 ml-5">
        {smallTodo[bigIndex][smallIndex]}
      </h1>
    </div>
  );
};

export default SmallTodoItem;
