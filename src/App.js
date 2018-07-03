import React, { Component } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Help from './components/Help/Help';
import { Link, Route, Switch} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">

        {/* Toolbar */}
        <div className="ui attached stackable menu">
          <div className="ui container">
            <Link to='/' className="item">
              Base64
            </Link>
            <Link to='/help' className="right item">
              <i className="help icon"></i> Help
            </Link>
          </div>
        </div>

        {/* Main content */}
        <div className="ui one column container grid height main">
          <div className="column stretched wide">
            <p></p>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/help' component={Help}/>
            </Switch>
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
                <a href="https://github.com/amimof/base64-web" className="github-link" target="_blank" rel="noopener noreferrer">
                  <i className="github icon"></i>
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
