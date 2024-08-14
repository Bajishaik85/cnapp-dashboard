// App.js
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCategories } from "./store";
import Dashboard from "./Components/Dashboard";
import AddWidget from "./Components/AddWidget";
import { data } from "./Utils/jsonData";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCategories(data.categories));
  }, [dispatch]);

  return (
    <div>
      <Dashboard />
      <AddWidget />
    </div>
  );
};

export default App;
