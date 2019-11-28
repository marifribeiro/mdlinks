const mdLinks = require('../index');
const readmePath = '/home/mariana/dev/Laboratoria/SAP003-md-links/lib/__tests__/test.md';

describe("mdLinks", () => {
    test('Expect to be a function', () => {
        expect(typeof mdLinks).toBe('function');
      });

    test('returns the right data', () => {
    return mdLinks(readmePath).then(data => {
        expect(data).toEqual([{href: "https://docs.npmjs.com/cli/install", text: "dp \`npm install\`"},
        {href: "https://developer.mozilla.org/pt-BR/docs/", text: "expressões regulares"},
        {href: "http://community.laboratoria.la", text: "Librerías"},
        {href: "https://docs.npmjs.com/cli/install", text: "docs npm install \naqui"}]);
    });
    });
})

