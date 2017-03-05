var imgIntro, body, footer, backIntro;
window.addEventListener('load', function() {
    imgIntro = document.getElementsByClassName('intro');
    body = document.body;
    footer = document.getElementsByTagName('footer');
    backIntro = document.getElementById('backIntro');
    this.setNodeMethodInt();
    this.setNodePosInt();
    this.setRootInt();
}, false);
window.setNodeMethodInt = function() {
    imgIntro[1].addEventListener('mouseover', function() {
        this.src = 'style/image/introhover.png';
    }, false);
    imgIntro[1].addEventListener('mouseout', function() {
        this.src = 'style/image/intro.png';
    }, false);
    imgIntro[2].addEventListener('mouseover', function() {
        this.src = 'style/image/entersitehover.png';
    }, false);
    imgIntro[2].addEventListener('mouseout', function() {
        this.src = 'style/image/entersite.png';
    }, false);
}
window.setNodePosInt = function() {
    imgIntro[3].style.top = (backIntro.offsetHeight - 252) + 'px';
    imgIntro[3].style.left = (backIntro.offsetWidth - 293) + 'px';
}
window.setRootInt = function() {
    body.style.overflow = 'hidden';
}