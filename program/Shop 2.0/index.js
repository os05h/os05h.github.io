var kr = 0;
const cart = [];
const item = ["POLO", "SODAVAND"]
const pris = [5, 5]

function add(kradd, item) {
    kr = kr + kradd;
    var items = cart.length;
    cart[items] = " " + item;
    document.getElementById("cart").innerHTML = cart;
    document.getElementById("kr").innerHTML = kr;
}
function reset() {
    kr = 0;
    cart.length = 0
    document.getElementById("kr").innerHTML = kr;
    document.getElementById("cart").innerHTML = cart;
    var nrr = "nr" + "1";
    document.getElementById(nrr).innerHTML = item[i];
    load();
}
function load() {

    for (let i = 0; i < 2; i++) {
        document.getElementById("nr" + i).innerHTML = item[i];

    }
}
