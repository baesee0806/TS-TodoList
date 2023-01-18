import axios from "axios";

const getLists = async () => {
  const response = await axios.get("http://localhost:3010/List");
  return response;
};

const addLists = async (newList: any) => {
  await axios.post("http://localhost:3010/List", newList);
};
