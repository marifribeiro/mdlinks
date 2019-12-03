# MD Links

## Introduction

This is a project of [Laboratoria's bootcam](https://www.instagram.com/laboratoria_br/), where the students were supposed to create a library that can read a markdown file and identify the links containing in that file, and optionally (as this project does), the response status of the website, so the user can know if the site is active or not.

You can see the requirements of the project in [Laboratoria's Github page](https://github.com/Laboratoria/SAP003-md-links).

## About this project

This project was made using only JavaScript, and uses a command line interface. It used Jest for testing, Node File System to read markdown files and Node Fetch to check the website response.

## Usage

You will need [npm](https://www.npmjs.com/) installed to use this library.

After installing npm, run the following commands:

Install this repository globally

`npm install -g maryplank/mdlinks`

Use the following command to read a markdown file:

`mdlinks <absolute path to markdown file>`

With this command you will receive the title and address of the websites containing in the file you chose. Such as this:

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
