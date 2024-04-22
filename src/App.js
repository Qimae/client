import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import SDashboard from "./components/Schools/Dashboard/Dashboard";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import StudentRegister from "./components/Students/Register/Register";
import Choice from "./components/Choice/Choice";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MinistryRegister from "./components/Ministry/Register/Register";
import SchoolRegister from "./components/Schools/Register/Register";
import Students from "./components/Schools/Students/Students";
import DashData from "./components/Schools/DashData/DashData";
import PrivateRoute from "./components/PrivateRoute";
import { useState } from "react";
import Profile from "./components/Schools/Profile/Profile";
import DummyLink from "./components/Schools/Profile/DummyLink";

function App() {
  const [loggedIn, setLoggedIn] = useState(null);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route
            exact
            path="/studentregister"
            element={<StudentRegister />}
          ></Route>
          <Route
            exact
            path="/ministryregister"
            element={<MinistryRegister />}
          ></Route>
          <Route
            exact
            path="/schoolregister"
            element={<SchoolRegister />}
          ></Route>
          <Route exact path="/choice" element={<Choice />}></Route>
          <Route exact path="/welcome" element={<Dashboard />}></Route>
          <Route
            exact
            path="/login"
            element={<Login setLoggedIn={setLoggedIn} />}
          ></Route>
          <Route
            path="/schooldashboard"
            element={
              <PrivateRoute>
                <SDashboard />
              </PrivateRoute>
            }
          >
            <Route path="" element={<DashData />}></Route>
            <Route
              path="/schooldashboard/schoolstudents"
              element={<Students />}
            ></Route>

            {!loggedIn ? (
              <Route
                path="/schooldashboard/dummylink"
                element={<DummyLink />}
              ></Route>
            ) : (
              <Route
                path="/schooldashboard/profile"
                element={<Profile userId={loggedIn.id} />}
              ></Route>
            )}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
