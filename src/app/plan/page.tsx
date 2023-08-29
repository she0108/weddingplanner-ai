import BigTodoItem from "../components/plan/BigTodoItem";
import TodoTab from "../components/plan/TodoTab";

export default function PlanSettingPage() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="w-full grow">D-DAY</div>
      <TodoTab>
        {/* 리스트 */}
        <div className="w-auto grow m-30 mb-20 space-y-11 overflow-y-scroll">
          <BigTodoItem text="상견례" />
          <BigTodoItem text="웨딩홀" />
          <BigTodoItem text="결혼식 부케, 코사지, 부토니에" />
          <BigTodoItem text="본식 메이크업" />
          <BigTodoItem text="본식 스냅" />
          <BigTodoItem text="양가어머님 한복" />
          <BigTodoItem text="양가아버님 예복" />
          <BigTodoItem text="신부 드레스" />
          <BigTodoItem text="신랑 예복" />
          <BigTodoItem text="헬퍼 이모님 섭외" />
          <BigTodoItem text="결혼반지" />
          <BigTodoItem text="사회자 축가 섭외" />
          <BigTodoItem text="사회자 축가 섭외" />
          <BigTodoItem text="식전 영상 제작" />
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
