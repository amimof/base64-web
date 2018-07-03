import React, { Component } from 'react';
import './Help.css';

class Help extends Component {
  render() {
    return (
      <div className="Help">

<div className="ui secondary  menu">
  <div className="header item">
    Usage
  </div>
</div>

<div className="ui segment">

	<h2 className="ui header">Usage</h2>
	<div className="ui divider"></div>
	<p>
    Using this app is simple. Paste the text that is to be encoded into the left textbox. The inputed text will automatically be encoded and displayed in the right textbox. You may of course paste an already encoded text in the right box and the text is automatically decoded in the left box. You may also write base64 in the right box, if you're a robot.
	</p>

	<h2 className="ui header">The REST API</h2>
	<div className="ui divider"></div>
	<p>
		This app exposes a simple REST api that lets you encode & decode text. 
	</p>


	<h3 className="ui header">Encoding</h3>
	<div className="ui divider"></div>

	<h4 className="ui top attached header">
	  <div className="code">Encoding using query params</div>
	</h4>
	<div className="ui attached secondary segment">
    <pre>
      {
        'curl -S http://localhost:8080/api/encode/helloworld\n\n'+
        JSON.stringify(
        {
          "input": "helloworld",
          "output": "aGVsbG93b3JsZA==",
          "encoding": "utf8",
          "timestamp": "2016-12-16T12:28:29.523Z"
        }, null, 2)
      }
    </pre>
	</div>

	<h4 className="ui top attached header">
	  <div className="code">Encoding using POST body</div>
	</h4>
	<div className="ui attached secondary segment">
	  <pre>
      {
        'curl -S \\\n' +
        '  -X POST \\\n' +
        '  -H \'Content-Type: application/json\' \\\n' +
        '  -d \'{"data": "May the force be with you"}\' \\\n' +
        '  http://localhost:8080/api/encode\n\n' +
        JSON.stringify({
          "input": "May the force be with you", 
          "output": "TWF5IHRoZSBmb3JjZSBiZSB3aXRoIHlvdQ==",
          "encoding": "utf8",
          "timestamp": "2018-07-02T13:14:31.303Z"
        }, null, 2)
      }
    </pre>
	</div>	

	<h3 className="ui header">Decoding</h3>
	<div className="ui divider"></div>

	<h4 className="ui top attached header">
	  <div className="code">Decoding using query params</div>
	</h4>
	<div className="ui attached secondary segment">
    <pre>
      {
        'curl -S http://localhost:8080/api/decode/aGVsbG93b3JsZA==\n\n'+
        JSON.stringify(
        {
          "encoding": "utf8",
          "input": "aGVsbG93b3JsZA==",
          "output": "helloworld",
          "timestamp": "2018-07-02T13:24:40.637Z"
        }, null, 2)
      }
    </pre>
	</div>

	<h4 className="ui top attached header">
	  <div className="code">Decoding using POST body</div>
	</h4>
	<div className="ui attached secondary segment">
	  <pre>
      {
        'curl -S \\\n' +
        '  -X POST \\\n' +
        '  -H \'Content-Type: application/json\' \\\n' +
        '  -d \'{"data": "TWF5IHRoZSBmb3JjZSBiZSB3aXRoIHlvdQ=="}\' \\\n' +
        '  http://localhost:8080/api/decode\n\n' +
        JSON.stringify({
          "encoding": "utf8",
          "input": "TWF5IHRoZSBmb3JjZSBiZSB3aXRoIHlvdQ==",
          "output": "May the force be with you",
          "timestamp": "2018-07-02T13:26:24.362Z"
        }, null, 2)
      }
    </pre>
	</div>	

	<h3 className="ui header">Using different character encodings</h3>
	<div className="ui divider"></div>
	<p>
		The API supports setting input character encoding when encoding and output character encoding when decoding. Use the `encoding` query param in the URL whenever you want to use another encoding other than the default `utf8`. Supported encodings are:
	</p>
	<ul>
		<li>ascii</li>
		<li>utf8</li>
		<li>utf16le</li>
		<li>ucs2</li>
		<li>base64</li>
		<li>latin1</li>
		<li>binary</li>
		<li>hex</li>
	</ul>

	<h4 className="ui top attached header">
	  <div className="code">Example</div>
	</h4>
  <div className="ui attached secondary segment">
    <pre>
      {
        'curl -S http://localhost:8080/api/encode/helloworld?encoding=ascii\n'+
        JSON.stringify(
          {
            "encoding": "ascii",
            "input": "helloworld",
            "output": "aGVsbG93b3JsZA==",
            "timestamp": "2018-07-02T13:28:53.166Z"
          }, null, 2)
      }
    </pre>
  </div>	

</div>
      </div>
    )
  }
}

export default Help;