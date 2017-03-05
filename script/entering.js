var body, footer, backIntro, footImg, headerNav, mainNav, siteMap, iconNav, logoImg, plus, up, aside, siteMapImg, backSiteMap;
window.addEventListener('load', function() {
    imgIntro = document.getElementsByClassName('intro');
    footImg = document.getElementsByClassName('footImg');
    body = document.body;
    backIntro = document.getElementById('backIntro');
    headerNav = document.getElementsByTagName('header')[0].getElementsByTagName('nav')[0];
    logoImg = headerNav.getElementsByTagName('section')[0].getElementsByTagName('a')[0].getElementsByTagName('img')[2];
    mainNav = headerNav.getElementsByTagName('section')[0].getElementsByClassName('link');
    iconNav = headerNav.getElementsByTagName('section')[1].getElementsByClassName('bigIcon');
    plus = headerNav.getElementsByTagName('section')[1].getElementsByClassName('plus');
    footer = document.getElementsByTagName('footer');
    siteMap = footer[0].getElementsByTagName('nav')[0].getElementsByTagName('img');
    up = document.getElementById('up');
    aside = document.getElementsByTagName('aside')[0];
    siteMapImg = aside.getElementsByTagName('img');
    backSiteMap = aside.getElementsByClassName('backSiteMap')[0];
    //    document.write(siteMapImg);
    this.setPrepareNodeMethod();
    this.setNodeMethod();
    this.setNodeAppear();
    this.setNodePos();
    this.setRoot();
    if (document.body.scrollTop <= '300') {
        up.style.display = 'none';
    }
}, false);
window.addEventListener('scroll', function() {
    if (document.body.scrollTop <= '300') {
        up.style.display = 'none';
    } else {
        up.style.display = 'block';
    }
}, false);
window.setPrepareNodeMethod = function() {
    for (var i = 0; i < mainNav.length; i++) {
        var imgHov, img;
        switch (i) {
            case 0 :
                imgHov = 'homehover.png';
                img = 'home.png';
                break;
            case 1 :
                imgHov = 'producthover.png';
                img = 'product.png';
                break;
            case 2 :
                imgHov = 'tipsandtrickhover.png';
                img = 'tipsandtrick.png';
                break;
            case 3 :
                imgHov = 'aboutushover.png';
                img = 'aboutus.png';
                break;
            case 4 :
                imgHov = 'testimonyhover.png';
                img = 'testimony.png';
                break;
        }
        addMethodByLoop(mainNav[i], imgHov, img, 'navigasiatas/', 'src');
    }
    for (var i = 0; i < siteMap.length; i++) {
        var imgHov, img;
        switch (i) {
            case 0 :
                imgHov = 'sitemaphover.png';
                img = 'sitemap.png';
                break;
            case 1 :
                imgHov = 'homehover.png';
                img = 'home.png';
                break;
            case 2 :
                imgHov = 'producthover.png';
                img = 'product.png';
                break;
            case 3 :
                imgHov = 'tipsandtrickhover.png';
                img = 'tipsandtrick.png';
                break;
            case 4 :
                imgHov = 'aboutushover.png';
                img = 'aboutus.png';
                break;
            case 5 :
                imgHov = 'testimonyhover.png';
                img = 'testimony.png';
                break;
        }
        addMethodByLoop(siteMap[i], imgHov, img, 'navigasibawah/', 'src');
    }
    for (var i = 0; i < iconNav.length; i++) {
        var img, imgHov;
        switch (i) {
            case 0 :
                img = 'product.png';
                imgHov = 'producthover.png';
                break;
            case 1 :
                img = 'tips.png';
                imgHov = 'tipshover.png';
                break;
            case 2 :
                img = 'aboutus.png';
                imgHov = 'aboutushover.png';
                break;
        }
        addMethodByLoop(iconNav[i], imgHov, img, '', 'src');
    }
    for (var i = 0; i < plus.length; i++) {
        (function(obj) {
            obj.addEventListener('mouseover', function() {
                var det = this.parentNode.getElementsByClassName('det')[0];
                det.style.opacity = '1';
                det.style.visibility = 'visible';
                det.style.zIndex = '3';
            }, false);
            obj.addEventListener('mouseout', function() {
                var det = this.parentNode.getElementsByClassName('det')[0];
                det.style.opacity = '0';
                det.style.visibility = 'hidden';
                det.style.zIndex = '0';
            }, false);
        })(plus[i]);
    }
    for (var i = 2; i < siteMapImg.length; i++) {
        var img, imgHov;
        switch (i) {
            case 2 :
                img = 'home.png';
                imgHov = 'homehover.png';
                break;
            case 3 :
                img = 'product.png';
                imgHov = 'producthover.png';
                break;
            case 4 :
                img = 'tipsandtrick.png';
                imgHov = 'tipsandtrickhover.png';
                break;
            case 5 :
                img = 'aboutus.png';
                imgHov = 'aboutushover.png';
                break;
            case 6 :
                img = 'testimony.png';
                imgHov = 'testimonyhover.png';
                break;
            case 7 :
                img = 'oursite.png';
                imgHov = 'oursitehover.png';
                break;
            case 8 :
                img = 'ourproduct.png';
                imgHov = 'ourproducthover.png';
                break;
            case 9 :
                img = 'howtomakeit.png';
                imgHov = 'howtomakeithover.png';
                break;
            case 10 :
                img = 'brewing.png';
                imgHov = 'brewinghover.png';
                break;
            case 11 :
                img = 'realornot.png';
                imgHov = 'realornothover.png';
                break;
            case 12 :
                img = 'origin.png';
                imgHov = 'originhover.png';
                break;
            case 13 :
                img = 'owner.png';
                imgHov = 'ownerhover.png';
                break;
            case 14 :
                img = 'transaction.png';
                imgHov = 'transactionhover.png';
                break;
        }
        (function(obj, img, imgHov) {
            obj.addEventListener('mouseover', function() {
                this.src = 'style/image/sitemap/' + imgHov;
            }, false);
            obj.addEventListener('mouseout', function() {
                this.src = 'style/image/sitemap/' + img;
            }, false);
            obj.addEventListener('click', function() {
                for (var i = 0; i < siteMapImg.length; i++) {
                    siteMapImg[i].style.visibility = 'hidden';
                }
                aside.style.visibility = 'hidden';
                backSiteMap.style.visibility = 'hidden';
            }, false);
        })(siteMapImg[i], img, imgHov);
    }
}
function addMethodByLoop(obj, objHov, img, url, type) {
    if (type == 'src') {
        obj.addEventListener('mouseover', function() {
            this.src = 'style/image/' + url + objHov;
        }, false);
        obj.addEventListener('mouseout', function() {
            this.src = 'style/image/' + url + img;
        }, false);
    }
    if (type == 'node') {
        obj.addEventListener('mouseover', function() {

        }, false);
    }
}
window.setNodeMethod = function() {
    logoImg.addEventListener('mouseover', function() {
        this.src = 'style/image/dalamhover.png';
    }, false);
    logoImg.addEventListener('mouseout', function() {
        this.src = 'style/image/dalam.png';
    }, false);
    backSiteMap.addEventListener('click', function() {
        aside.style.visibility = 'hidden';
        this.style.visibility = 'hidden';
        for (var i = 0; i < siteMapImg.length; i++) {
            siteMapImg[i].style.visibility = 'hidden';
        }
    }, false);
    siteMap[0].addEventListener('click', function() {
        aside.style.visibility = 'visible';
        backSiteMap.style.visibility = 'visible';
        for (var i = 0; i < siteMapImg.length; i++) {
            siteMapImg[i].style.visibility = 'visible';
        }
    }, false);
}
window.setNodeAppear = function() {

}
window.setNodePos = function() {
}
window.setRoot = function() {

}

