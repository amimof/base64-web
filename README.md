# base64-web
A web app for encoding and decoding base64 strings. Includes both the web app for humans and a simple API for robots. 

## Getting Started
Before installing, make sure you have `Nodejs` and `npm` installed.

Clone this repository
```
git clone https://github.com/amimof/base64-web.git
```

Install
```
cd base64-web
npm install
```

Running
```
npm start
Listening on http://0.0.0.0:8080/
```

Now browse to `http://localhost:8080`.

## Usage
Using this app is simple. Paste the text that is to be encoded into the left textbox. The inputed text will automatically be encoded and displayed in the right textbox. You may of course paste an already encoded text in the right box and the text is automatically decoded in the left box. You may also write base64 in the right box, if you're a robot.

## The API

### Encoding

#### `GET /api/base64/encode/helloworld`

Result
```json
{
  "input": "helloworld",
  "output": "aGVsbG93b3JsZA==",
  "encoding": "utf8",
  "timestamp": "2016-12-16T12:28:29.523Z"
}
```

#### `POST /api/base64/encode`

Body
```json
{
  "data": "May the force be with you."
}
```

Result
```json
{
  "input": "helloworld",
  "output": "aGVsbG93b3JsZA==",
  "encoding": "utf8",
  "timestamp": "2016-12-16T12:28:29.523Z"
}
```

### Decoding

#### `GET /api/base64/decode/aGVsbG93b3JsZA==`

Result
```json
{
  "input": "aGVsbG93b3JsZA==",
  "output": "helloworld",
  "encoding": "utf8",
  "timestamp": "2016-12-16T13:04:56.599Z"
}
```

#### `POST /api/base64/decode`

Body
```json
{
  "data": "TWF5IHRoZSBmb3JjZSBiZSB3aXRoIHlvdS4="
}
```

Result
```json
{
  "input": "TWF5IHRoZSBmb3JjZSBiZSB3aXRoIHlvdS4=",
  "output": "May the force be with you.",
  "encoding": "utf8",
  "timestamp": "2016-12-16T13:05:59.990Z"
}
```

### Using character encodings

The API supports setting input character encoding when encoding and output character encoding when decoding. Use the `encoding` query param in the URL whenever you want to use another encoding other than the default `utf8`. Supported encodings are:

* ascii
* utf8
* utf16le
* ucs2
* base64
* latin1
* binary
* hex

Example: `GET /api/base64/encode/helloworld?encoding=ascii`
