"use client";

import Image from "next/image";
import React, { useState } from "react";

interface SmallTodoItemProps {
  text: string;
}

const SmallTodoItem: React.FC<SmallTodoItemProps> = ({ text }) => {
  const [isDone, setIsDone] = useState(false);

  return (
    <div className="w-auto h-22 flex flex-row justify-start">
      <div
        onClick={() => setIsDone(!isDone)}
        className="w-22 h-22 flex justify-center items-center"
      >
        <Image
          src={isDone ? "/images/flower_pink.png" : "/images/flower_beige.png"}
          width={18}
          height={18}
          alt="꽃"
        />
      </div>
      <h1 className="text-16 font-400 text-brown-700 leading-22 ml-5">
        {text}
      </h1>
    </div>
  );
};

export default SmallTodoItem;
