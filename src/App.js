import React, { Component } from 'react';
import './App.css';
import MyHeader from './components/commonComponents/myHeader.js';
import HomeContainer from './components/home/homeContainer.js';
import SearchContainer from './components/search/searchContainer.js';
import DetailContainer from './components/detail/detailContainer.js';
import Static from './components/static/staticPresentational.js';
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
            <MyHeader />
              <div className="loader">
                  <Switch>
                    <Route exact path="/" component={HomeContainer} />} />
                    <Route path="/search" component={SearchContainer} />} />
                    <Route exact path="/details/:id" component={DetailContainer} />} />
                    <Route exact path="/details" component={Static} />} />
                  </Switch>
              </div>
      </div>
    );
  }
}

export default App;
