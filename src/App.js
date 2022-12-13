import { Route, Routes  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from "./Home";
import Song from "./pages/Song";


function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/song" exact element={<Song />} />
    </Routes>
  );
}

export default App;
