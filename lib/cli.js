const mdLinks = require("./index.js");
const readmePath = '/home/mariana/dev/Laboratoria/SAP003-md-links/lib/README.md';

mdLinks(readmePath)
  .then((snap) => {
    snap.forEach(link => console.log(`Title: ${link.text} URL: ${link.href}`))
  })
  .catch(console.error);