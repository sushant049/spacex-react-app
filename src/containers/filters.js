import React, {Component} from 'react';
import { connect } from 'react-redux';
import { DisplayText } from '../components/display-text';
import { OptionButton } from '../components/option-button';
import { fetchFilteredPrograms } from '../redux/actions/actions';

class Filters extends Component {

  constructor(props) {
    super(props);
    this.state = {
      years: [],
      launch: ['true', 'false'],
      landing: ['true', 'false'],
      yearFilterValue: null,
      launchSuccessValue: null,
      landSuccessValue: null
    }
  }
  
  generateYearOptions(start, end) {
    let response=[];
    for(let i=start; i<=end; i++) {
      response.push(i);
    }
    return response;
  }

  applyFilters(obj) {
    this.setState(obj, function() {
      let { yearFilterValue, launchSuccessValue, landSuccessValue } = this.state;
      let { fetchFilteredResults } = this.props;
      let requestObject = {
        yearFilter: yearFilterValue,
        launchSuccess: launchSuccessValue,
        landSuccess: landSuccessValue
      }
      fetchFilteredResults(requestObject);
    });
    
  }

  clearFilters() {
    window.location.reload();
  }

  componentDidMount() {
    this.setState({years: this.generateYearOptions(2006, 2020)});
  }

  render() {
    let { years, launch, landing, yearFilterValue, launchSuccessValue, landSuccessValue} = this.state;
    console.log(yearFilterValue);
    return(
      <div className="filter-content">
        <DisplayText size="small" variant="strong">Filters</DisplayText>

        <div className="filter-options-wrapper">
          <DisplayText size="xsmall" variant="regular">Launch Year</DisplayText>
          <hr/>
          <div className="filter-options">
            {
              years.length?years.map((data, index)=>(
                <OptionButton size="small" variant={yearFilterValue==data?'active':'inactive'} key={index}
                onClick={()=>{this.applyFilters({yearFilterValue: data})}}
                >
                  {data}
                </OptionButton>
              )) : null
            }
          </div>
        </div>

        <div className="filter-options-wrapper">
          <DisplayText size="xsmall" variant="regular">Successful Launch</DisplayText>
          <hr/>
          <div className="filter-options">
            {
              launch.length?launch.map((data, index)=>(
                <OptionButton size="small" variant={launchSuccessValue==data?'active':'inactive'} key={index}
                onClick={()=>{this.applyFilters({launchSuccessValue: data})}}>
                  {data}
                </OptionButton>
              )) : null
            }
          </div>
        </div>

        <div className="filter-options-wrapper">
          <DisplayText size="xsmall" variant="regular">Successful Landing</DisplayText>
          <hr/>
          <div className="filter-options">
            {
              landing.length?landing.map((data, index)=>(
                <OptionButton size="small" variant={landSuccessValue==data?'active':'inactive'} key={index}
                onClick={()=>{this.applyFilters({landSuccessValue: data})}}>
                  {data}
                </OptionButton>
              )) : null
            }
          </div>
        </div>
        <hr/>
        <DisplayText cursor="true" size="xsmall" variant="strong" onClick={()=>this.clearFilters()}>Clear Filters</DisplayText>
      </div>
    );
  }
  
}

const mapStateToProps = ({spacex}) => ({
  programs: spacex.programs
});

const mapDispatchToProps = (dispatch) => ({
  fetchFilteredResults: (requestObject) => dispatch(fetchFilteredPrograms(requestObject))
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);