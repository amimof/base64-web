import React, { Component } from 'react';
import './Encoder.css';
import { Menu, Popup } from 'semantic-ui-react';

class Encoder extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    const text = this.props.text;
    const height = this.props.height || "500px";
    return (
      <div className="Encoder">
        <Menu attached="top">
          <Menu.Item active content="Encoded" />
          <Menu.Menu position="right">
            <Popup content="Copy to clipboard" trigger={
              <Menu.Item icon="copy" />
            } />
            <Popup content="Clear editor" triger={
              <Menu.Item icon="remove" />
            } />
          </Menu.Menu>
        </Menu>
        <div className="ui bottom attached segment">
          <div className="ui fluid form">
            <div className="field">
              <textarea value={text} onChange={this.handleChange} />
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default Encoder;