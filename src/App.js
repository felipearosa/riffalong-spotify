import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Fragment } from "react";

import MainHeader from "./components/Layout/MainHeader";
import Home from "./Home";
import Song from "./pages/Song";
import Dashboard from "./components/UI/Dashboard";
import useCheckLogin from "./hooks/useCheckLogin";


function App() {
  useCheckLogin();

  return (
    <Fragment>
      <MainHeader />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/song" exact element={<Song />} />
        <Route path="/dashboard" exact element={<Dashboard />} />
      </Routes>
    </Fragment>
  );
}

export default App;
