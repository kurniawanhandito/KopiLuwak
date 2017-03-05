<?php
$dLayoutPatt = 'view/layout/';
$dPagePatt = 'view/page/';
$dContentPatt = 'view/page/content/';
require_once ('lib/helper.php');
//manifest="script/manifest.appcache"
?>
<!DOCTYPE html>
<html lang="en-US" xmlns="http://www.w3.org/1999/xhtml"  >
    <head>
        <meta charset="UTF-8"/> 
        <title>Loewak d'Coffee</title>
        <meta name="keywords" content="kopi luwak, kopi luwak loewak d' coffee"/>
        <meta name="description" content=""/>
        <?php if (count($_GET) > 0 && Helper::notNull($_GET)) { ?>
            <script src="script/entering.js"></script>
            <script src="script/jquery.js"></script>
            <script src="http://maps.googleapis.com/maps/api/js?key=AIzaSyD_ATCaYu5eaexbNtYHrsXecBAGV2lGFnk&sensor=true"></script>
        <?php } else { ?>
            <script src="script/intro.js"></script>
        <?php }
        ?>
        <link rel="stylesheet" href="style/style.css"/>
    </head>
    <body>
        <?php if (count($_GET) > 0 && Helper::notNull($_GET)) { ?>
            <aside class="siteMap">
                <div class="backSiteMap"></div>
                <img id="kerangka" src="style/image/sitemap/kerangkasitemap.png" alt="sitemap"/>
                <img id="logo" src="style/image/sitemap/loewak.png" alt="sitemap"/>
                <a href="?dPage=home"><img id="home" src="style/image/sitemap/home.png" alt="sitemap"/></a>
                <a href="?dPage=product"><img id="product" src="style/image/sitemap/product.png" alt="sitemap"/></a>
                <a href="?dPage=tips"><img id="tips" src="style/image/sitemap/tipsandtrick.png" alt="sitemap"/></a>
                <a href="?dPage=about"><img id="about" src="style/image/sitemap/aboutus.png" alt="sitemap"/></a>
                <a href="?dPage=testimony"><img id="test" src="style/image/sitemap/testimony.png" alt="sitemap"/></a>
                <a href="?dPage=home#ourSite"><img id="ourSite" src="style/image/sitemap/oursite.png" alt="sitemap"/></a>
                <a href="?dPage=product#ourProduct"><img id="ourPro" src="style/image/sitemap/ourproduct.png" alt="sitemap"/></a>
                <a href="?dPage=product#how"><img id="how" src="style/image/sitemap/howtomakeit.png" alt="sitemap"/></a>
                <a href="?dPage=tips#brew"><img id="brew" src="style/image/sitemap/brewing.png" alt="sitemap"/></a>
                <a href="?dPage=tips#real"><img id="real" src="style/image/sitemap/realornot.png" alt="sitemap"/></a>
                <a href="?dPage=about#ori"><img id="ori" src="style/image/sitemap/origin.png" alt="sitemap"/></a>
                <a href="?dPage=about#trans"><img id="own" src="style/image/sitemap/owner.png" alt="sitemap"/></a>
                <a href="?dPage=about#own"><img id="trans" src="style/image/sitemap/transaction.png" alt="sitemap"/></a>
            </aside>
            <header>
                <?php
                require_once ("{$dLayoutPatt}header.php");
                require_once ("{$dLayoutPatt}navigation.php");
                ?>
            </header>
            <article>
                <?php
                require_once("{$dPagePatt}{$_GET['dPage']}.php");
                if (Helper::notNullIndex($_GET, 'dContent')) {
                    require_once ("{$dContentPatt}{$_GET['dContent']}.php");
                }
                ?>
            </article>
            <footer>
                <?php require_once ("{$dLayoutPatt}footer.php"); ?>
            </footer>
            <?php
        } else {
            ?>
            <section id="intro">
                <?php require_once("{$dPagePatt}intro.php"); ?>
            </section>
        <?php }
        ?>
        <script>
            // Define the variables
            var pos;
            $(function() {
                // Get the click event
                $("#up").on("click", function() {
                    // Get the scroll pos
                    pos = $(window).scrollTop();
                    // Set the body top margin
                    $("body").css({
                        "margin-top": -pos + "px",
                        "overflow-y": "scroll" // This property is posed for fix the blink of the window width change 
                    });
                    // Make the scroll handle on the position 0
                    $(window).scrollTop(0);
                    // Add the transition property to the body element
                    $("body").css("transition", "all 1.5s cubic-bezier(0.600, 0.040, 0.980, 0.335)");
                    // Apply the scroll effects
                    $("body").css("margin-top", "0");
                    // Wait until the transition end
                    $("body").on("webkitTransitionEnd transitionend msTransitionEnd oTransitionEnd", function() {
                        // Remove the transition property
                        $("body").css("transition", "none");
                    });
                });
            });
            //map api
            var myCenter = new google.maps.LatLng(-8.1380, 112.7621);
            function initialize()
            {
                var mapProp = {
                    center: myCenter,
                    zoom: 5,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };
                var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

                var marker = new google.maps.Marker({
                    position: myCenter,
                    animation: google.maps.Animation.BOUNCE
                });

                marker.setMap(map);
            }

            google.maps.event.addDomListener(window, 'load', initialize);
        </script>
    </body>
</html>
