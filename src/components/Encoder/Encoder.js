import React, { Component } from 'react';
import { Menu, Popup, TextArea } from 'semantic-ui-react';
import CopyToClipBoard from 'react-copy-to-clipboard';
import './Encoder.css';

class Encoder extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleCopy = this.handleCopy.bind(this);
  }

  handleChange(e) {
    this.props.onChange(e.target.value);
  }

  handleClear(e) {
    this.props.onClear(e);
  }

  handleCopy(e) {
    this.props.onCopy(e);
  }

  render() {
    const text = this.props.text;
    return (
      <div className="Encoder">
        <Menu attached="top">
          <Menu.Item active content="Encoded" />
          <Menu.Menu position="right">
            <Popup content="Copy to clipboard" trigger={
              <CopyToClipBoard text={text} onCopy={this.handleCopy}>
                <Menu.Item icon="copy" />
              </CopyToClipBoard>
            } />
            <Popup content="Clear editor" trigger={
              <Menu.Item icon="remove" onClick={this.handleClear} />
            } />
          </Menu.Menu>
        </Menu>
        <div className="ui bottom attached segment">
          <div className="ui fluid form">
            <div className="field">
              <TextArea autoHeight value={text} rows="19" onChange={this.handleChange} className="textarea" />
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default Encoder;