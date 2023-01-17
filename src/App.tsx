import React from "react";
import AddList from "./component/AddList";
import Body from "./component/Body";
import Header from "./component/Header";

const App: React.FC = () => {
  return (
    <div>
      <Header></Header>
      <AddList></AddList>
      <Body></Body>
    </div>
  );
};

export default App;
