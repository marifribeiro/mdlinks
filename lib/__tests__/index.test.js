const mdLinks = require("../index.js");
const readme = "/home/mariana/dev/Laboratoria/SAP003-md-links/lib/__tests__/test.md";
const error = "/home/mariana/dev/Laboratoria/SAP003-md-links/lib/__tests__/tes.md";
const empty = "/home/mariana/dev/Laboratoria/SAP003-md-links/lib/__tests__/empty.md";

const resultDefault = [{href: "https://docs.npmjs.com/cli/install", text: "dp \`npm install\`"},
  {href: "https://developer.mozilla.org/pt-BR/docs/", text: "expressões regulares"},
  {href: "http://community.laboratoria.la", text: "Librerías"},
  {href: "https://docs.npmjs.com/cli/install", text: "docs npm install aqui"}, 
  {href: "http://localhost:3000/", text: "link quebrado"}];

const resultValidate = [{href: "https://docs.npmjs.com/cli/install", text: "dp \`npm install\`", status: 200},
  {href: "https://developer.mozilla.org/pt-BR/docs/", text: "expressões regulares", status: 200},
  {href: "http://community.laboratoria.la", text: "Librerías", status: 200},
  {href: "https://docs.npmjs.com/cli/install", text: "docs npm install aqui", status: 200}, 
  {href: "http://localhost:3000/", text: "link quebrado", status: 500}];

describe("mdLinks", () => {
  test("Expect to be a function", () => {
    expect(typeof mdLinks).toBe("function");
  });

  test("returns the right data when given only the path", () => {
    return mdLinks(readme).then(data => {
      expect(data).toEqual(resultDefault);
    });
  });

  test("returns the site status when given path and option", () => {
    return mdLinks(readme, "--validate").then(data => {
      expect(data).toEqual(resultValidate);
    });
  });

  test("returns error when the path is wrong", () => {
    return mdLinks(error).catch(data => {
      expect(data).toEqual("Error: Error: ENOENT: no such file or directory, open '/home/mariana/dev/Laboratoria/SAP003-md-links/lib/__tests__/tes.md'");
    });
  });

  test("returns empty when there are no matches", () => {
    return mdLinks(empty).then(data => {
      expect(data).toEqual([]);
    });
  });    
});

