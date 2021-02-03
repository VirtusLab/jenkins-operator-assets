document.addEventListener("DOMContentLoaded", function(event) { 
    let logoDiv = document.querySelector(".logo");
    removeJenkinsLogo(logoDiv);
    logoDiv.appendChild(createOSJLogo());
});

function removeJenkinsLogo(logoDiv){
    logoDiv.removeChild(logoDiv.querySelector("#jenkins-home-link"));
}

function createOSJLogo(){
    let osjLogoImg = document.createElement("IMG");
    osjLogoImg.setAttribute('src', 'https://rawcdn.githack.com/VirtusLab/jenkins-operator-assets/ac9bf802864a49dd60b5159b755e6f88fb61e1f4/img/osj-logo.png');
    osjLogoImg.setAttribute('alt', 'Operator Service for Jenkins Icon');
    osjLogoImg.setAttribute('height', '60px');
    osjLogoImg.setAttribute('width', 'auto');

    let osjLogoLink = document.createElement("a");
    osjLogoLink.appendChild(osjLogoImg);
    osjLogoLink.setAttribute('href', '/');

    return osjLogoLink;
}