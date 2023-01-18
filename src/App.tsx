import React from "react";
import AddList from "./component/AddList";
import Body from "./component/Body";
import Header from "./component/Header";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Header></Header>
      <AddList></AddList>
      <Body></Body>
    </QueryClientProvider>
  );
};

export default App;
