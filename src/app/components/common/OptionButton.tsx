"use client";

import { useState } from "react";

interface OptionButtonProps {
  text: string;
  onClick: () => void;
}

const OptionButton: React.FC<OptionButtonProps> = ({ text, onClick }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseDown={() => setClicked(true)}
      onMouseUp={() => setClicked(false)}
      onMouseLeave={() => setClicked(false)}
      onTouchStart={() => setClicked(true)}
      onTouchEnd={() => setClicked(false)}
      onTouchCancel={() => setClicked(false)}
    >
      {clicked ? (
        <div className="w-11/12 h-50 mx-auto rounded-10 bg-pink-200 border-brown-700 border-1.5">
          <h1 className="text-18 font-500 text-brown-700 text-center leading-50">
            {text}
          </h1>
        </div>
      ) : (
        <div className="w-11/12 h-50 mx-auto rounded-10 bg-white/80 border-brown-700 border-1.5">
          <h1 className="text-18 font-500 text-brown-700 text-center leading-50">
            {text}
          </h1>
        </div>
      )}
    </div>
  );
};

export default OptionButton;
