"use client";

import React, { useState } from "react";
import SmallTodoItem from "./SmallTodoItem";
import Image from "next/image";
import { bigTodo, smallTodo } from "../../../../public/data/todo";
import useTodoStore from "@/app/store/todoStore";

interface BigTodoItemProps {
  index: number;
}

const BigTodoItem: React.FC<BigTodoItemProps> = ({ index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { bigTodoState, smallTodoState } = useTodoStore();

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
            {smallTodo[index].map((_, i) => (
              <SmallTodoItem key={i} bigIndex={index} smallIndex={i} />
            ))}
          </div>
        </div>
      ) : (
        <div
          onClick={() => setIsOpen(true)}
          className="w-full h-50 bg-ivory rounded-10 flex flex-row justify-between items-center px-15"
        >
          <h1 className="text-18 font-500 text-brown-700">{bigTodo[index]}</h1>
          {bigTodoState[index] === "in progress" ? (
            <div className="w-25 h-25 relative">
              <Image
                src="/images/flower_beige.png"
                fill={true}
                alt="꽃"
                className="object-contain"
              />
              <div
                className="w-25 absolute bottom-0"
                style={{
                  height:
                    (smallTodoState[index].filter((done) => done).length /
                      smallTodoState[index].length) *
                    25,
                }}
              >
                <Image
                  src="/images/flower_pink.png"
                  fill={true}
                  alt="꽃"
                  className="object-cover object-bottom"
                />
              </div>
            </div>
          ) : (
            <div className="w-25 h-25 relative">
              <Image
                src={
                  bigTodoState[index] === "todo"
                    ? "/images/flower_beige.png"
                    : "/images/flower_pink.png"
                }
                fill={true}
                alt="꽃"
                className="object-contain"
              />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default BigTodoItem;
