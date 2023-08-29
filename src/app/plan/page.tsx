import BigTodoItem from "../components/plan/BigTodoItem";
import TodoTab from "../components/plan/TodoTab";

const bigTodoNumber = 17;

export default function PlanSettingPage() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="w-full grow">D-DAY</div>
      <TodoTab>
        {/* 리스트 */}
        <div className="w-auto grow m-30 mb-20 space-y-11 overflow-y-scroll">
          {Array.from({ length: bigTodoNumber }, (_, index) => index).map(
            (i) => (
              <BigTodoItem key={i} index={i} />
            )
          )}
        </div>
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
