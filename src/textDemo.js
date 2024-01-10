let multilineCode = `
\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

***
`

let otherDemo = `
And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

***

- And of course there are lists.
  - Some are bulleted.
    - With different indentation levels.
        - That look like this.


1. This is first list item,
1. This is second list item,
1. And last but not least.
1. Yea, this is a numbered list!
`

let imageLink = `![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg) \n\n

***
`

let textFormat = `# This is heading\n\n## This is sub-heading\n\n
This is a [link](https://www.freecodecamp.org), and\n\n
 > This is a Block Quote!\n\n**This is bolded text**\n\n
 Heres some code, \`<div></div>\`, between 2 backticks.\n\n`
 

 let demoText = imageLink + textFormat + multilineCode + otherDemo

 export default demoText;