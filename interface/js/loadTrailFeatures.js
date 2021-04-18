//For trailFeatureList.html
//Load selected trail feature

//Change header

    let featureImg = document.getElementById("featureImg");
    let featureTitle = document.getElementById("featureTitle");
    let featuresDiv = document.getElementById("featureDiv");
    let trailInfo = JSON.parse(localStorage.getItem("trail"));
    let selectedFeature = localStorage.getItem("feature");
    let featureArr = [];
    
    switch(selectedFeature) {
        case 'landmark':
            featureArr = trailInfo.landmarks;
            featureImg.src = "../images/iconmonstr-tree-19%201.png"
            featureTitle.innerText = "Landmarks";
            break;
        case 'plantlife':
            featureArr = trailInfo.foliage;
            featureImg.src = "../images/iconmonstr-tree-7%201.png"
            featureTitle.innerText = "Plant Life";
            break;
        case 'wildlife':
            featureArr = trailInfo.wildlife;
            featureImg.src = "../images/iconmonstr-cat-7%201.png";
            featureTitle.innerText = "Wildlife";
            break;
    }

    if (featureArr.length == 0) {
        featuresDiv.innerText = "This trail does not have any of this feature.";
        
    }

    for (let i = 0; i < featureArr.length; i++) {
        let feature = featureArr[i];
        let featureDiv = document.createElement("div");
        let featureLink = document.createElement("a");
        featureLink.innerText = feature.name;
        featureLink.href = "./trailFeatureDetail.html";
        featureLink.className = "link";
        featureLink.id = String(i);
        featureLink.addEventListener("click", function(event) {
            localStorage.setItem("selectedFeature", JSON.stringify(featureArr[Number(event.target.id)]));
        });
        featureLink.style.marginLeft = "16px";
        featureDiv.className = "featureLinkDiv";
        featureDiv.appendChild(featureLink);
        featuresDiv.appendChild(featureDiv);
    }