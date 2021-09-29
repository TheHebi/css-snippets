const changeTab = function (event) {
    document.getElementById("cssTab").classList.remove("active");
    document.getElementById("bsTab").classList.remove("active");
    document.getElementById("jsTab").classList.remove("active");
    document.getElementById("algTab").classList.remove("active");
  
    event.target.classList.add("active");
  
    document.getElementById("css").classList.add("hidden");
    document.getElementById("bootstrap").classList.add("hidden");
    document.getElementById("javascript").classList.add("hidden");
    document.getElementById("algs").classList.add("hidden");
    let name = event.target.id;
  
    if (name === "cssTab") {
      document.getElementById("css").classList.remove("hidden");
    } else if (name === "bsTab") {
      document.getElementById("bootstrap").classList.remove("hidden");
    } else if (name === "jsTab") {
      document.getElementById("javascript").classList.remove("hidden");
    }else if (name === "algTab") {
      document.getElementById("algs").classList.remove("hidden");
    }
  };
  
  // Adds event listeners to each tab button
  document.querySelector("#cssTab").addEventListener("click", changeTab);
  document.querySelector("#bsTab").addEventListener("click", changeTab);
  document.querySelector("#jsTab").addEventListener("click", changeTab);
  document.querySelector("#algTab").addEventListener("click", changeTab);