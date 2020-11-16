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
    imgURL: "https://pbs.twimg.com/media/EKPv5gPWwAsa_L3.jpg",
    demoURL: "",
    codeURL: "https://github.com/pbkabali/portfolio/tree/development",
    title: "Project 1",
    techs: ["Ruby on Rails", "HTML/CSS"],
    desc: "Hello I am a software developer! I can help you build a product featre or website. Look through some of my work and",
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