import "../style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Component } from "react";
import { withTranslation } from "react-i18next";
import Index from "../index/index";
import ErrorScreen from "../error/errorscreen";
import Footer from "../footer/footer";
import Header from "../header/header";
import Movies from '../movies/movies';
import Series from '../series/series';
import Music from '../music/music';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentScreen: "index",
      lang: "de",
      currentTheme: "light",
      login: false,
    };
  }

  

  // change Screen shown
  changeScreen = (newScreen) => this.setState({ currentScreen: newScreen }); //declarng all needed setStates
  
  // change Language shown
  changeLanguage = (newLang) => {
      this.setState({ lang: newLang });
      localStorage.setItem("lang", newLang);
  };

  // change Theme shown
  changeTheme = (newTheme) => {
    this.setState({ currentTheme: newTheme });
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute(
      "class",
      newTheme
    )
  };

  // check for Login State
  changeLog = (bool) => this.setState({ login: bool });
  

  componentDidMount() {
    const { i18n } = this.props;
    if(localStorage.getItem("theme")==null){
      localStorage.setItem("theme", "light")
    }
    if(localStorage.getItem("lang")==null){
      localStorage.setItem("lang", "de")
    }
    this.changeTheme(localStorage.getItem("theme"));
    this.changeLanguage(localStorage.getItem("lang"));
    i18n.changeLanguage(localStorage.getItem("lang"));
    //this.state.changeLanguage(localStorage.getItem("lang"));
  }


  render() {
    
    let navigationBar = ( //declaring needed states for components
      <Header
        currentTheme={this.state.currentTheme}
        changeTheme={this.changeTheme}
        changeLanguage={this.changeLanguage}
        lang={this.state.lang}
      />
    );

    return (
      <>
      <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={navigationBar}>
            <Route path="" element={<Index />} />
            <Route path="movies" element={<Movies />} />
            <Route path="series" element={<Series />} />
            <Route path="music" element={<Music />} />
            <Route path="*" element={<ErrorScreen />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </main>
      {<Footer/>} 
        </>
    );
  }
}

export default withTranslation()(App);