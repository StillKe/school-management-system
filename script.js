function openSidebar() {
  document.getElementById("sidebar").style.left = "0";
  document.getElementsByClassName("main-content")[0].style.marginLeft = "300px";
}

function closeSidebar() {
  document.getElementById("sidebar").style.left = "-300px";
  document.getElementsByClassName("main-content")[0].style.marginLeft = "0";
}

function openModule(moduleName) {
  // Hide all modules
  var modules = document.getElementsByClassName("module");
  for (var i = 0; i < modules.length; i++) {
    modules[i].classList.remove("active");
  }
  
  // Show the selected module
  document.getElementById(moduleName).classList.add("active");
}
