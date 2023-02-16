import React from "react";
import "../Styles/Footer.css";
import "../Styles/preFooter.css";

const replacement = (
  <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
    <path d="m24.1 38 5.7-5.65-5.7-5.65-2.1 2.1 2.15 2.15q-1.4.05-2.725-.45-1.325-.5-2.375-1.55-1-1-1.525-2.3-.525-1.3-.525-2.6 0-.85.225-1.7t.625-1.65l-2.2-2.2q-.85 1.25-1.25 2.65T14 24q0 1.9.75 3.75t2.2 3.3q1.45 1.45 3.25 2.175 1.8.725 3.7.775L22 35.9Zm8.25-8.5q.85-1.25 1.25-2.65T34 24q0-1.9-.725-3.775T31.1 16.9q-1.45-1.45-3.275-2.15t-3.725-.7L26 12.1 23.9 10l-5.7 5.65 5.7 5.65 2.1-2.1-2.2-2.2q1.35 0 2.75.525t2.4 1.525q1 1 1.525 2.3.525 1.3.525 2.6 0 .85-.225 1.7t-.625 1.65ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 24q0-4.15 1.575-7.8 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24 4q4.15 0 7.8 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm0-3q7.1 0 12.05-4.975Q41 31.05 41 24q0-7.1-4.95-12.05Q31.1 7 24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24 41Zm0-17Z" />
  </svg>
);

const secure = (
  <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
    <path d="m21.8 30.65 11.4-11.4-2.1-2.05-9.15 9.15-5.05-5.05-2.2 2.2Zm2.2 13.3q-7-1.75-11.5-8.125T8 21.85V9.95l16-6 16 6v11.9q0 7.6-4.5 13.975T24 43.95Zm0-3.1q5.75-1.9 9.375-7.175T37 21.85v-9.8l-13-4.9-13 4.9v9.8q0 6.55 3.625 11.825Q18.25 38.95 24 40.85ZM24 24Z" />
  </svg>
);

const network = (
  <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
    <path d="M2 40v-8q0-1.45 1.025-2.475Q4.05 28.5 5.5 28.5h7.05q.85 0 1.625.425T15.5 30.1q1.45 2.1 3.7 3.25T24 34.5q2.55 0 4.8-1.15t3.75-3.25q.55-.75 1.3-1.175.75-.425 1.6-.425h7.05q1.45 0 2.475 1.025Q46 30.55 46 32v8H33v-5.95q-1.8 1.65-4.125 2.55-2.325.9-4.875.9t-4.85-.9q-2.3-.9-4.15-2.55V40Zm22-8.5q-1.75 0-3.375-.825T18 28.4q-.8-1.15-1.925-1.85-1.125-.7-2.425-.95 1.45-1.5 4.55-2.3 3.1-.8 5.8-.8 2.7 0 5.825.8t4.575 2.3q-1.3.25-2.425.95-1.125.7-1.925 1.85-1 1.45-2.625 2.275T24 31.5ZM8 25q-2.25 0-3.875-1.625T2.5 19.5q0-2.3 1.625-3.9T8 14q2.3 0 3.9 1.6t1.6 3.9q0 2.25-1.6 3.875T8 25Zm32 0q-2.25 0-3.875-1.625T34.5 19.5q0-2.3 1.625-3.9T40 14q2.3 0 3.9 1.6t1.6 3.9q0 2.25-1.6 3.875T40 25Zm-16-6q-2.25 0-3.875-1.625T18.5 13.5q0-2.3 1.625-3.9T24 8q2.3 0 3.9 1.6t1.6 3.9q0 2.25-1.6 3.875T24 19Z" />
  </svg>
);

