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
    osjLogoImg.setAttribute('src', 'https://rawcdn.githack.com/VirtusLab/jenkins-operator-assets/dd3acbf1ecdc0cffc9102b1b537c17ef98a12d90/img/osj-logo.png');
    osjLogoImg.setAttribute('alt', 'Operator Service for Jenkins Icon');
    osjLogoImg.setAttribute('height', '60px');
    osjLogoImg.setAttribute('width', 'auto');

    let osjLogoLink = document.createElement("a");
    osjLogoLink.appendChild(osjLogoImg);
    osjLogoLink.setAttribute('href', '/');

    return osjLogoLink;
}