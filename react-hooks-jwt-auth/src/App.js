import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";
import Logout from "./components/Logout";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Game from "./components/Game";
import { Menus } from "./components/Menus";
import User from "./components/User";
import {MyContext} from "./common/Contect"

import EventBus from "./common/EventBus";
import Game2 from "./components/game2/Game2";
import Game3 from "./components/game3/Game3";

const App = () => {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }

    EventBus.on("logout", () => {
      logOut();
    });

    
    return () => {
      EventBus.remove("logout");
    };
  }, []);

  const logOut = () => {
    AuthService.logout();
    setCurrentUser(undefined);
  };



  return (
    <MyContext.Provider value={{ currentUser, setCurrentUser}}>
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            Santhosh
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/game1"} className="nav-link">
                Game1
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/game2"} className="nav-link">
                Game2
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/game3"} className="nav-link">
                Game3
              </Link>
            </li>
            {/* {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )} */}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>

        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/menus/" element={<Menus />} />
            <Route path="/profile" element={<User />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/game1" element={<Game />} />
            <Route path="/game2" element={<Game2 />} />
            <Route path="/game3" element={<Game3 />} />
          </Routes>
        </div>
      </div>
    </MyContext.Provider>
  );
};

export default App;
