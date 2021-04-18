require(["esri/views/MapView", "esri/WebMap"], function (
       MapView,
       WebMap
     ) {

       //Assign webmap ID to PortalItem
       var webmap = new WebMap({
         portalItem: {
           // autocasts as new PortalItem()
           id: "7259945a25254c7b91d207132434556d" //ID sliced from Webmap URL
         }
       });

       // Set the WebMap instance to the map property in a MapView.
       var view = new MapView({
         map: webmap,
         container: "mapContainer"
       });
     });

let toggle = true;
let expanded = false;
let panel = document.getElementById("leftSidebar");
let arrow = document.getElementById("minimizeArrow");
let arrowDiv = document.getElementById("minimizeTab");
let map = document.getElementById("mapContainer");
let iframe = document.getElementById("mapFrame");
let panelFrame = document.getElementById("panelFrame");
let mapTab = document.getElementById("mapTab");
let legendTab = document.getElementById("legendTab");

arrowDiv.addEventListener("click", toggleMenu);
let maxTopMargin = screen.availHeight * 0.8;
let currAngle = 0;
  window.onload = function () {
    panel.addEventListener('touchmove', function (e) {
      //grab location of touch
      var touchLocation = e.targetTouches[0];

      //assign panel new coordinates based on the touch
      //but not if its beyond the height of the screen or 80vw
      let newY = touchLocation.pageY;
      if (newY > maxTopMargin || newY < 0) {
        if (newY <= 0) {
          currAngle = 180;
          document.getElementById("dragTab").style.transform = "rotate(180deg)";
        }
      } else {
        if (currAngle > 0) {
          document.getElementById("dragTab").style.transform = "rotate(0deg)";
          currAngle = 0;
        }
        panel.style.top = newY + 'px';
      }
    });

    panel.addEventListener('touchend', function (e) {
      //current panel position
      var y = parseInt(panel.style.top);
    })
  }

window.addEventListener("message", function (message) {
  const msg = message.data;
  const urlArr = msg.split("/");
  console.log(msg);
  if (urlArr[urlArr.length - 1] === "trailDetail.html") {
    mapTab.style.visibility = "visible";
    legendTab.style.visibility = "visible";
    mapTab.style.left = "23.4vw";
    legendTab.style.left = "23.4vw";
    console.log("SHOW TABS");
  } else {
    console.log("HIDE TABS");
    legendTab.style.left = "20vw";
    legendTab.style.visibility = "hidden";
    setTimeout(function() {
      mapTab.style.left = "20vw";
      mapTab.style.visibility = "hidden";
    }, 100);
  }
});

//Animation for map and legend tabs should also toggle visibility

function toggleMenu() {
  if (toggle) { //Close panel
    panel.style.width = "0px";
    arrowDiv.style.left = "-24px";
    arrow.style.transform = "rotate(0deg)";
    map.style.width = "100vw";
    map.style.marginLeft = "0";
    mapTab.style.left = "-24px";
    legendTab.style.left = "-24px";
  } else { //Open panel
    panel.style.width = "25vw";
    arrowDiv.style.left = "23.2vw";
    arrow.style.transform = "rotate(180deg)";
    map.style.marginLeft = "25vw";
    map.style.width = "75vw";
    mapTab.style.left = "23.4vw";
    legendTab.style.left = "23.4vw";
  }
  toggle = !toggle;
}
