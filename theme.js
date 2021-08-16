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
    osjLogoImg.setAttribute('src', 'https://rawcdn.githack.com/VirtusLab/jenkins-operator-assets/6a70f34fe1b9d1eaa0da307256d350e10c62d69c/img/osj-logo.png');
    osjLogoImg.setAttribute('alt', 'Operator Service for Jenkins Icon');
    osjLogoImg.setAttribute('height', '54px');
    osjLogoImg.setAttribute('width', 'auto');

    let osjLogoLink = document.createElement("a");
    osjLogoLink.appendChild(osjLogoImg);
    osjLogoLink.setAttribute('href', '/');

    return osjLogoLink;
}