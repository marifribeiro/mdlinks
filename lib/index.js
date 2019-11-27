const fs = require('fs');

const readFile = (path) => {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) throw err;
        return data;
    });
}

const mdLinks = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) reject(err);

            const regex = /\[(.+?)\]\((https?:\/\/[^\)]*)\)/gm;
            let m;
            let results = [];

            while ((m = regex.exec(data)) !== null) {
                // This is necessary to avoid infinite loops with zero-width matches
                if (m.index === regex.lastIndex) {
                    regex.lastIndex++;
                }
                results.push({href: m[2], text: m[1]});
            }

            if (results.length <= 0) {
                return 'No matches found';
            }

            resolve(results);
        });
    })
}

module.exports = mdLinks;