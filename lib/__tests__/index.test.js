const mdLinks = require('../index');
const test = '/home/mariana/dev/Laboratoria/SAP003-md-links/lib/__tests__/test.md';
const test1 = '/home/mariana/dev/Laboratoria/SAP003-md-links/lib/__tests__/test-1.md';

describe("mdLinks", () => {
    test('Expect to be a function', () => {
        expect(typeof mdLinks).toBe('function');
      });

    test('returns the right data on common links', () => {
        return mdLinks(test).then(data => {
            expect(data).toEqual([{href: "https://docs.npmjs.com/cli/install", text: "dp \`npm install\`"},
            {href: "https://developer.mozilla.org/pt-BR/docs/", text: "expressões regulares"},
            {href: "http://community.laboratoria.la", text: "Librerías"},
            {href: "https://docs.npmjs.com/cli/install", text: "docs npm install aqui"}]);
        });
    });

    test('returns the right data on links with line breaks', () => {
        return mdLinks(test1).then(data => {
            expect(data).toEqual([{href: "https://medium.com/", text: "JavaScript assíncrono: callbacks, promises e async functions"},
            {href: "https://docs.npmjs.com/getting-started/publishing-npm-packages", text: "Publicar package"},
            {href: "https://docs.npmjs.com/getting-started/publishing-npm-packages", text: "Criando um módulo Node.js"},
            {href: "https://nodejs.org/api/", text: "Ler um arquivo"}]);
        });
    });
})

