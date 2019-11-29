const mdLinks = require('../index');
const readmePath = '/home/mariana/dev/Laboratoria/SAP003-md-links/lib/__tests__/test.md';
const errorPath = '/home/mariana/dev/Laboratoria/SAP003-md-links/lib/__tests__/tes.md';
const emptyPath = '/home/mariana/dev/Laboratoria/SAP003-md-links/lib/__tests__/empty.md';

describe("mdLinks", () => {
    test('Expect to be a function', () => {
        expect(typeof mdLinks).toBe('function');
      });

    test('returns the right data', () => {
        return mdLinks(readmePath).then(data => {
            expect(data).toEqual([{href: "https://docs.npmjs.com/cli/install", text: "dp \`npm install\`"},
            {href: "https://developer.mozilla.org/pt-BR/docs/", text: "expressões regulares"},
            {href: "http://community.laboratoria.la", text: "Librerías"},
            {href: "https://docs.npmjs.com/cli/install", text: "docs npm install aqui"}]);
        });
    });

    test('returns error', () => {
        return mdLinks(errorPath).catch(data => {
            expect(data).toEqual("Error: Error: ENOENT: no such file or directory, open '/home/mariana/dev/Laboratoria/SAP003-md-links/lib/__tests__/tes.md'");
        });
    });

    test('returns empty when there ar eno matches', () => {
        return mdLinks(emptyPath).then(data => {
            expect(data).toEqual([]);
        });
    });

    
})

