/* landmarks: [{
    name: "Coal Mine Shaft",
      image: "https://i2.wp.com/www.gwlt.org/wp-content/uploads/2020/07/DSC_0113-1-scaled.jpg?resize=1024%2C683&ssl=1",
      description: ""
    }, {
    name: "Old Stone Quarry",
      image: "https://i2.wp.com/www.gwlt.org/wp-content/uploads/2020/07/dsc-5.jpg?resize=1024%2C683&ssl=1",
      description: ""
    }, {
    name: "Lake Quinsigamond",
      image: "https://i2.wp.com/www.gwlt.org/wp-content/uploads/2020/07/eastsidetrail4-scaled.jpg?resize=1024%2C768&ssl=1",
      description: ""
    }] */
let feature = JSON.parse(localStorage.getItem("selectedFeature"));
let headerDiv = document.getElementsByClassName("titleImgDiv")[0];

headerDiv.style.backgroundImage = `url(${feature.image})`;
document.getElementById("trailFeatureName").innerText = feature.name;
document.getElementById("trailFeatureInfo").innerText = feature.description;

