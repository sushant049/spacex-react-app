import React, {Component} from 'react';
import { DisplayText } from '../components/display-text';

class ResultCard extends Component {
  render() {
    let { programData : {rocket_name, flight_number, mission_id, mission_image, launch_year, launch_success, land_success, mission_name}} = this.props;
    return(
      <div className="result-card">
        <div className="image-box">
          <img src={mission_image} alt={mission_name}/>
        </div>
        <DisplayText size="medium" variant="strong">{mission_name} #{flight_number}</DisplayText>
        <DisplayText>Mission ids {mission_id.join()}</DisplayText>
        <DisplayText>Launch Year {launch_year}</DisplayText> 
        <DisplayText>Successful Launch {launch_success?launch_success.toString():"Unknown"}</DisplayText> 
        <DisplayText>Successful Landing {land_success?land_success.toString():"Unknown"}</DisplayText> 
      </div>
    )
  }
}

export default ResultCard;