import React, { Component } from 'react';
import './App.css';
import Home from './components/Home/Home';
import { Icon } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div className="App">

        {/* Toolbar */}
        <div className="ui attached stackable menu">
          <div className="ui container">
            <a href="#/" className="item">
              Base64
            </a>
            <a href="#/help" className="right item">
              <i className="help icon"></i> Help
            </a>
          </div>
        </div>

        {/* Main content */}
        <div className="ui one column container grid height main">
          <div className="column stretched wide">
            <p></p>
            <Home />
          </div>
        </div>

        {/* Footer */}
        <div className="ui inverted vertical footer segment">
          <div className="ui container">
            <div className="ui stackable inverted divided equal stackable grid">
              <div className="three wide column">
                <span className="ui inverted">Version 1.1.0</span>
              </div>
              <div className="wide column right floated">
                <a href="https://github.com/amimof/base64-web" className="github-link" target="_blank">
                  <i class="github icon"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
