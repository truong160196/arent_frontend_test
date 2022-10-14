import React from "react";

import logo from "_common/styles/images/logo.png";
import icon_list from "_common/styles/icons/list.svg";
import icon_rank from "_common/styles/icons/rank.svg";
import icon_info from "_common/styles/icons/info.svg";
import icon_menu from "_common/styles/icons/menu.svg";
import icon_knife from "_common/styles/icons/knife.svg";
import icon_cup from "_common/styles/icons/cup.svg";

import img1 from "_common/styles/images/m01.jpg";
import img2 from "_common/styles/images/l03.jpg";
import img3 from "_common/styles/images/d01.jpg";
import img4 from "_common/styles/images/l01.jpg";
import img5 from "_common/styles/images/l02.jpg";
import img6 from "_common/styles/images/d02.jpg";
import img7 from "_common/styles/images/s01.jpg";

const mealHistory = [
  {
    image: img1,
    text: "05.21.Morning",
  },
  {
    image: img2,
    text: "05.21.Lunch",
  },
  {
    image: img3,
    text: "05.21.Dinner",
  },
  {
    image: img4,
    text: "05.21.Snack",
  },
  {
    image: img1,
    text: "05.20.Morning",
  },
  {
    image: img5,
    text: "05.20.Lunch",
  },
  {
    image: img6,
    text: "05.20.Dinner",
  },
  {
    image: img7,
    text: "05.21.Snack",
  },
];

export default function Main() {
  return (
    <>
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
      <section className="header-info">
        <div className="achievement-rate">
          <div className="info-inner">
            <span>50/21</span>
            <span className="big-text">75%</span>
          </div>
        </div>
        <div className="body-weight">
          <span>75%</span>
        </div>
      </section>

      <div className="container">
        <section className="category">
          <div className="category-inner">
            <a href="./#" className="item">
              <img src={icon_knife} alt="Morning" />
              <span>Morning</span>
            </a>
            <a href="./#" className="item">
              <img src={icon_knife} alt="Lunch" />
              <span>Lunch</span>
            </a>
            <a href="./#" className="item">
              <img src={icon_knife} alt="Dinner" />
              <span>Dinner</span>
            </a>
            <a href="./#" className="item">
              <img src={icon_cup} alt="Snack" />
              <span>Snack</span>
            </a>
          </div>
        </section>
        <section className="meal-history">
          <div className="list-images">
            {mealHistory.map((item, index: number) => {
              return (
                <div className="item" key={index.toString()}>
                  <img src={item.image} alt="morning" />
                  <span className="info">{item.text}</span>
                </div>
              );
            })}
          </div>

          <button className="btn btn-read-more">記録をもっと見る</button>
        </section>
      </div>
      <footer className="footer">
        <div className="container">
          <div className="menu-footer">
            <a href="/#" className="item">
              会員登録
            </a>
            <a href="/#" className="item">
              運営会社
            </a>
            <a href="/#" className="item">
              利用規約
            </a>
            <a href="/#" className="item">
              個人情報の取扱について
            </a>
            <a href="/#" className="item">
              特定商取引法に基づく表記
            </a>
            <a href="/#" className="item">
              お問い合わせ
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
