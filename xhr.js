let xhr = new XMLHttpRequest();

xhr.open('GET', 'players.json', true); 

xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState != 4) return;
  if (xhr.status != 200) {
    console.log(xhr.status + ": " + xhr.statusText);
  } else {
    let content = document.getElementById('content');
    content.innerHTML = '<pre>' + xhr.responseText + '</pre>';
    console.log(xhr.responseText);
  }
}
