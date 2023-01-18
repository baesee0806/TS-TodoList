import React, { ChangeEvent, useState } from "react";

import axios from "axios";
const AddList: React.FC = () => {
  const [list, setList] = useState<any>([]);
  const [text, setText] = useState<string>("");
  let id = 0;
  interface newListType {
    id: number;
    text: string;
    isDone: boolean;
  }

  // const getLists = async () => {
  //   const response = await axios.get("http://localhost:3010/List");
  //   return response;
  // };

  const addLists = async () => {
    const newList: newListType = {
      id: id++,
      text,
      isDone: false,
    };
    await axios.post("http://localhost:3010/List", newList);
    setText("");
  };

  return (
    <div className="flex justify-around items-center w-4/5 h-16 my-0 mx-auto bg-orange-200">
      <div className=" w-auto flex item-center ">
        <label className=" text-3xl">내용</label>
        <input
          type="text"
          className=" ml-3 rounded-lg"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>
      <div className=" text-xl bg-blue-400 w-24 text-center rounded-lg">
        <button className="w-24 h-auto" onClick={addLists}>
          전송
        </button>
      </div>
    </div>
  );
};

export default AddList;
