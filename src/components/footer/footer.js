import React from "react";
import { Component } from "react";
import { withTranslation } from "react-i18next";
import Icon from '@mdi/react';
import { mdiCog } from '@mdi/js';

class Footer extends Component {
  render() {
    const { t, i18n } = this.props;
    return (
      <footer>
        <div class="line"></div>
        {/*Draws Line*/}

        <footer-box>
          <br />
          {/*All Links*/}
          <ul id="foot" className="footul">
             
            <li>
                    <div className="dropup">
                      <div className="dropup">
                        <Icon className="dropbtn" path={mdiCog} size={1} />
                          <div
                            id="myDropup"
                            className="dropup-content"
                            onClick={console.log()}
                          >
                            <ul class="dropup-menu"> 
                              <li >
                                {t("design")}
                              
                                <ul class="dropup-menu dropup-submenu" >    {/*Dropdown Submenu 1*/}
                                                                                {/*Dropdown Option 1.1 */}
                                    <a  className="dropItem" id="light"  href="#" value="light"      
                                      onClick={() =>

                                        this.props.changeTheme("light")
                                      }
                                    >
                                      {t("light")}{" "}</a>  
                                                                                {/*Dropdown Option 1.2 */}
                                      <a  className="dropItem" id="dark"  href="#" value="dark"
                                      onClick={() =>
                                        this.props.changeTheme("shadow")
                                      }
                                    >
                                      {t("shadow")}{" "}</a>         
                                </ul>
                              </li>
                              <li>
                              {t("language")}
                                <ul class="dropup-menu dropup-submenu" >    {/*Dropdown Submenu 2*/}
                                                                                {/*Dropdown Option 2.1*/}
                                    <a  className="dropItem" id="de"  href="#" value="light"
                                      onClick={() => {
                                        
                                          this.props.changeLanguage("de")
                                          i18n.changeLanguage("de")
                                      }
                                          
                                        
                                      }
                                    >
                                      {t("Deutsch")}{" "}</a>                                                                  
                                                                                {/*Dropdown Option 2.2*/}
                                <a  className="dropItem" id="en"  href="#" value="light"
                                      onClick={() => {
                                        i18n.changeLanguage("en")
                                          this.props.changeLanguage("en")
                                      }
                                      }
                                    >
                                      {t("English")}{" "}</a>        
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
            <li className="footli">
              

              <a href="#">
              © 2024 Haaremy Productions
              </a>
 
              
            </li>
          </ul>
        </footer-box>
      </footer>
    );
  }
}

export default withTranslation()(Footer);
