import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="pcoded-navbar">
        <div className="navbar-wrapper">
          <div className="navbar-brand header-logo">
            <NavLink to="/" className="b-brand">
              <div className="b-bg">
                <i className="feather icon-trending-up"></i>
              </div>
              <span className="b-title">NG-IQ-Book</span>
            </NavLink>
          </div>
          <div className="navbar-content scroll-div">
            <ul className="nav pcoded-inner-navbar">
              <li className="nav-item pcoded-menu-caption">
                <label>Interview Questions</label>
              </li>
              <li
                data-username="form elements advance componant validation masking wizard picker select"
                className="nav-item"
              >
                <NavLink to="/htmlquestions" className="nav-link ">
                  <span className="pcoded-micon">
                    <i className="icon-html5"></i>
                  </span>
                  <span className="pcoded-mtext">HTML</span>
                </NavLink>
              </li>
              <li
                data-username="form elements advance componant validation masking wizard picker select"
                className="nav-item"
              >
                <NavLink to="/cssquestions" className="nav-link ">
                  <span className="pcoded-micon">
                    <i className="icon-css3"></i>
                  </span>
                  <span className="pcoded-mtext">CSS</span>
                </NavLink>
              </li>
              <li
                data-username="form elements advance componant validation masking wizard picker select"
                className="nav-item"
              >
                <NavLink to="/jsquestions" className="nav-link ">
                  <span className="pcoded-micon">
                    <i className="feather icon-file-text"></i>
                  </span>
                  <span className="pcoded-mtext">JavaScript</span>
                </NavLink>
              </li>
              <li
                data-username="form elements advance componant validation masking wizard picker select"
                className="nav-item"
              >
                <NavLink to="/codingquestions" className="nav-link">
                  <span className="pcoded-micon">
                    <i className="icon-code"></i>
                  </span>
                  <span className="pcoded-mtext">Coding Questions</span>
                </NavLink>
              </li>
              <li
                data-username="form elements advance componant validation masking wizard picker select"
                className="nav-item"
              >
                <NavLink to="/reactquestions" className="nav-link ">
                  <span className="pcoded-micon">
                    <i className="feather icon-file-text"></i>
                  </span>
                  <span className="pcoded-mtext">ReactJS</span>
                </NavLink>
              </li>
              <li
                data-username="form elements advance componant validation masking wizard picker select"
                className="nav-item"
              >
                <NavLink to="/reduxquestions" className="nav-link ">
                  <span className="pcoded-micon">
                    <i className="icon-indent-right"></i>
                  </span>
                  <span className="pcoded-mtext">Redux</span>
                </NavLink>
              </li>
              <li
                data-username="form elements advance componant validation masking wizard picker select"
                className="nav-item"
              >
                <NavLink to="/unittestingquestions" className="nav-link ">
                  <span className="pcoded-micon">
                    <i className="feather icon-file-text"></i>
                  </span>
                  <span className="pcoded-mtext">Unit Testing</span>
                </NavLink>
              </li>
              <li
                data-username="form elements advance componant validation masking wizard picker select"
                className="nav-item"
              >
                <NavLink to="/miscellaneous" className="nav-link ">
                  <span className="pcoded-micon">
                    <i className="icon-maxcdn"></i>
                  </span>
                  <span className="pcoded-mtext">Miscellaneous</span>
                </NavLink>
              </li>
              <li
                data-username="form elements advance componant validation masking wizard picker select"
                className="nav-item"
              >
                <NavLink to="/resources" className="nav-link ">
                  <span className="pcoded-micon">
                    <i className="icon-stackexchange"></i>
                  </span>
                  <span className="pcoded-mtext">Resources</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
