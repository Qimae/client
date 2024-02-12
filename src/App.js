import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import StudentRegister from "./components/Students/Register/Register";
import Choice from './components/Choice/Choice';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MinistryRegister from "./components/Ministry/Register/Register";
import SchoolRegister from "./components/Schools/Register/Register";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/studentregister" element={<StudentRegister />}></Route>
          <Route exact path="/ministryregister" element={<MinistryRegister />}></Route>
          <Route exact path="/schoolregister" element={<SchoolRegister />}></Route>
          <Route exact path="/choice" element={<Choice />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/welcome" element={<Dashboard />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
