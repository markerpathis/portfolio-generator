const fs = require("fs");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your full name? (example: John Smith)",
      name: "inputName",
    },
    {
      type: "input",
      message: "Where do you live? (example: Seattle, WA)",
      name: "inputLocation",
    },
    {
      type: "input",
      message: "Tell us a bit about yourself for your developer Bio.",
      name: "inputBio",
    },
    {
      type: "input",
      message: "What is the URL for your LinkedIn page?",
      name: "inputLinkedinUrl",
    },
    {
      type: "input",
      message: "What is the URL for your GitHub page?",
      name: "inputGithubUrl",
    },
  ])
  .then((response) =>
    fs.writeFile(
      "index2.html",
      `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="./assets/css/style.css" />

    <title>Portfolio</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"
    />
  </head>

  <body id="body">
    <header class=""></header>
    <div class="container">
      <div class="content is-normal">
        <h1 class="title">${response.inputName}</h1>
        <p>Developer Portfolio</p>
        <p>${response.inputLocation}</p>
        <h2>Bio</h2>
        <p>${response.inputBio}</p>
        <h2>Connect with me here!</h2>
        <button
          onclick="window.open('${response.inputLinkedinUrl}')"
          class="button is-black"
        >
          LinkedIn
        </button>
        <button
          onclick="window.open('${response.inputGithubUrl}')"
          class="button is-black"
        >
          GitHub
        </button>
      </div>
    </div>
  </body>
</html>`,
      (err) => (err ? console.error(err) : console.log("Success!"))
    )
  );
