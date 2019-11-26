const str = `banana, caqui html tentando várias coisas aleatórias www
    [link](http://laboratoria.com/) banana abc de e outro link lalala [link](https://tec-noz.com.br/aulas)
    [link](https://www.mundocanibal.com.br/)

    aula teste aleatorio bla bla bla [link](http://aula.com.br/) frase com ponto. frase com outro ponto...
    frase sem ponto`;

const mdLinks = (str) => {
    const regex = /\[(.+?)\]\((https?:\/\/[^\)]*)\)/gm;
    let m;
    let arr = []

    while ((m = regex.exec(str)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }
        
        // The result can be accessed through the `m`-variable.
        // m.forEach((match, groupIndex) => {
        //     console.log(`Found match, group ${groupIndex}: ${match}`);
        // });

        arr.push({href: m[2], text: m[1]})
    }

    if (arr.length <= 0) {
        return 'No matches found'
    }

    return arr;
}

mdLinks(str)
module.exports = mdLinks;