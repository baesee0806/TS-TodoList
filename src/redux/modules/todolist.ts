// const ADDLiST = "counter/ADDLiST" as const;
// const DELETELIST = "counter/DELETELIST" as const;
// const TOGGLELIST = "counter/TOGGLELIST" as const;

// export const addList = (payload: any) => ({
//   type: ADDLiST,
//   payload,
// });

// export const deleteList = (payload: any) => ({
//   type: DELETELIST,
//   payload,
// });

// export const toggleList = (payload: any) => ({
//   type: TOGGLELIST,
//   payload,
// });

// type ListAction =
//   | ReturnType<typeof addList>
//   | ReturnType<typeof deleteList>
//   | ReturnType<typeof toggleList>;

// let id: number = 0;
// export type ListState = {
//   id: number;
//   isDone: boolean;
//   content: string;
// };
// const initialState: ListState = {
//   id: id++,
//   isDone: false,
//   content: "",
// };

// function TodoList(state: ListState = initialState, action: ListAction) {
//   switch (action.type) {
//     case ADDLiST:
//     // return {};
//     case DELETELIST:
//     // return {};
//     case TOGGLELIST:
//     // return {};
//   }
// }

// export default TodoList;

// 액션 타입 선언
const ADD_TODO = "todos/ADD_TODO" as const;
const TOGGLE_TODO = "todos/TOGGLE_TODO" as const;
const REMOVE_TODO = "todos/REMOVE_TODO" as const;

let nextId = 1;

// 액션 생성 함수
export const addTodo = (text: string) => ({
  type: ADD_TODO,
  payload: {
    id: nextId++,
    text,
  },
});

export const toggleTodo = (id: number) => ({
  type: TOGGLE_TODO,
  payload: id,
});

export const removeTodo = (id: number) => ({
  type: REMOVE_TODO,
  payload: id,
});

// 모든 액션 객체들에 대한 타입 준비
type TodosAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof toggleTodo>
  | ReturnType<typeof removeTodo>;

// 상태에서 사용 할 할 일 항목 데이터 타입 정의
export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

// 이 모듈에서 관리할 상태는 Todo 객체로 이루어진 배열
export type TodosState = Todo[];

// 초기 상태 선언
const initialState: TodosState = [];

// 리듀서 작성
function todos(
  state: TodosState = initialState,
  action: TodosAction
): TodosState {
  switch (action.type) {
    case ADD_TODO:
      return state.concat({
        id: action.payload.id,
        text: action.payload.text,
        done: false,
      });
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
}

export default todos;
