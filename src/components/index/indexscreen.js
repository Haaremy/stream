import { withTranslation } from "react-i18next";
import React, { Component } from "react";
import Icon from '@mdi/react';
import { mdiSortBoolAscendingVariant } from '@mdi/js';
import { mdiArrowRight } from '@mdi/js';


let toggleType = [ true, true, true];

const sortTable = (n) => {
  var name = "myTable", table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  if(document?.getElementById(name)==null){
    return null;
  }
  table = document.getElementById(name);
  switching = true;
  // Set the sorting direction to ascending:
  dir = "asc";
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /* Loop through all table rows (except the
    first, which contains table headers): */
    for (i = 1; i < (rows.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
      one from current row and one from the next: */
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /* Check if the two rows should switch place,
      based on the direction, asc or desc: */
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      // Each time a switch is done, increase this count by 1:
      switchcount ++;
    } else {
      /* If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again. */
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

class IndexScreen extends Component {

  constructor(){
    super();
    this.state = {
      toggleState0 : true,
      toggleState1 : true,
      toggleState2 : true,
    }
  }
  
  changeToggle = (n) =>{
    toggleType[n] = !toggleType[n];
    if(n === 0){
      this.setState({toggleState0 : toggleType[n]})
    }
    if(n === 1){
      this.setState({toggleState1 : toggleType[n]})
    }
    if(n === 2){
      this.setState({toggleState2 : toggleType[n]})
    }
  }

  
  render() {
    const {t} = this.props;
    let toggleWork = this.state.toggleState0 ? "istoggled" : "nottoggled";
    let toggleEdu = this.state.toggleState1 ? "istoggled" : "nottoggled";
    let togglePursuit = this.state.toggleState2 ? "istoggled" : "nottoggled";

    return (
      <>
        

        <div class="line"/>
            <br/>

      <div className="indexContent">
        
        <div className="movies" id="movies">
          <h1><a href = "#movies" onClick={() => this.props.changeScreen("movies")}>{t("movies")} <Icon path={mdiArrowRight}/></a></h1>
        </div>


        <div class="line"/>
            <br/>

        <div id="series" className="series">
        <h1><a href = "#series" onClick={() => this.props.changeScreen("series")}>{t("series")} <Icon path={mdiArrowRight}/></a></h1>
          <br/>
          
          <div class="lebenslauf">
            <table id="myTable">
              <tr className="even">
                <th id = "th1" onClick={() => sortTable(0)}><div className="categoryHead">
                  <li>
                    <div className="dropdown">
                      <Icon className="dropbtn" path={mdiSortBoolAscendingVariant}  />
                      <div
                        id="myDropdown"
                        className="dropdown-content"                      >
                        <a 
                          className="dropItem"
                          onClick={() => this.changeToggle(0)}
                        >
                          <input 
                            type="checkbox"
                            checked={toggleType[0]}
                            
                          />
                          {t("work")}
                        </a>
                        <a 
                          className="dropItem"
                         onClick={() => this.changeToggle(1)}
                        >
                          <input 
                            type="checkbox"
                            checked={toggleType[1]}
                            
                            />
                          {t("edu")}
                        </a>
                        <a 
                          className="dropItem"
                          onClick={() => this.changeToggle(2)}
                        >
                          <input 
                            type="checkbox"
                            checked={toggleType[2]}
                            
                          />
                          {t("pursuits")}
                        </a>
                      </div>
                    </div>   
                  </li>
                </div>
                <div className="categoryName"> {t("type")}</div>
              </th>
              <th id = "th2" onClick={() => sortTable(1)}>{t("time")}</th>
              <th id = "th3" >{t("description")}</th>
            </tr>
            <tr className="odd">
              <td className="type"></td>
              <td className="date">{t("today")}</td>
              <td className="description"></td>
            </tr>
            <tr className={toggleWork}>
              <td className="type">{t("work")}</td>
              <td className="date">2023 {t("apr")}</td>
              <td className="description">{t("dewo23/04")}<br/><br/></td>
            </tr>      
            </table>
          </div>
          <div class="line"/>
            <br/>
        </div>
        <div id="music" className="music">
        <h1><a href = "#music" onClick={() => this.props.changeScreen("music")}>{t("music")} <Icon path={mdiArrowRight}/></a></h1>
        </div>
      </div>
      </>
    );
  }
}

export default withTranslation()(IndexScreen);
