import React from "react";
import { Component } from "react";
import { withTranslation } from "react-i18next";


class Navigation extends Component {
  render() {
    const { t, i18n } = this.props;

    return (
      <main>
        <nav>
          <div>
            <nav>
              <h1>{t("webTitle")}</h1>
            </nav>
          </div>
        </nav>
      </main>
    );
  }
}

export default withTranslation()(Navigation);
