import { create } from "zustand";
import { bigTodo, smallTodo } from "../../../public/data/todo";

interface TodoState {
  bigTodoState: string[];
  smallTodoState: boolean[][];
  doo: (bigIndex: number, smallIndex: number) => void;
  undo: (bigIndex: number, smallIndex: number) => void;
}

const useTodoStore = create<TodoState>()((set) => ({
  bigTodoState: bigTodo.map((_) => "todo"),
  smallTodoState: smallTodo.map((arr) => arr.map((_) => false)),

  doo: (bigIndex, smallIndex) =>
    set((state) => {
      const newSmall = state.smallTodoState;
      newSmall[bigIndex][smallIndex] = true;
      if (newSmall[bigIndex].every((done) => done)) {
        const newBig = state.bigTodoState;
        newBig[bigIndex] = "done";
        return { bigTodoState: newBig, smallTodoState: newSmall };
      } else if (newSmall[bigIndex].filter((done) => done).length === 1) {
        const newBig = state.bigTodoState;
        newBig[bigIndex] = "in progress";
        return { bigTodoState: newBig, smallTodoState: newSmall };
      } else {
        return { smallTodoState: newSmall };
      }
    }),

  undo: (bigIndex, smallIndex) =>
    set((state) => {
      const newSmall = state.smallTodoState;
      newSmall[bigIndex][smallIndex] = false;
      if (newSmall[bigIndex].every((done) => !done)) {
        const newBig = state.bigTodoState;
        newBig[bigIndex] = "todo";
        return { bigTodoState: newBig, smallTodoState: newSmall };
      } else if (state.bigTodoState[bigIndex] === "done") {
        const newBig = state.bigTodoState;
        newBig[bigIndex] = "in progress";
        return { bigTodoState: newBig, smallTodoState: newSmall };
      } else {
        return { smallTodoState: newSmall };
      }
    }),
}));

export default useTodoStore;
