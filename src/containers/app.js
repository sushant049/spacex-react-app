import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import AppHeader from './header';
import PageContent from './page-content';
import AppFooter from './footer';
import styled, { css } from 'styled-components';
import Loader from '../components/loader';

const PageContainer = styled.div`
  width: 100%;
  max-width: 1440px;
`;

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Loader/>
          <PageContainer>
            <AppHeader/>
            <PageContent/>
            <AppFooter/>
          </PageContainer>
        </Router>
      </>
    )
  }
}

export default App;