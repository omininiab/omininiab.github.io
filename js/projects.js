let projects = [
  {
    title: "Youtube Page",
    url: "https://www.ominini.com/youtube-page",
    img: "/img/youtube-page.png",
  },{
    title: "Calculator",
    url: "https://www.ominini.com/calculator",
    img: "/img/calculator.png",
  },
  {
    title: "Etch-a-Sketch",
    url: "https://www.ominini.com/etch-a-sketch",
    img: "/img/etch-a-sketch.png",
  },
  {
    title: "Rock Paper Scissors",
    url: "https://www.ominini.com/rock-paper-scissors",
    img: "/img/rock-paper-scissors.png",
  },
  {
    title: "Google Homepage",
    url: "https://www.ominini.com/google-homepage",
    img: "/img/google-homepage.png",
  },
  {
    title: "Survey Form",
    url: "https://www.ominini.com/survey-form",
    img: "/img/survey-form.png",
  },
  {
    title: "Ravi Tribute Page",
    url: "https://www.ominini.com/ravi-tribute-page",
    img: "/img/ravi-tribute-page.png",
  },
];

const projectList = document.querySelector("#projectList");

projects.forEach(function (project) {
  let aProject = document.createElement("a");
  aProject.classList.add("project-tile");
  aProject.classList.add("flex-item");
  aProject.target = "_blank";
  aProject.href = project.url;
  aProject.innerHTML = `<img class="project-image" src=${project.img} /><p class="project-title">${project.title}</p>`;
  projectList.appendChild(aProject);
})
