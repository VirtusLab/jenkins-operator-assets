document.addEventListener("DOMContentLoaded", function(event) { 
    let logoDiv = document.querySelector(".logo");
    removeJenkinsLogo(logoDiv);
    logoDiv.appendChild(createJOSLogo());
});

function removeJenkinsLogo(logoDiv){
    logoDiv.removeChild(logoDiv.querySelector("#jenkins-home-link"));
}

function createJOSLogo(){
    let josLogoImg = document.createElement("IMG");
    josLogoImg.setAttribute('src', 'https://raw.githubusercontent.com/jenkinsci/kubernetes-operator/master/assets/jos-logo.png');
    josLogoImg.setAttribute('alt', 'Jenkins Kubernetes Operator Icon');
    josLogoImg.setAttribute('height', '60px');
    josLogoImg.setAttribute('width', 'auto');

    let josLogoLink = document.createElement("a");
    josLogoLink.appendChild(josLogoImg);
    josLogoLink.setAttribute('href', '/');

    return josLogoLink;
}