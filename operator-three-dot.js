const button = {
    width: 200,
    text: 'Buy'
}

const redButton = {
    ...button,
    color: 'red'
}

console.table(redButton)

/* Необходимо подключение к html странице*/
let btn = document.createElement('button');
document.body.append(btn);
btn.innerHTML = redButton.text;
btn.style.width = redButton.width;
btn.style.color = redButton.color;
