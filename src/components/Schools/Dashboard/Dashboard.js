// components/Welcome.js
import React, { useEffect, useState } from "react";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import axios from "axios";
import Dropdown from "react-bootstrap/Dropdown";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import edulogo from "../../../assets/edulogo.png";
import eduicon from "../../../assets/eduicon.png";
import { LuMenuSquare } from "react-icons/lu";
const Dashboard = () => {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const { id } = useParams();
  const [schoolUser, setSchoolUser] = useState([]);
  const [email, setEmail] = useState("");

  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios.get("http://localhost:3002/user").then((res) => {
      if (res.data.Status === "Success") {
        if (res.data.role === "school") {
          setEmail(res.data.email);
          navigate("/schooldashboard");
        }
      } else {
        navigate("/login");
      }
    });
  }, []);

  const handleLogout = () => {
    axios
      .get("http://localhost:3002/logout")
      .then((res) => {
        localStorage.removeItem("valid");
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div
          className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-custom"
          style={{ backgroundColor: "#fc8250" }}
        >
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <a
              href="/"
              className="d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-white text-decoration-none"
            >
              <span className="fs-5 fw-bolder d-none d-sm-inline">
                School Dashboard
              </span>
            </a>
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li>
                <Link
                  to="/schooldashboard"
                  data-bs-toggle="collapse"
                  className="nav-link text-white px-0 align-middle"
                >
                  <i className="fs-4 bi-speedometer2"></i>{" "}
                  <span className="ms-1 d-none d-sm-inline">Dashboard</span>{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="/schooldashboard/schoolstudents"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-people"></i>{" "}
                  <span className="ms-1 d-none d-sm-inline">Students</span>{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="/employee"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i class="fs-4 bi bi-person-fill-add"></i>{" "}
                  <span className="ms-1 d-none d-sm-inline">
                    New Student Registration
                  </span>{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="/employee"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i class="fs-4 bi bi-building-fill-add"></i>{" "}
                  <span className="ms-1 d-none d-sm-inline">
                    KNEC Registration
                  </span>{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="/schooldashboard/profile"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-person"></i>{" "}
                  <span className="ms-1 d-none d-sm-inline">Profile</span>
                </Link>
              </li>
              <li onClick={handleLogout}>
                <a href="#" className="nav-link px-0 align-middle text-white">
                  <i className="fs-4 bi-power"></i>{" "}
                  <span className="ms-1 d-none d-sm-inline">Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col p-0 m-0">
          <div className="p-2 d-flex justify-content-center shadow">
            <h4>School Management Dashboard</h4>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
