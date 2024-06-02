import { withTranslation } from "react-i18next";
import React, { Component } from "react";
import Icon from '@mdi/react';
import { mdiArrowRight } from '@mdi/js';





class Index extends Component {


  
  render() {

    const { t, i18n } = this.props;
const images = require.context('../../media', true);
const imageList = images.keys().map(image => images(image));


  

    return (
      <>
        

        <div class="line"/>
            <br/>

      <div className="indexContent">
        
        <div className="movies" id="movies">
          <h1><a href = "movies" onClick={() => this.props.changeScreen("movies")}>{t("movies")} <Icon path={mdiArrowRight}/></a></h1>
          {imageList.map((image, index) => (<h3>{index} -{image} </h3> ))}
        </div>


        <div class="line"/>
            <br/>

        <div id="series" className="series">
        <h1><a href = "series" onClick={() => this.props.changeScreen("series")}>{t("series")} <Icon path={mdiArrowRight}/></a></h1>
       
        
          <br/>
          
          
          <div class="line"/>
            <br/>
        </div>
        <div id="music" className="music">
        <h1><a href = "#" onClick={() =>

          fetch("http://9.109.114.193:31231/httpreceiver/path1/ExampleFileName.txt", {
          method: "GET",
          })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
          })
          .catch((error) => console.log(error))
  

        }>{t("music")} <Icon path={mdiArrowRight}/></a></h1>
        </div>

      </div>
      
      </>
    );
  }
}

export default withTranslation()(Index);
