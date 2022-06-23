import "./App.css";
import TopNavigation from "./components/TopNavigation";
import DropdownButton from "./components/DropdownButtonLocation";
import FloatingButton from "./components/FloatingButton";
import BottomNavigation from "./components/BottomNavigation";
import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import ListOfItems from "./components/ListOfItems";

function App() {
  return (
    <div>
      <TopNavigation/>
      <DropdownButton/>
      <ListOfItems/>
      <FloatingButton/>
      <BottomNavigation/>
    </div>
  );
}
export default App;
