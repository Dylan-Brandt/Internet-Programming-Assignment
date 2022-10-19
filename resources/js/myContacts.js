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
        document.getElementById("bigImage").src = "resources/images/" + id + ".jpg";
    }
    function hideImage(id) {
        document.getElementById(id).setAttribute("style", "visibility: hidden");
        document.getElementById("bigImage").src = "resources/images/track.jpg";
    }
};

function sortTable(sortBy) {
    let table = document.getElementById("contactsTable");
    let rows = table.rows;
    let rowsToSort = [].slice.call(rows); // https://stackoverflow.com/questions/222841/most-efficient-way-to-convert-an-htmlcollection-to-an-array
    let header = rowsToSort[0]; // save top row
    rowsToSort.shift();
    // sort based on which column was clicked
    if(sortBy == "name") {
        rowsToSort.sort((a, b) => a.cells[0].innerHTML.localeCompare(b.cells[0].innerHTML)); // https://stackoverflow.com/questions/6712034/sort-array-by-firstname-alphabetically-in-javascript
    }
    if(sortBy == "location") {
        rowsToSort.sort((a, b) => a.cells[1].innerHTML.localeCompare(b.cells[1].innerHTML));
    }
    if(sortBy == "contactInfo") {
        rowsToSort.sort((a, b) => a.cells[2].innerHTML.localeCompare(b.cells[2].innerHTML));
    }
    if(sortBy == "email") {
        rowsToSort.sort((a, b) => a.cells[3].innerHTML.localeCompare(b.cells[3].innerHTML));
    }
    if(sortBy == "website") {
        rowsToSort.sort((a, b) => a.cells[4].innerHTML.localeCompare(b.cells[4].innerHTML));
    }
    // fix background colors
    for(let i = 0; i < rowsToSort.length; i++) {
        if(i % 2 == 0) {
            rowsToSort[i].style.backgroundColor = "lightgray";
        }
        else {
            rowsToSort[i].style.backgroundColor = "darkgray";
        }
    }
    // rebuild table
    table.innerHTML = "";
        table.appendChild(header);
        for(let i = 0; i < rowsToSort.length; i++) {
            table.appendChild(rowsToSort[i]);
        }
}