import Link from "next/link";

export default function SimulationPage() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Link href="/simulation/weddinghall">
        <div>웨딩홀 고르기</div>
      </Link>
      <Link href="/simulation/studio">
        <div>스튜디오 고르기</div>
      </Link>
      <Link href="/simulation/dress">
        <div>드레스 고르기</div>
      </Link>
      <Link href="/simulation/makeup">
        <div>메이크업 고르기</div>
      </Link>
      <Link href="/simulation/invitation">
        <div>모바일 청첩장 만들기</div>
      </Link>
      <Link href="/simulation/writing">
        <div>예식 관련 문구 쓰기</div>
      </Link>
    </div>
  );
}
