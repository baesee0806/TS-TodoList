import React, { useEffect, useState } from "react";
import axios from "axios";

const Body: React.FC = () => {
  const [list, setList] = useState<any>([]);
  const getList = async () => {
    const Lists = await axios.get("http://localhost:3010/List");
    setList(Lists.data);
  };
  useEffect(() => {
    getList();
  }, []);
  console.log(list);

  return (
    <div className="flex flex-col w-4/5 my-0 mx-auto h-screen bg-gray-400">
      <div className="flexw-100 h-1/2 bg-violet-300">
        <h1 className=" text-2xl ml-4">Working....</h1>
        {list.map((el: any) => {
          return (
            <div className="flex justify-between text-1xl ml-4 mt-4 border w-24 text-center">
              <p>{el?.text}</p>
              <button>삭제</button>
            </div>
          );
        })}
      </div>

      <div className="w-100 h-1/2 bg-violet-400">
        <h1 className=" text-2xl ml-4">Done...</h1>
        <div>
          <p className="text-1xl ml-4 mt-4 border w-24 text-center">conetnt</p>
        </div>
      </div>
    </div>
  );
};

export default Body;
