import './post.scss';
const root = document.createElement("div")
root.innerHTML = `<p>Heslssdflos Webpack.</p>`
document.body.appendChild(root);

if (module.hot) {
  module.hot.accept();
}