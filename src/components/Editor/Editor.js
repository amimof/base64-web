import React, { Component } from 'react';
import './Editor.css';

import AceEditor from 'react-ace';

import 'brace/mode/json';
import 'brace/mode/yaml';
import 'brace/mode/xml';
import 'brace/mode/properties';
import 'brace/mode/javascript';
import 'brace/mode/markdown';
import 'brace/mode/makefile';
import 'brace/mode/ini';
import 'brace/mode/text';
import 'brace/theme/chrome';

import { Dropdown, Icon, Menu, Segment, Popup, Checkbox } from 'semantic-ui-react'

import { findDOMNode } from 'react-dom';


class Editor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mode: props.mode || 'JSON',
      ignoreErrors: false,
      showGutter: true,
      highlightLine: true
    }
    this.handleChange = this.handleChange.bind(this);
    this.setMode = this.setMode.bind(this);
    this.setIgnoreErrors = this.setIgnoreErrors.bind(this);
    this.setShowGutter = this.setShowGutter.bind(this);
    this.setHightlightLine = this.setHightlightLine.bind(this);
  }

  setMode(e, d) {
    this.setState({ mode: d.value });
  }
  
  handleChange(e) {
    this.props.onChange(e);
  }

  setIgnoreErrors(e) {
    let ignore = !this.state.ignoreErrors
    this.setState({ ignoreErrors: ignore });
  }

  setShowGutter(e) {
    let gutter = !this.state.showGutter;
    this.setState({ showGutter: gutter });
  }

  setHightlightLine(e) {
    let highlight = !this.state.highlightLine;
    this.setState({ highlightLine: highlight });
  }


  render() {
    const text = this.props.text;
    const height = this.props.height || '500px';
    const mode = this.state.mode; 
    const ignoreErrors = this.state.ignoreErrors;
    const showGutter = this.state.showGutter;
    const highlightLine = this.state.highlightLine;

    const languages = ["JSON", "YAML", "XML", "Properties", "JavaScript", "Markdown", "Makefile", "INI", "Text"].map((item) => 
      <Dropdown.Item content={item} value={item} key={item} onClick={this.setMode} />
    )

    return (
      <div className="Editor">
        <Menu attached="top">
          <Menu.Menu>
            <Dropdown item text={mode} closeOnChange={false}>
              <Dropdown.Menu>
                <Dropdown.Header content="Language" />
                {languages}
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
          <Menu.Menu position="right">
            <Dropdown item icon="cog" closeOnChange={false}>
              <Dropdown.Menu>
                <Dropdown.Header content="Editor" />
                <Dropdown.Item onClick={this.setIgnoreErrors} text="Ignore Errors" icon={ignoreErrors ? 'check square' : 'square outline'} />
                <Dropdown.Item onClick={this.setShowGutter} text="Show Gutter" icon={showGutter ? 'check square' : 'square outline'} />
                <Dropdown.Item onClick={this.setHightlightLine} text="Highlight Line" icon={highlightLine ? 'check square' : 'square outline'} />
              </Dropdown.Menu>
            </Dropdown>
            <Popup content="Copy to clipboard" trigger={
              <Menu.Item icon="copy" />
            } />
            <Popup content="Clear editor" trigger={
              <Menu.Item icon="remove" />
            } />
          </Menu.Menu>
        </Menu>
        <div className="ui bottom attached segment">
          <div className="ui fluid form">
            <div className="field">
              <AceEditor
                className="ace-editor"
                height={height}
                value={text}
                mode={mode.toLowerCase()}
                theme="chrome"
                onChange={this.handleChange}
                name="ace-editor"
                wrapEnabled={true}
                showPrintMargin={false}
                showGutter={showGutter}
                highlightActiveLine={highlightLine}
                editorProps={{$blockScrolling: 'Infinity' }}
                setOptions={{indentedSoftWrap: false, useWorker: !ignoreErrors}} />
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Editor;