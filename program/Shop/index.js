var kr = 0;
const cart = [];

function add(kradd, item) {
    kr = kr + kradd;
    var items = cart.length;
    cart[items] = " " + item;
    document.getElementById("demo").innerHTML = cart;
    document.getElementById("kr").innerHTML = kr;
}
function reset() {
    kr = 0;
    cart.length = 0
    document.getElementById("kr").innerHTML = kr;
    document.getElementById("demo").innerHTML = cart;
}