const facebook = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 24 24"
  >
    <path d="M15.12,5.32H17V2.14A26.11,26.11,0,0,0,14.26,2C11.54,2,9.68,3.66,9.68,6.7V9.32H6.61v3.56H9.68V22h3.68V12.88h3.06l.46-3.56H13.36V7.05C13.36,6,13.64,5.32,15.12,5.32Z" />
  </svg>
);
const instagram = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 24 24"
  >
    <path d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z" />
  </svg>
);
const twitter = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 24 24"
  >
    <path d="M22.99121,3.9502a.99942.99942,0,0,0-1.51074-.85938,7.47956,7.47956,0,0,1-1.873.793,5.15234,5.15234,0,0,0-3.374-1.24219,5.23238,5.23238,0,0,0-5.22363,5.06348A11.03194,11.03194,0,0,1,4.19629,3.78125,1.01154,1.01154,0,0,0,3.33887,3.416a.99852.99852,0,0,0-.78516.5,5.2755,5.2755,0,0,0-.24219,4.76855l-.00195.00195a1.0411,1.0411,0,0,0-.49512.88868,3.04174,3.04174,0,0,0,.02637.43945,5.1854,5.1854,0,0,0,1.56836,3.3125.99813.99813,0,0,0-.06641.76953,5.20436,5.20436,0,0,0,2.36231,2.92187,7.46464,7.46464,0,0,1-3.58985.44825.99975.99975,0,0,0-.665,1.833A12.94248,12.94248,0,0,0,8.46,21.36133,12.7878,12.7878,0,0,0,20.9248,11.998,12.82166,12.82166,0,0,0,21.46,8.35156c0-.06543,0-.13281-.001-.20019A5.76963,5.76963,0,0,0,22.99121,3.9502ZM19.68457,7.16211a.995.995,0,0,0-.2334.70215c.00977.165.00879.331.00879.4873a10.82371,10.82371,0,0,1-.4541,3.08106A10.68457,10.68457,0,0,1,8.46,19.36133a10.93791,10.93791,0,0,1-2.55078-.30078,9.47951,9.47951,0,0,0,2.94238-1.56348A1.00033,1.00033,0,0,0,8.25,15.71094a3.208,3.208,0,0,1-2.21387-.93457q.22413-.04248.44532-.10547a1.00026,1.00026,0,0,0-.08008-1.94336,3.19824,3.19824,0,0,1-2.25-1.72559,5.29929,5.29929,0,0,0,.54492.0459,1.02093,1.02093,0,0,0,.9834-.69629A.9998.9998,0,0,0,5.2793,9.21484,3.19559,3.19559,0,0,1,3.85547,6.542c0-.0664.00195-.13281.00586-.19824a13.01365,13.01365,0,0,0,8.209,3.47949,1.02046,1.02046,0,0,0,.81739-.3584,1.00037,1.00037,0,0,0,.206-.86816,3.15653,3.15653,0,0,1-.08691-.72852A3.23,3.23,0,0,1,16.2334,4.6416a3.18428,3.18428,0,0,1,2.34472,1.02051A.993.993,0,0,0,19.499,5.96a9.27073,9.27073,0,0,0,1.21192-.32226A6.68126,6.68126,0,0,1,19.68457,7.16211Z" />
  </svg>
);
const youtube = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 24 24"
  >
    <path d="M23,9.71a8.5,8.5,0,0,0-.91-4.13,2.92,2.92,0,0,0-1.72-1A78.36,78.36,0,0,0,12,4.27a78.45,78.45,0,0,0-8.34.3,2.87,2.87,0,0,0-1.46.74c-.9.83-1,2.25-1.1,3.45a48.29,48.29,0,0,0,0,6.48,9.55,9.55,0,0,0,.3,2,3.14,3.14,0,0,0,.71,1.36,2.86,2.86,0,0,0,1.49.78,45.18,45.18,0,0,0,6.5.33c3.5.05,6.57,0,10.2-.28a2.88,2.88,0,0,0,1.53-.78,2.49,2.49,0,0,0,.61-1,10.58,10.58,0,0,0,.52-3.4C23,13.69,23,10.31,23,9.71ZM9.74,14.85V8.66l5.92,3.11C14,12.69,11.81,13.73,9.74,14.85Z" />
  </svg>
);

const Footer = ({ footer }) => {
  return (
    <>
      <div className="preFooter">
        <div>
          {replacement}
          <p>
            <b>Hassle-free replacement</b> <br /> 10-day replacement policy on
            mi.com
          </p>
        </div>
        <div>
          {secure}
          <p>
            <b>100% secure payments</b> <br /> We support Cards, Wallets, EMI
            and COD
          </p>
        </div>
        <div>
          {network}
          <p>
            <b>Vast service network</b> <br /> 1000 Mi service-centers across
            600 cities
          </p>
        </div>
      </div>
      <div className="preFooter2">
        <div>
          <p>LET'S STAY IN TOUCH</p>
          <span>Get updates on sales, specials and more</span>
        </div>
        <div className="email">
          <input type="email" name="email" placeholder="Enter Email Address" />
          <button>➥</button>
          <span>Thanks. You're on our email list for special offers.</span>
        </div>
        <div>
          <p> FOLLOW MI </p>
          <span>We want to hear from you</span>
        </div>
        <div className="socialMedia">
          {facebook} {youtube} {instagram} {twitter}
        </div>
      </div>

      <div className="footer">
        <div>
          <p>SUPPORT</p>
          {footer.support.map((item) => (
            <a href={item.url}>{item.name}</a>
          ))}
        </div>
        <div>
          <p>SHOP AND LEARN</p>
          {footer.shopAndLearn.map((item) => (
            <a href={item.url}>{item.name}</a>
          ))}
        </div>
        <div>
          <p>RETAIL STORE</p>
          {footer.retailStore.map((item) => (
            <a href={item.url}>{item.name}</a>
          ))}
        </div>
        <div>
          <p>ABOUT US</p>
          {footer.aboutUs.map((item) => (
            <a href={item.url}>{item.name}</a>
          ))}
        </div>
        <div>
          <p>CONTACT US</p>
          {footer.contactUs.map((item) => (
            <a href={item.url}>{item.name}</a>
          ))}
        </div>
        <div>
          <p>Chat with our Virtual AI bot (24/7 Live Agent Support)</p>
          <button>CHAT NOW</button>
        </div>
      </div>
      <div className="footerCredit">
        <div>Copyright © 2010-2023 Xioami. All Rights Reserved</div>
      </div>
    </>
  );
};

export default Footer;
