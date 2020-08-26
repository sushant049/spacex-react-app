import React, {Component} from 'react';
import { connect } from 'react-redux';

import Filters from '../containers/filters';
import Results from '../containers/results';

import { fetchAllPrograms } from '../redux/actions/actions';

class Home extends Component {
  
  componentDidMount() {
    const { loadAllPrograms } = this.props;
    loadAllPrograms();
  }

  render(){
    let { programs } = this.props; 
    return (
      <div className="page-container">
        <div className="filter-area">
          <Filters/>
        </div>
        <div className="result-area">
          <Results programList={programs}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({spacex}) => ({
  programs: spacex.programs,
  filters: spacex.filters
});

const mapDispatchToProps = dispatch => ({
  loadAllPrograms: () => dispatch(fetchAllPrograms())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);