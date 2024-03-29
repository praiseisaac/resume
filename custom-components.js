const icons = {
  aws: "aws icon.png",
  auth0: "auth0 icon.png",
  bash: "bash icon.png",
  bubble: "bubble icon.png",
  django: "django icon.png",
  dotnet: "dotnet icon.png",
  ec2: "ec2 icon.jpg",
  express: "express icon.png",
  github: "github icon.png",
  google: "google cloud icon.png",
  heroku: "heroku icon.ico",
  java: "java icon.jpg",
  jquery: "jquery icon.ico",
  js: "js icon.jpg",
  kotlin: "kotlin icon.ico",
  next: "next icon.png",
  postgres: "postgres icon.png",
  python: "python favicon.ico",
  rails: "rails icon.png",
  ruby: "ruby icon.png",
  reactjs: "reactjs icon.png",
  s3: "s3 icon.png",
  ts: "ts icon.png",
  graphql: "graphql icon.png",
  amplify: "amplify icon.png",
  html: "html icon.png",
  heart: "heart icon.webp",
  css: "css icon.png",
  koajs: "koajs icon.png",
  firebase: "firebase icon.png",
  flutter: "flutter icon.png",
  //   aws icon.png          django icon.png       express icon.png      google cloud icon.png java icon.jpg         kotlin icon.ico       python favicon.ico    reactjs icon.png
  // bash icon.png         dotnet icon.png       github icon.png       heroku icon.ico       js icon.jpg           next icon.png         rails icon.png        ts icon.png
};

const renderHover = (element, name) => {
  console.log(element);
  const title = document.createElement("div");
  title.style.position = "absolute";
  title.style.top = "0";
  title.style.left = "0";
  title.style.zIndex = "100";
  title.style.backgroundColor = "white";
  title.style.height = "25px";
  title.style.width = "125px";
  title.innerText = name;
  console.log(title)
  element.appendChild(title);
  element.onmouseleave = () => {
    element.removeChild(title);
  }
}

class IconItem extends HTMLElement {
  constructor() {
    super();

    var img = document.createElement("img");
    img.src = "assets/" + icons[this.getAttribute("icon")];
    img.className = "icon-image";
    img.style.height = "100%";
    img.style.position = "relative";
    img.onmouseenter = (e) => renderHover(e.currentTarget, this.getAttribute("name"));

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(img);
    this.style = "display: block; width: max-content";
  }
}

customElements.define("icon-item", IconItem);

class ListItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    var items = "";

    if (!this.hasAttribute("summary")) {
      this.shadowRoot.innerHTML = `<div></div>`;
      return;
    }

    if (this.getAttribute("stack")) {
      this.getAttribute("stack")
        .split(",")
        .forEach((item) => {
          items += `<icon-item class="icon-image" icon="${item}"></icon-item>`;
        });
    }

    this.shadowRoot.innerHTML = `<li><div class="list-item">
    <link rel="stylesheet" href="style.css">
    <span>
     <div> ${this.getAttribute("summary")}</div>
      ${!items ? "" : ('<div class="tools-icons">' + items + "</div>")}
    </span>

  </div></li>`;
  }
}

customElements.define("list-item", ListItem);

class ExperienctBox extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    let children = "";
    for (let item of this.children) {
      children += `${item.outerHTML}`;
    }

    const date = this.getAttribute("date");

    this.shadowRoot.innerHTML = `<div>
    <link rel="stylesheet" href="style.css">
    <p class="employment-title">${this.getAttribute("header")}</p>
    <p class="employer-name">${this.getAttribute("company")}${
      date !== "" ? " / <strong>" + date + "</strong>" : ""
    }</p>
    <ul>
        ${children}
    </ul>
  </div>`;
  }
}

customElements.define("experience-box", ExperienctBox);
