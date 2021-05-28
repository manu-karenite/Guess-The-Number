//alert("Hi MY Friends!");

let openWebPage = function () {
  window.open('home.html', '_self');
};
document.querySelector('#continue').addEventListener('click', openWebPage);

let closeWebPage = function () {
  window.open('about:blank', '_self');
  return;
};
document.querySelector('#fail').addEventListener('click', closeWebPage);
