window.onload = function(){
    document.getElementById("row1").onmouseover = function() {showImage("keller")};
    document.getElementById("row1").onmouseout = function() {hideImage("keller")};
    document.getElementById("row2").onmouseover = function() {showImage("Shepherd")};
    document.getElementById("row2").onmouseout = function() {hideImage("Shepherd")};
    document.getElementById("row3").onmouseover = function() {showImage("morrill")};
    document.getElementById("row3").onmouseout = function() {hideImage("morrill")};
    document.getElementById("row4").onmouseover = function() {showImage("coffman")};
    document.getElementById("row4").onmouseout = function() {hideImage("coffman")};
    document.getElementById("row5").onmouseover = function() {showImage("walter")};
    document.getElementById("row5").onmouseout = function() {hideImage("walter")};

    function showImage(id) {
        document.getElementById(id).setAttribute("style", "visibility: visible");
        document.getElementById("bigImage").src = "resources/" + id + ".jpg";
    }
    function hideImage(id) {
        document.getElementById(id).setAttribute("style", "visibility: hidden");
        document.getElementById("bigImage").src = "resources/track.jpg";
    }
};
