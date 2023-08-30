"use client";

import BottomModal from "@/app/components/BottomModal";
import SimpleBottomModal from "@/app/components/SimpleBottomModal";
import OptionButton from "@/app/components/common/OptionButton";
import CarouselModal from "@/app/components/simulation/CarouselModal";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function WeddinghallPage() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(0);

  const goNextPage = () => {
    if (currentPage === pages.length - 1) {
      router.push("/todo");
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  const goPrevPage = () => {
    if (currentPage === 0) {
      router.push("/simulation");
    } else {
      setCurrentPage(currentPage - 1);
    }
  };

  // page components
  const FirstPage = () => (
    <>
      <Image
        src="/images/lily_big_front.png"
        width={160}
        height={160}
        alt="캐릭터 이미지"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-flooat"
      />
      <SimpleBottomModal
        text="안녕하세요~ 머ㅓ머머~~ 웨딩홀 고르러 가볼까요~"
        onNextClick={goNextPage}
        onBackClick={goPrevPage}
      />
    </>
  );

  const SecondPage = () => (
    <>
      <OptionButton
        text="버튼이에요"
        onClick={() => console.log("누르지마세요")}
      />
      <CarouselModal list={["1", "2", "3"]} />
      <BottomModal text="고르세요" onNextClick={goNextPage} />
    </>
  );

  const pages = [<FirstPage key={1} />, <SecondPage key={2} />];

  return (
    <div className="w-screen h-screen bg-brown-200">{pages[currentPage]}</div>
  );
}
