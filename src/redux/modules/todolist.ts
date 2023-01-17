import { isContentEditable } from "@testing-library/user-event/dist/utils";

const ADDLiST = "counter/ADDLiST" as const;
const DELETELIST = "counter/DELETELIST" as const;
const TOGGLELIST = "counter/TOGGLELIST" as const;
const UPDATELELIST = "counter/UPDATELELIST" as const;

export const addList = (payload: any) => ({
  type: ADDLiST,
  payload,
});

export const deleteList = (payload: any) => ({
  type: DELETELIST,
  payload,
});

export const toggleList = (payload: any) => ({
  type: TOGGLELIST,
  payload,
});

export const updateList = (payload: any) => ({
  type: UPDATELELIST,
  payload,
});

type ListAction =
  | ReturnType<typeof addList>
  | ReturnType<typeof deleteList>
  | ReturnType<typeof toggleList>
  | ReturnType<typeof updateList>;

let id: number = 0;
type ListState = {
  id: number;
  isDone: boolean;
  content: string;
};
const initialState: ListState = {
  id: id++,
  isDone: false,
  content: "",
};

function TodoList(
  state: ListState = initialState,
  action: ListAction
): ListState {
  switch (action.type) {
    case ADDLiST:
      return {};
    case DELETELIST:
      return {};
    case TOGGLELIST:
      return {};
    case UPDATELELIST:
      return {};
  }
}

export default TodoList;
