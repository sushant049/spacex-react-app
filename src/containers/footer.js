import React, {Component} from 'react';
import { DisplayText } from '../components/display-text';
 
class AppFooter extends Component {
  render() {
    return (
      <div className="app-footer">
        <DisplayText weight="strong">Developed by: </DisplayText>Sushant Kumar
      </div>
    )
  }
}

export default AppFooter;