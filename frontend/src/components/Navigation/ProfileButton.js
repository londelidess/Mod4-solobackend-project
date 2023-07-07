

import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { NavLink,useHistory  } from "react-router-dom";
import * as sessionActions from "../../store/session";
import OpenModalMenuItem from "./OpenModalMenuItem";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();
  const history = useHistory();

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const closeMenu = () => setShowMenu(false);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    closeMenu();
    history.push('/');
  };

  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");

  return (
    <>
      <div className="profile-container">
        <button
          className="prof"
          onClick={() => {
            openMenu();
          }}
        >
          <i className="fa-solid fa-bars" />
          <i className="fas fa-user-circle" />
        </button>
        <ul className={ulClassName} ref={ulRef}>
          {user ? (
            <>
              <li>Hello, {user.firstName}</li>

              <li>{user.email}</li>
              <NavLink to="/spots/current" style={{ cursor: "pointer" }}>
                Manage Spots
              </NavLink>
              <li>
                <button onClick={logout}>Log Out</button>
              </li>
            </>
          ) : (
            <>
              <OpenModalMenuItem
                itemText="Sign Up"
                onItemClick={closeMenu}

                modalComponent={<SignupFormModal />}
              />
              <OpenModalMenuItem
                itemText="Log In"
                onItemClick={closeMenu}

                modalComponent={<LoginFormModal />}
              />
            </>
          )}
        </ul>
      </div>
    </>
  );
}

export default ProfileButton;
