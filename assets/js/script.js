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

const copyText = async function(event){
  try{
    const text = event.target.parentElement.children[2].children[0].textContent
    await navigator.clipboard.writeText(text)
    alert("Snippet Copied To Clipboard")
  }catch(err){
    alert("Error Occured", err)
  }
}



const addClick = function(){
  const copyBtn = document.querySelectorAll('.copy-text')
  for (let i = 0; i < copyBtn.length; i++) {
    copyBtn[i].addEventListener('click', copyText)
    
  }
}

addClick()

const scrollToTop = function() {
  let rootElement = document.documentElement
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

document.querySelector("#scrollBtn").addEventListener("click", scrollToTop)

  // Adds event listeners to each tab button
  document.querySelector("#cssTab").addEventListener("click", changeTab);
  document.querySelector("#bsTab").addEventListener("click", changeTab);
  document.querySelector("#jsTab").addEventListener("click", changeTab);
  document.querySelector("#algTab").addEventListener("click", changeTab);

