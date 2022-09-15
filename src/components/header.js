import React from "react";
import { LogoLaNacion } from "./logoLaNacion";

function Header() {
  return (
    <header className="header">
      <div className="lay">
        <div className="row">
          <div className="col-4 header__left">
            <div className="com-hamburger">
              <span className="com-hamburger__bar"></span>
              <span className="com-hamburger__bar"></span>
              <span className="com-hamburger__bar"></span>
            </div>
            <form className="com-search ">
              <input
                type="text"
                className="com-search__input"
                placeholder="Buscar"
              />
              <i className="icon-search">
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-labelledby="searchIconTitle"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  fill="none"
                  color="#000000"
                >
                  <title id="searchIconTitle">Search</title>
                  <path d="M14.4121122,14.4121122 L20,20" />{" "}
                  <circle cx="10" cy="10" r="6" />
                </svg>
              </i>
              <input
                type="submit"
                value="Buscar"
                className="--btn --primary com-search__submit"
              />
            </form>
          </div>
          <div className="col-4  header__middle">
            <a href="/" className="header__middle__logo">
              {/* <i className="logo-la-nacion"></i> */}
              <LogoLaNacion />
            </a>
          </div>
          <div className="col-4 header__right">
            <div className="com-usuario">
              <button className="--btn --highlight hlp-marginRight-35">
                Suscribite
              </button>
              <button className="--btn --secondary">Ingresar</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export { Header };
