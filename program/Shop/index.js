var kr = 0;
function add(kradd) {
    kr = kr + kradd;
    document.getElementById("kr").innerHTML = kr;
}
function reset() {
    kr = 0;
    document.getElementById("kr").innerHTML = kr;
}