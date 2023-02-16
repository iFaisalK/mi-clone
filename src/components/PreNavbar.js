import React from "react";
import "../Styles/PreNavbar.css";

const cartIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40">
    <path d="M11.542 36.458q-1.25 0-2.146-.896-.896-.895-.896-2.187 0-1.292.896-2.187.896-.896 2.187-.896 1.292 0 2.188.896.896.895.896 2.187 0 1.292-.917 2.187-.917.896-2.208.896Zm16.833 0q-1.292 0-2.187-.896-.896-.895-.896-2.187 0-1.292.916-2.187.917-.896 2.167-.896 1.292 0 2.187.896.896.895.896 2.187 0 1.292-.896 2.187-.895.896-2.187.896ZM9.708 9.125l4.375 9.125h11.709q.125 0 .25-.083.125-.084.166-.209l4.625-8.416q.084-.167.021-.292-.062-.125-.271-.125ZM8.333 6.292h24.625q1 0 1.5.875t0 1.791l-5.75 10.334q-.416.791-1.187 1.27-.771.48-1.646.48H13.292l-1.875 3.375q-.084.166.021.395.104.23.354.23h19.75v2.833H11.375q-1.833 0-2.646-1.417-.812-1.416-.021-2.916l2.5-4.584-6.25-13.166H1.667V2.958H6.75Zm5.75 11.958h12Z" />
  </svg>
);

const PreNavbar = () => {
  return (
    <div className="preNav">
      <div>
        <a href="http://https://www.mi.com/in/">XIOAMI INDIA</a>{" "}
        <span> | </span>
        <a href="http://in.event.mi.com/in/install-mi-store">
          GET Mi STORE APP
        </a>
        <span> | </span>
        <a href="https://www.mi.com/in/service/authorized_stores/">
          RETAIL STORE ↓
        </a>
      </div>
      <div>
        <a href="https://store.mi.com/in/site/login">SIGN IN</a> <span>|</span>
        <a href="https://account.xiaomi.com/pass/register?callback=https%3A%2F%2Fstore.mi.com%2Fin%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fin%26sign%3DNGQyZTY1M2VjNGNjYTc5NzFlZDc1YmY2ZmM2NDFiYWMwNTU5YzUyNQ%2C%2C&sid=i18n_in_pc_pro&_locale=en_IN">
          SIGN UP
        </a>{" "}
        <span>|</span>
        <a className="cart" href="https://store.mi.com/in/site/login">
          {cartIcon} CART (0)
        </a>
      </div>
    </div>
  );
};

export default PreNavbar;
