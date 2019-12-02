#! /usr/bin/env node
const mdLinks = require("./index.js");
const path = process.argv[2]


mdLinks(path)
  .then((snap) => {
    snap.forEach((link) => { 
      console.log(`Title: ${link.text}\nURL: ${link.href}\n${link.status === 200 ? "Works!" : "Doesn't work: status" + link.status}`)
    })
  })
  .catch(`Error: ${console.error}`);