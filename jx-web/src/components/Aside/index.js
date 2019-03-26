import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/dist/img/AdminLTELogo.png";
import avatar from "../../assets/dist/img/user2-160x160.jpg";

export default function() {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <Link to="/" className="brand-link">
        <img
          src={logo}
          alt="AdminLTE Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: 0.8 }}
        />
        <span className="brand-text font-weight-light">教学管理</span>
      </Link>

      <div className="sidebar">
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img src={avatar} className="img-circle elevation-2" alt="User" />
          </div>
          <div className="info">
            <a href="#/" className="d-block">
              Admin
            </a>
          </div>
        </div>
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li className="nav-item has-treeview">
              <a href="#/" className="nav-link active">
                <i className="nav-icon fa fa-user-o" />
                <p>
                  讲师管理
                  <i className="right fa fa-angle-left" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to="/teacher/list" className="nav-link">
                    <i className="fa fa-circle-o nav-icon fa-lg" />
                    <p>讲师列表</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/teacher/add" className="nav-link">
                    <i className="fa fa-circle-o nav-icon" />
                    <p>讲师添加</p>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item has-treeview">
              <a href="#/" className="nav-link active">
                <i className="nav-icon fa fa-book" />
                <p>
                  课程管理
                  <i className="right fa fa-angle-left" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to="/course/list" className="nav-link">
                    <i className="fa fa-circle-o nav-icon" />
                    <p>课程列表</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/course/add" className="nav-link">
                    <i className="fa fa-circle-o nav-icon" />
                    <p>课程添加</p>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/settings" className="nav-link">
                <i className="nav-icon fa fa-cog" />
                <p>个人设置</p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}
