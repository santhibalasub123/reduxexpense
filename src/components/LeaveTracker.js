import { Link } from 'react-router-dom';
import './LeaveTracker.css';
import { SidebarData } from './SidebarData';
import * as AiIcons from 'react-icons/ai';
//import expense from '../../assests/expense.jpg';

const LeaveTracker = () => {
  return (<div>
    <div className="base-container">
      <h2 align="center"><u>Leave Details</u></h2>
      <div className="parent-container">
        

            {/* <img src="img_snow.jpg" alt="Snow" style="width:100%"> */}
          
        
        <div className="col-4 container-Box">
          <div class="row">
            <center><h5> SICK LEAVE</h5></center>
            {/* <img src="img_snow.jpg" alt="Snow" style="width:100%"> */}
          </div>
        </div>
        <div className="col-4 container-Box">
          <div class="row">
            <center><h5> CASUAL LEAVE</h5></center>
            {/* <img src="img_snow.jpg" alt="Snow" style="width:100%"> */}
          </div>
        </div>
        <div className="col-4 container-Box">
          <div class="row">
            <center><h5>EARNED LEAVE</h5></center>
            {/* <img src="img_snow.jpg" alt="Snow" style="width:100%"> */}
          </div>
        </div>

      </div>
      </div>
    </div>
    )
}

    export default LeaveTracker;