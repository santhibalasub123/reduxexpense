import './Team.css';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import * as AiIcons from 'react-icons/ai';
//import expense from '../../assests/expense.jpg';

const Team = () => {
  return (<div>
    <div className="base-container">
      <h2 align="center"><u>Teams</u></h2>
      <div className="parent-container">
        <div className="col-4 container-Box">

          <div className="row">
          </div>
        </div>
        <div className="col-4 container-Box">
          <div className="row">

            {/* <img src="img_snow.jpg" alt="Snow" style="width:100%"> */}
          </div>
        </div>
        <div className="col-4 container-Box">
          <div class="row">
            <center><h5> .NET DEVELOPER</h5></center>
            {/* <img src="img_snow.jpg" alt="Snow" style="width:100%"> */}
          </div>
        </div>
        <div className="col-4 container-Box">
          <div class="row">
            <center><h5> Reactjs DEVELOPER</h5></center>
            {/* <img src="img_snow.jpg" alt="Snow" style="width:100%"> */}
          </div>
        </div>
        <div className="col-4 container-Box">
          <div class="row">
            <center><h5>php developer</h5></center>

                fsdfasdfasdfasdfasdfas


            {/* <img src="img_snow.jpg" alt="Snow" style="width:100%"> */}
          </div>
        </div>

      </div>
      <div className="parent-container">
        <div className="col-4 container-Box">

          <div className="row">
          </div>
        </div>
        <div className="col-4 container-Box">
          <div class="row">
            <center><h5>c++ developer</h5></center>
            {/* <img src="img_snow.jpg" alt="Snow" style="width:100%"> */}
          </div>
        </div>
        <div className="col-4 container-Box">
          <div class="row">
            <center><h5>java developer</h5></center>
            {/* <img src="img_snow.jpg" alt="Snow" style="width:100%"> */}
          </div>
        </div>

        <div class="col-4">

        </div>

      </div>
    </div>
    </div>
    )
}

    export default Team;