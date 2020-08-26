import React, {Component} from 'react';
import ResultCard from '../components/result-card';

class Results extends Component {
  render() {
    let { programList } = this.props;
    return(
      <div className="result-content">
        {
          programList.length?programList.map((data, index) => (
            <ResultCard programData={data} key={index}/>
          )) : (
            <p>
              No Mission Found
            </p>
          )
        }
      </div>
    )
  }
}

export default Results;