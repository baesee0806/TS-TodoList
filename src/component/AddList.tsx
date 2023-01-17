import React from "react";

const AddList: React.FC = () => {
  return (
    <div className="flex justify-around items-center w-4/5 h-16 my-0 mx-auto bg-orange-200">
      <div className=" w-auto flex item-center ">
        <label className=" text-3xl">내용</label>
        <input type="text" className=" ml-3 rounded-lg" />
      </div>
      <div className=" text-xl bg-blue-400 w-24 text-center rounded-lg">
        <button className="w-24 h-auto">전송</button>
      </div>
    </div>
  );
};

export default AddList;
