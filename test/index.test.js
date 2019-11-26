const mdLinks = require('../lib/index');

test('Expect to be a function', () => {
    expect(typeof mdLinks).toBe('function');
  });

test('Expect to find a link in markdown pattern', () => {
    expect(mdLinks('[this is a link](http://www.link.com)'))
    .toEqual([{"href": "http://www.link.com", "text": "this is a link"}])
});

let testStr = `banana, caqui html tentando várias coisas aleatórias www
[link](http://laboratoria.com/) banana abc de e outro link lalala [link](https://tec-noz.com.br/aulas)
[link](https://www.mundocanibal.com.br/)

aula teste aleatorio bla bla bla [link](http://aula.com.br/) frase com ponto. frase com outro ponto...
frase sem ponto`;

test('Expect to find a link among other texts', () => {
    expect(mdLinks(testStr))
    .toEqual([
        { href: 'http://laboratoria.com/', text: 'link' },
        { href: 'https://tec-noz.com.br/aulas', text: 'link' },
        { href: 'https://www.mundocanibal.com.br/', text: 'link' },
        { href: 'http://aula.com.br/', text: 'link' }
      ])
});

test('Expect to return an error when there are no matches', () => {
    expect(mdLinks('banana'))
    .toEqual('No matches found')
});

