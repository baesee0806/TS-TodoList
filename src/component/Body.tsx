import React from "react";

const Body: React.FC = () => {
  return (
    <div className="flex flex-col w-4/5 my-0 mx-auto h-screen bg-gray-400">
      <div className="w-100 h-1/2 bg-violet-300">
        <h1 className=" text-2xl ml-4">Working....</h1>
        <div>
          <p className="text-1xl ml-4 mt-4 border w-24 text-center">conetnt</p>
        </div>
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
