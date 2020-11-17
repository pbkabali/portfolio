var modal = document.getElementById("myModal");

var imageDiv = document.getElementById("model-img-div");

var liveDemo = document.getElementById("see-live");

var sourceCode = document.getElementById("see-source");

var projectTitle = document.getElementById("model-project-title");

var technologies = document.getElementById("model-techs");

var projectDesc = document.getElementById("project-description");

var body = document.getElementById("body");

var projectDetails = {
  1 : {
    imgURL: "./static/graphics/macbook-TNW-mockup.png",
    demoURL: "https://raw.githack.com/ABDELLANI-Youcef/TNW-Responsive-design/homepage-responsive/index.html",
    codeURL: "https://github.com/ABDELLANI-Youcef/TNW-Responsive-design",
    title: "The NextWeb Rebuild",
    techs: ["HTML/CSS"],
    desc: "The project was the sixth on the microverse HTML/CSS curriculum created using CSS positioning, FLEX, Float and Grid for some elements.",
  },
  2 : {
    imgURL: "./static/graphics/Newsweek_clone.png",
    demoURL: "https://raw.githack.com/pbkabali/Newsweek-Clone/Homepage-bootstrap/index.html",
    codeURL: "https://github.com/pbkabali/Newsweek-Clone",
    title: "Newsweek Page Rebuild",
    techs: ["HTML/CSS", "Bootstrap"],
    desc: "A training project involving the rebuilding of the Newsweek homepage using Bootstrap",
  },
  3 : {
    imgURL: "./static/graphics/MA_Cycles.png",
    demoURL: "https://salty-tor-37278.herokuapp.com/",
    codeURL: "https://github.com/pbkabali/MA-Cycles",
    title: "Cycling Social Platform",
    techs: ["Ruby on Rails", "HTML/CSS"],
    desc: "The application is built with the Ruby on Rails framework and its purpose is to provide a discussion board for cycling lovers, business-people, and enthusiasts.",
  },
  4 : {
    imgURL: "./static/graphics/JSON_Linter.png",
    demoURL: "",
    codeURL: "https://github.com/pbkabali/Linter-for-json",
    title: "JSON Linter",
    techs: ["Ruby", "RSpec"],
    desc: "This project is a linter for JSON files. It is able to search for all .json files in the project folder and run the following linters on them: Check for line trailing space, Check for surrounding space for colon, Check that all opening curly braces have closing counterparts, Check that all opening square brackets have closing counterparts"
  },
  5 : {
    imgURL: "./static/graphics/LiveResultsDetail.png",
    demoURL: "",
    codeURL: "https://github.com/pbkabali/FMULiveResults",
    title: "Live Results",
    techs: ["React-Native"],
    desc: "This is a cross-platform mobile application to enable Ugandan rallying competitors, officials, and fans follow the performace of their crews in near real-time as the Audit team tabulates the results during a rallying event. It tries to solve the problem of having to wait for end of day posting of standings for one to know their performance thereby increasing efficiency, transparency and overall enjoyment. This app also works to create timely reporting and scrutinizing of possible penalites for individual crews.",
  }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
ModelFunction = function(project) {
  imageDiv.style.backgroundImage = `url(${projectDetails[project].imgURL})`;
  if(projectDetails[project].demoURL){
    liveDemo.setAttribute("href", projectDetails[project].demoURL);
    liveDemo.style.display = "inline"
  }
  else{
    liveDemo.style.display = "none"
  }
  sourceCode.setAttribute("href", projectDetails[project].codeURL);
  projectTitle.innerHTML = projectDetails[project].title;
  projectDesc.innerHTML = projectDetails[project].desc;
  techLabels = ``
  projectDetails[project].techs.forEach(tech => {
    techLabels +=`
      <span class="built-with">${tech}</span>
    `;   
  });
  technologies.innerHTML = techLabels;
  body.style.overflow = "hidden"
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  body.style.overflow = "scroll";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    body.style.overflow = "scroll";
  }
}