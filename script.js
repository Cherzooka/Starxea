  function selectTab(tabIndex) {
   // Hide all Tabs
      document.querySelectorAll(".tab").forEach(i => i.style.display = "none");

   // Show the Selected Tab
   document.getElementById("tab"+ tabIndex + "Content").style.display = "block";

   // Apply Selected to link
   document.querySelectorAll(".link").forEach(i => i.classList.remove("selected"));
   document.getElementById("tab"+ tabIndex).classList.add("selected");
  }

  function sendXHR(type, url, data, callback) {
   // Declare XHR for loading Journal Pages
   var newXHR = new XMLHttpRequest() || new window.ActiveXObject("Microsoft.XMLHTTP");
   newXHR.open(type, url, true);
   newXHR.send(data);
   newXHR.onreadystatechange = function() {
    if (this.status === 200 && this.readyState === 4) {
     callback(this.response);
    }
   };
  }

  function defaultOpen() {
    // Load Intro
    sendXHR("GET", "Pages/intro.html", null, function(response) {
      document.getElementById("intro").innerHTML = response;
    });

    // Load Tab Links
    sendXHR("GET", "Pages/tabs.html", null, function(response) {
      document.getElementById("links").innerHTML = response;
    });

   // Load Inventory
   sendXHR("GET", "Pages/inventory.html", null, function(response) {
    document.getElementById("inventory").innerHTML = response;
   });

    // Load Party
    sendXHR("GET", "Pages/party.html", null, function(response) {
      document.getElementById("character-wrap").innerHTML = response;
   });

    // Load Journal Pages
    sendXHR("GET", "Journal/1.html", null, function(response) {
      document.getElementById("entryOne").innerHTML = response;
   });

    // Show first tab on page load
    document.getElementById("tab1Content").style.display = "block";
    setTimeout(function(){
      document.getElementById("tab1").classList.add("selected");
    }, 200);
               }
