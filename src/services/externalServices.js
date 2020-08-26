class _ExternalService {
  constructor() {
    this.apiDomain = (process.env.REACT_APP_API_BASE || '');
  }

  

  // custom api calls start
  getDesiredResponse(response) {
    return response.map(data=>{
      const { rocket : { rocket_name, first_stage : { cores } }, mission_id, launch_year, launch_success, links : {mission_patch_small}, flight_number, mission_name } = data;
      return {
        rocket_name: rocket_name,
        mission_name: mission_name,
        flight_number: flight_number,
        mission_id: mission_id,
        mission_image: mission_patch_small,
        launch_year: launch_year,
        launch_success: launch_success,
        land_success: cores[0].land_success
      }
    })
  }

  async getAllPrograms() {
    const result = await this._dataRequest(`launches?limit=100`, {
      method: 'GET'
    });
    return this.getDesiredResponse(result);
  }

  async getFilteredPrograms(requestObject) {
    let { yearFilter, launchSuccess, landSuccess } = requestObject;
    const result = await this._dataRequest(`launches?limit=100${yearFilter?'&launch_year='+yearFilter:''}${launchSuccess?'&launch_success='+launchSuccess:''}${landSuccess?'&land_success='+landSuccess:''}`, {
      method: 'GET'
    });
    return this.getDesiredResponse(result);
  }
  // custom api calls end


  async _dataRequest(path, options) {
    // performs api calls sending the required authentication headers
    const headers = {
      'Content-Type': 'application/json',
      'Accept': '*/*',
      'Access-Control-Allow-Origin': '*'
    }

    if (typeof options.body === 'object') options.body = JSON.stringify(options.body);
    // ${this.apiDomain}
    const result = await fetch(`https://cors-anywhere.herokuapp.com/${this.apiDomain}${path}`, {
      headers,
      ...options
    });

    try {
      this._checkStatus(result);
      return result.json();
    } catch (err) {
      return await this._handleError(err);
    }
  }

  async _handleError(err) {
    // Extracts and returns a rejected promise, with the error message (if any)
    if (!!err.response) {
      const {
        response
      } = err;
      const json = await response.json();

      if (json) return Promise.reject(json.message);
      else return Promise.reject(response.statusText);
    }

    return Promise.reject(err);
  }

  _checkStatus(response) {
    // raises an error in case response status is not a success
    if (response.status >= 200 && response.status < 300) { // Success status lies between 200 to 300
      return response
    } else {
      const error = new Error(response.statusText)
      error.response = response
      throw error
    }
  }
}

const ExternalService = new _ExternalService();
export default ExternalService;