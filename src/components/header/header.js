import React from "react";
import { Component } from "react";
import { withTranslation } from "react-i18next";
import { Outlet, Link } from "react-router-dom";
import Logo from "../../media/logo192.png";

class Header extends Component {
  render() {
    const { t, i18n } = this.props;

    return (
      <main>
        <nav>

                    <img src={Logo} alt="Logo" height="50vw"/>
                    <h1>{t("webTitle")}</h1>


                <aside className="topNavigation">
          <ul id="navi" className="navul">
          <li className="navli">
                <Link to="/">{t("home")}</Link>
              </li>
              <li className="navli">
                <Link to="/movies">{t("movies")}</Link>
              </li>
              <li className="navli">
                <Link to="/series">{t("series")}</Link>
              </li>
              <li className="navli">
                <Link to="/music">{t("music")}</Link>
              </li>
            </ul>
            </aside>
                      
          <Outlet />
              </nav>
      </main>
      
    );
  }
}

export default withTranslation()(Header);
