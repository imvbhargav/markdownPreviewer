import './App.css';
import { useState } from 'react';
import { marked } from 'marked';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import demoText from './textDemo';
import * as inlineStyles from './inlineStyles';

const renderer = new marked.Renderer()

// Make link open in new tab
renderer.link = function(href, title, text) {
  return `<a target="_blank" rel="noopener" href="${href}">${text}</a>`;
};

// Allow line breaks with carriage return
marked.setOptions({
  breaks: true
});

function App() {
  let [textToMark, setTextToMark] = useState(demoText);

  const handleChange = (event) => {
    setTextToMark(event.target.value);
  }

  return (
    <div className="App">
      <h1 className="text-center ff-new" style={{marginTop: "5px"}}>Markdown Previewer</h1>
      <h6 className="text-center ff-new" style={{marginBottom: "35px"}}>-: by Bhargav V :-</h6>
      <div>
        <Container>
          <Row>
            <Col sm={6} style={inlineStyles.mbForMarkdown}>
            <h4 className="text-center">
              <Badge bg="dark" className="text-align-center" variant="secondary">
                EDITOR
              </Badge>
            </h4>
            <div id="markdown" style={inlineStyles.inputStyle}>
              <textarea id="editor" onChange={handleChange} style={inlineStyles.inputStyle} defaultValue={demoText}>
              </textarea>
            </div>
            </Col>
            <Col sm={6} style={inlineStyles.mbForMarkdown}>
              <h4 className="text-center">
                <Badge bg="dark" className="text-align-center" variant="secondary">
                  PREVIEW
                </Badge>
              </h4>
              <div className="" style={inlineStyles.outputStyleOfOuterDiv}>
                <div id="preview" 
                  onChange={handleChange} 
                  style={inlineStyles.outputStyleOfInnerDiv} 
                  disabled 
                  dangerouslySetInnerHTML={{__html: marked(textToMark, { renderer: renderer }),}}>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>      
    </div>
  );
}

export default App;
