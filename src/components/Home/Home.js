import React, { Component } from 'react';
import './Home.css'
import Encoder from '../Encoder/Encoder';
import Editor from '../Editor/Editor';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      active: 'lower'
    };
    this.handleLowerChange = this.handleLowerChange.bind(this);
    this.handleUpperChange = this.handleUpperChange.bind(this);
  }

  handleLowerChange(text) {
    this.setState({active: 'lower', text });
  }

  handleUpperChange(text) {
    this.setState({active: 'upper', text });
  }

  render() {
    const active = this.state.active;
    const text = this.state.text;
    const lowerText = active === 'upper' ? toLower(text) : text;
    const upperText = active === 'lower' ? toUpper(text) : text;

    return (
      <div className="Home">
        <div className="ui secondary  menu">
          <div className="header item">
            Encode & Decode
          </div>
        </div>
  
        <div className="ui two column wide height grid">
        
          {/* Left editor */}
          <div className="ui column">
            <Editor height="320px" text={lowerText} onChange={this.handleLowerChange}/>
          </div>

          {/* Right Editor */}
          <div className="column">
            <Encoder height="320px" text={upperText} onChange={this.handleUpperChange} />
          </div>
        </div>
      </div>
    );
  }
}

function toUpper(str) {
  return new Buffer(unescape(encodeURIComponent(str))).toString('base64');
}

function toLower(str) {
  return new Buffer(unescape(encodeURIComponent(str)), 'base64').toString('utf8');
}

export default Home;