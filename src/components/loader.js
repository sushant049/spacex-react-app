import React, { Component } from 'react';
import { connect } from 'react-redux';
import loader from '../assets/loader.gif';

class Loader extends Component {
  render() {
    let {isLoading} = this.props;
    return (
      <>
      {
        isLoading?(
          <div className="pageLoader">
            <img src={loader} alt="application is loading"/>
          </div>
        ):null
      }
      </>
    )
  }
}

const mapStateToProps = ({spacex}) => ({
  isLoading: spacex.isLoading
});

export default connect(mapStateToProps)(Loader);