// import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/home";
import Mandalas from "./pages/mandalas/mandalas";
import Adhyaya from "./pages/adhyaya/adhyaya";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <Router>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/mandalas' element={<Mandalas/>}/>
    <Route path='/adhyayas' element={<Adhyaya/>}/>
    </Routes>
    </Router>
  );
}

export default App;
