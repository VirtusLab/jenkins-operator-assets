document.addEventListener("DOMContentLoaded", function(event) { 
    let logoDiv = document.querySelector(".logo");
    removeJenkinsLogo(logoDiv);
    logoDiv.appendChild(createJKOLogo());
    logoDiv.appendChild(createVlLogo());
});

function removeJenkinsLogo(logoDiv){
    logoDiv.removeChild(logoDiv.querySelector("#jenkins-home-link"));
}

function createJKOLogo(){
    let jkoLogoImg = document.createElement("IMG"); 
    jkoLogoImg.setAttribute('src', 'https://raw.githubusercontent.com/jenkinsci/kubernetes-operator/master/assets/jenkins-operator-icon.png');
    jkoLogoImg.setAttribute('alt', 'Jenkins Kubernetes Operator Icon');
    jkoLogoImg.setAttribute('height', '60px');
    jkoLogoImg.setAttribute('width', 'auto');

    let jkoLogoLink = document.createElement("a");
    jkoLogoLink.appendChild(jkoLogoImg);
    jkoLogoLink.setAttribute('href', '/');

    return jkoLogoLink;
}

function createVlLogo(){
    let vlLogoImg = document.createElement("IMG");
    vlLogoImg.setAttribute('src', 'https://raw.githubusercontent.com/SylwiaBrant/theme/master/img/vl_logo_wide_bw_contrast.png');
    vlLogoImg.setAttribute('alt', 'Virtus Lab logo');
    vlLogoImg.setAttribute('height', '60px');
    vlLogoImg.setAttribute('width', 'auto');

    let vlLogoLink = document.createElement("a");
    vlLogoLink.appendChild(vlLogoImg);
    vlLogoLink.setAttribute('href', '/');
    
    return vlLogoLink;
}