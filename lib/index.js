const fs = require('fs');
const fetch = require('node-fetch');

const mdLinks = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) reject(`Error: ${err}`);

            const regex = /\[([^\[\]]+)\]\((https?:\/\/[^\)]*)\)/gm;
            let m;
            let results = [];

            while ((m = regex.exec(data)) !== null) {
                results.push({href: m[2], text: m[1].replace(/\s+/gm, ' ')})
            }

            results.map((obj) => { 
                fetch(obj.href)
                    .then(response => {
                        obj.status = response.status
                    })
                    .catch(`Error: ${console.error}`)
            })

            resolve(results);
        });
    })
}

module.exports = mdLinks;