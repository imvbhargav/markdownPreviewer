# freeCodeCamp Certification project
## Markdown Previewer
### Test Conditions passed: 8/8
#### Technology Stack
1. You can use any mix of HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, and jQuery to complete this project. You should use a frontend framework (like React for example) because this section is about learning frontend frameworks. Additional technologies not listed above are not recommended and using them is at your own risk. We are looking at supporting other frontend frameworks like Angular and Vue, but they are not currently supported. We will accept and try to fix all issue reports that use the suggested technology stack for this project. Happy coding!
#### Tests
1. I can see a <textarea> element with corresponding id="editor"
2. I can see an element with corresponding id="preview"
3. When I enter text into the #editor element, the #preview element is updated as I type to display the content of the textarea
4. When I enter GitHub flavored markdown into the #editor element, the text is rendered as HTML in the #preview element as I type (Hint: You don't need to parse Markdown yourself - you can import the Marked library for this: https://cdnjs.com/libraries/marked)
5. When my markdown previewer first loads, the default text in the #editor field should contain valid markdown that represents at least one of each of the following elements: a header (H1 size), a sub header (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text
6. When my markdown previewer first loads, the default markdown in the #editor field should be rendered as HTML in the #preview element
7. OPTIONAL BONUS (you do not need to make this test pass): My markdown previewer interprets carriage returns and renders them as <br> (line break) elements (HINT: read the Marked.js docs for this one!).