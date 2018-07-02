import React, { Component } from 'react';
import './Home.css'
import Encoder from '../Encoder/Encoder';
import Editor from '../Editor/Editor';
import { Message } from 'semantic-ui-react';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      active: 'lower',
      copied: false
    };
    this.handleLowerChange = this.handleLowerChange.bind(this);
    this.handleUpperChange = this.handleUpperChange.bind(this);
    this.handleCopy = this.handleCopy.bind(this);
    this.clear = this.clear.bind(this);
  }

  handleLowerChange(text) {
    this.setState({active: 'lower', text });
  }

  handleUpperChange(text) {
    this.setState({active: 'upper', text });
  }

  clear(e) {
    this.setState({ text: '' });
  }

  handleCopy(e) {
    this.setState({ copied: true });
    setTimeout(() => {
      this.setState({ copied: false })
    }, 3000);
    
  }

  render() {
    const active = this.state.active;
    const text = this.state.text;
    const lowerText = active === 'upper' ? toLower(text) : text;
    const upperText = active === 'lower' ? toUpper(text) : text;
    const copySuccess = this.state.copied ? (
      <Message positive>
        <p>Copied text into clipboard</p>
      </Message>
    ) : null;

    return (
      <div className="Home">

        <div className="ui column secondary menu">
          <div className="header item">
            Encode & Decode
          </div>
        </div>

        <div className="copy-message">
          {copySuccess}
        </div>
  
        <div className="ui two column wide height grid">
          {/* Left editor */}
          <div className="ui column">
            <Editor height="330px" text={lowerText} onChange={this.handleLowerChange} onClear={this.clear} onCopy={this.handleCopy} />
          </div>

          {/* Right Editor */}
          <div className="ui column">
            <Encoder height="320px" text={upperText} onChange={this.handleUpperChange} onClear={this.clear} onCopy={this.handleCopy} />
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