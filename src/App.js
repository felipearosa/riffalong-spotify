import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Fragment } from "react";

import MainHeader from "./components/Layout/MainHeader";
import Home from "./pages/Home";
import Song from "./pages/Song";
import Search from "./pages/Search";
import Dashboard from "./components/UI/Dashboard";
import useCheckLogin from "./hooks/useCheckLogin";
import './styles/index.css'
import Footer from "./components/Layout/Footer";


function App() {
  useCheckLogin();

  return (
    <Fragment>
      <MainHeader />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/song" exact element={<Song />} />
        <Route path="/search" exact element={<Search />} />
        <Route path="/dashboard" exact element={<Dashboard />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
