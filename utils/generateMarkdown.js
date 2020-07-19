// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${data.description}

  ## Table of Contents
      ${data.TOC}

  ## Installation
     ${data.installation}

  ## Usage
     ${data.usage}

  ## License
     ${data.license}

  ## Contributing
     ${data.contributing}

  ## Testing
     ${data.tests}

  ## Support
     ${data.questions}

  ## ${data.github}

`;
}

module.exports = generateMarkdown;
