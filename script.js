let projects = [
  "Project 1: Smart IoT Monitoring System",
  "Project 2: AI-Powered Threat Detection using Python",
  "Project 3: Cloud-based Network Infrastructure Design",
  "Project 4: Cybersecurity Vulnerability Scanner",
  "Project 5: Data Analytics Dashboard using Python"
];

let currentProject = 0;

function showProject() {
  document.getElementById("project-display").innerText = projects[currentProject];
}

function nextProject() {
  currentProject = (currentProject + 1) % projects.length;
  showProject();
}

function prevProject() {
  currentProject = (currentProject - 1 + projects.length) % projects.length;
  showProject();
}

showProject();
