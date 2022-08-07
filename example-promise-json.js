fetch('https://dmitriy-1986.github.io/Learn-JavaScript/example.json')
    .then((response) => response.json())
    .then(json => console.log(json)) 
    .catch(error => console.error(error))
//
fetch('https://dmitriy-1986.github.io/Learn-JavaScript/example.json')
    .then((response) => response.json())
    .then(json => document.write(json.title)) //возвращает объект
    .catch(error => console.error(error))
