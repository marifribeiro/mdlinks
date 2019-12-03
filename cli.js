#! /usr/bin/env node
const mdLinks = require("./lib/index.js");
const path = process.argv[2]
const validate = process.argv[3]


mdLinks(path, validate)
  .then((snap) => {
    if (validate === '--validate') {
      snap.forEach((link) => { 
        console.log(`Title: ${link.text}\nURL: ${link.href}\nStatus: ${link.status}\n`)
      })
    } else {
      snap.forEach((link) => { 
        console.log(`Title: ${link.text}\nURL: ${link.href}\n`)
      })
    }
  })
  .catch(`Error: ${console.error}`);