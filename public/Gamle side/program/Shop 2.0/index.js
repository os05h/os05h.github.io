var kr = 0;
const cart = [];
const smartcart = [0, 0];
const ids = ["nr1", "nr2"];
const pris = [5, 5];

function add(kradd, item, itemnr) {
    kr = kr + pris[itemnr - 1];
    var items = cart.length;
    cart[items] = " " + item;
    smartcart[itemnr - 1]++;
    //    document.getElementById("cart").innerHTML = cart;
    document.getElementById("kr").innerHTML = kr;
    for (let i = 0; i < 2; i++) {
        document.getElementById(ids[i]).innerHTML = smartcart[i];
    }
}
function reset() {
    kr = 0;
    cart.length = 0

    document.getElementById("kr").innerHTML = kr;
    //    document.getElementById("cart").innerHTML = cart;
    for (let i = 0; i < 2; i++) {
        smartcart[i] = 0;
        document.getElementById(ids[i]).innerHTML = smartcart[i];
    }
}