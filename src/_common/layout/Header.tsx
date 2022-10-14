import React from "react";

import logo from "_common/styles/images/logo.png";
import icon_list from "_common/styles/icons/list.svg";
import icon_rank from "_common/styles/icons/rank.svg";
import icon_info from "_common/styles/icons/info.svg";
import icon_menu from "_common/styles/icons/menu.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <div className="logo">
            <img src={logo} alt="healthy" />
          </div>
          <div className="menu-inner">
            <ul className="menu">
              <li>
                <img className="icon" src={icon_list} />
                <span>自分の記録</span>
              </li>
              <li>
                <img className="icon" src={icon_rank} />
                <span>チャレンジ</span>
              </li>
              <li>
                <img className="icon" src={icon_info} />
                <span>お知らせ</span>
              </li>
            </ul>
            <button className="btn btn-menu">
              <img src={icon_menu} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
