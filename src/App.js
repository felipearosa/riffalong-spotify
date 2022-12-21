import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Fragment } from "react";

import MainHeader from "./components/MainHeader";
import Home from "./Home";
import Song from "./pages/Song";


function App() {
  return (
    <Fragment>
      <MainHeader />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/song" exact element={<Song />} />
      </Routes>
    </Fragment>
  );
}

export default App;
