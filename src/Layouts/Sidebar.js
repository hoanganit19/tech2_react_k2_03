import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Sidebar.scss";
import Url from "../Helpers/Url";

const url = new Url();

export class Sidebar extends Component {
  render() {
    
    const navLinkClass = ({isActive}) => {
        //isActive trả về true, false
        return isActive?'nav-link current-item': 'nav-link';
    }

    return (
      <div>
        <nav className="primary-menu">
          <ul className="nav flex-column">
            <li className="nav-item">
              <NavLink to={url.home} className={navLinkClass} end>
                Trang chủ
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={url.about} className={navLinkClass}>
                Giới thiệu
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={url.products} className={navLinkClass}>
                Sản phẩm
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to='/ca-nhan' className={navLinkClass}>
                Cá nhân
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/don-hang' className={navLinkClass}>
                Đơn hàng
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Sidebar;
