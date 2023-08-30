import TodoTab from "../components/todo/TodoTab";

export default function PlanSettingPage() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="w-full grow">D-DAY</div>
      <TodoTab>
        {/* 버튼 */}
        <div className="w-auto h-50 mx-30 mb-15 bg-brown-700 rounded-10">
          <h1 className="text-18 font-500 text-ivory text-center leading-50">
            결혼 준비하러 가기
          </h1>
        </div>
      </TodoTab>
    </div>
  );
}
