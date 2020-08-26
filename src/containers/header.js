import React, {Component} from 'react';
import { Header } from '../components/display-text';
 
class AppHeader extends Component {
  render() {
    return (
      <div className="app-header">
        <Header color="primary">SpaceX Launch Programs</Header>
      </div>
    )
  }
}

export default AppHeader;