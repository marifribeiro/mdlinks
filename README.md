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

This project was made using only Node.js (Vanilla Javascript), and it's usege is through a command line interface. 
It uses regex to find a pattern of markdown links, such as:
`[This is a link!](https://link.com)`
The regular expression used will search for the squared brackets followed by and an https:// or http:// pattern inside parenthesis, thus bringing the containing text in this pattern to the user.
Jest for testing, Node File System to read markdown files and Node Fetch to check the website response.

## Usage

You will need [npm](https://www.npmjs.com/) installed to use this library.

After installing npm, run the following commands:

Install this repository globally:

`npm install -g maryplank/mdlinks`

Use the following command to read a markdown file:

`mdlinks <absolute path to markdown file>`

Note: It is easier to right-click the file and copy it's path.
With this command you will receive the titles and address of the websites containing in the file you chose. Such as this:

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

This
If you would like to receive the website response status, add --validate at the end of the command, a la the below:

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

## Run

You will need [Node](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) installed to run this project.

After inslling both, run the following command to install this project's dependecies:

`npm install`

Use the same commands in the section [Usage](https://github.com/maryplank/mdlinks#Usage) to read a markdown file (with or without feedback on the status of the websites).

If you would like to run the tests on this project, you will first need to run a local server that sends status 500 (for testing reasons!). You can see how to do that in [this repository](https://github.com/maryplank/broken-site) (it's very easy!)

With the server up and running, do the following command:

`npm test`

And check the results :)
