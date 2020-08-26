import React, {Component} from 'react';
import { DisplayText } from '../components/display-text';

class ResultCard extends Component {
  render() {
    let { programData : {flight_number, mission_id, mission_image, launch_year, launch_success, land_success, mission_name}} = this.props;
    return(
      <div className="result-card">
        <div className="image-box">
          <img src={mission_image} alt={mission_name}/>
        </div>
        <DisplayText size="medium" variant="strong" color="#4a508e">{mission_name} #{flight_number}</DisplayText>
        <DisplayText size="small"><strong>Mission ids:</strong> {mission_id.join()}</DisplayText>
        <DisplayText size="small"><strong>Launch Year:</strong> {launch_year}</DisplayText> 
        <DisplayText size="small"><strong>Successful Launch:</strong> {launch_success?launch_success.toString():"Unknown"}</DisplayText> 
        <DisplayText size="small"><strong>Successful Landing:</strong> {land_success?land_success.toString():"Unknown"}</DisplayText> 
      </div>
    )
  }
}

export default ResultCard;