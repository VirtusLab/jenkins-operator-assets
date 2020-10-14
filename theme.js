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
    josLogoImg.setAttribute('src', 'https://rawcdn.githack.com/VirtusLab/jenkins-operator-assets/ac9bf802864a49dd60b5159b755e6f88fb61e1f4/img/jos-logo.png');
    josLogoImg.setAttribute('alt', 'Jenkins Operator Service Icon');
    josLogoImg.setAttribute('height', '60px');
    josLogoImg.setAttribute('width', 'auto');

    let josLogoLink = document.createElement("a");
    josLogoLink.appendChild(josLogoImg);
    josLogoLink.setAttribute('href', '/');

    return josLogoLink;
}