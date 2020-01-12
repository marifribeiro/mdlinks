# Markdown Links

* [1. Introduction](#Introduction)
* [2. About this project](#About-this-project)
* [3. Usage](#Usage)
* [4. Run](#Run)

## Introduction

Markdown is a popular and simple way for non-programming types to write in an easy-to-read format that could be converted directly into HTML.

Markdown uses a very simple formatting syntax to accomplish the same thing that HTML or Rich Text Formatting does. The difference is that it's simpler than HTML.

Programmers use this type of file constantly, as I am doing right now, usually to document their programs.

This is a project of [Laboratoria's bootcamp](https://www.instagram.com/laboratoria_br/), where the students were supposed to create a library that can read a markdown file and identify the links containing in it, and optionally (as this project does), provide the response status of the website, so the user can know if the site is active or not.

You can see all the requirements of the project in [Laboratoria's Github page](https://github.com/Laboratoria/SAP003-md-links).

## About this project

This project was made using only Node.js (Vanilla Javascript), and its usage is through a command line interface, or you can require the function mdLinks in your JavaScript application.
It uses regex to find a pattern of markdown links, such as:
`[This is a link to Google!](https://www.google.com)`

The regular expression will search for the squared brackets followed by and an https:// or http:// pattern inside parenthesis, thus bringing the containing text in this pattern to the user.
It also uses Jest for testing, Node File System to read markdown files and Node Fetch to check the website response.

## Usage

### Command line
You will need [npm](https://www.npmjs.com/) installed to use this library.
This project cannot be installed through npm, since it was also made by other 50 students at Laboratoria's bootcamp, if all of us would upload our projects there, that would pollute npm. You'll need to clone this repository and follow the commands bellow.

After installing npm and cloning this repository, run the following commands:

Install this repository globally:

`npm install -g maryplank/mdlinks`

Use the following command to read a markdown file:

`mdlinks <absolute path to markdown file>`

Note: It is easier to right-click the file and copy it's path.
With this command you will receive the titles and URL addresses of the websites containing in the file you chose. Such as this:

```
    Title: dp npm install
    URL: https://docs.npmjs.com/cli/install

    Title: expressões regulares
    URL: https://developer.mozilla.org/pt-BR/docs/

    Title: Librerías
    URL: http://community.laboratoria.la

    Title: docs npm install aqui
    URL: https://docs.npmjs.com/cli/install
```

If you would like to receive the website response status, add `--validate` at the end of the command, a la the below:

`mdlinks <absolute path to markdown file> --validate`

And the response will be like this:

```
    Title: Librerías
    URL: http://community.laboratoria.la
    Status: 200

    Title: docs npm install aqui
    URL: https://docs.npmjs.com/cli/install
    Status: 200

    Title: broken website
    URL: http://localhost:3000/
    Status: 500
```

### Importing to your JS application

Follow the steps [above](#Usage) to clone and install the repository globally and add the following code to your application:

`const mdLinks = require("./lib/index.js");`

The function accepts two parameters - **path** being the absolute path of the markdown file you want to read and **option** which is (guess what?) optional! And if it's value is **'--validate'**, the function will also return the response status of the website.
See the example below to call mdLinks:

```
mdLinks(/home/user/README.md, '--validate')
  .then((snap) => {
    if (validate === '--validate') {
      snap.forEach((link) => { 
        console.log(link)
      })
    } else {
      snap.forEach((link) => { 
        console.log(link)
      })
    }
  })
  .catch(`Error: ${console.error}`);
  ```

This will return the following if validate returns false:

```
[{href: "https://docs.npmjs.com/cli/install", text: "dp \`npm install\`"},
  {href: "https://developer.mozilla.org/pt-BR/docs/", text: "expressões regulares"}]
```

And the following if you require the status code:

```
[{href: "https://docs.npmjs.com/cli/install", text: "dp \`npm install\`", status: 200},
  {href: "https://developer.mozilla.org/pt-BR/docs/", text: "expressões regulares", status: 200}]
```

## Run

You will need [npm](https://www.npmjs.com/) installed to run this project.

After installing npm, run the following command to install this project's dependecies:

`npm install`

Use the same commands in the section [Usage](#Usage) above to read a markdown file (with or without feedback on the status of the websites).

If you would like to run the tests on this project, you will first need to run a local server that sends status 500 (for testing reasons!). You can see how to do that in [this repository](https://github.com/maryplank/broken-site) (it's very easy!)

With the server up and running, do the following command:

`npm test`

And check the results :)
