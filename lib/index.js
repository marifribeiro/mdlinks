const fs = require("fs");
const fetch = require("node-fetch");

const mdLinks = (path, option) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf8", (err, data) => {
      if (err) reject(`Error: ${err}`);

      const regex = /\[([^\[\]]+)\]\((https?:\/\/[^\)]*)\)/gm;
      let m;
      let result = [];

      while ((m = regex.exec(data)) !== null) {
        result.push({href: m[2], text: m[1].replace(/\s+/gm, " ")});
      }

      if (option) {
        Promise.all(
          result.map((obj) => { 
            return fetch(obj.href)
              .then(response => {
                obj.status = response.status;
              })
              .catch(`Error: ${console.error}`);
          })
        )
          .then(() => {
            resolve(result);
          })
          .catch(`Error: ${console.error}`);
      } else {
        resolve(result);
      }
    });
  });
};

module.exports = mdLinks;