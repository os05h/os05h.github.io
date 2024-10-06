var p = 0;
var plus = 1;
var upgrades = 1;
var uplevel = 1;


function opensetings() {
    document.getElementById('shopside').style.display = 'none';
    document.getElementById('klikeside').style.display = 'none';
    document.getElementById('setingsside').style.display = 'block';
}

function load() {
    alle();
    document.getElementById('shopside').style.display = 'none';
    document.getElementById('klikeside').style.display = 'none';
    document.getElementById('setingsside').style.display = 'none';
}

function alle() {

    document.getElementById("antalklik").innerHTML = "Money: " + rundop(p);


    document.getElementById("prisup1").innerHTML = "Pris: " + rundop(prisupg1());
    document.getElementById("upgrads").innerHTML = "Level:" + upgrades + "-" + uplevel;
}

function rundop(input) {
    if (input >= 10 ** 3 && input < 10 ** 6) {
        var i = Math.round(input / 10) / 100;
        return i + "Thousand";
    } else if (input >= 10 ** 6 && input < 10 ** 9) {
        var i = Math.round(input / 10 ** 4) / 100;
        return i + "Million";
    } else if (input >= 10 ** 9 && input < 10 ** 12) {
        var i = Math.round(input / 10 ** 7) / 100;
        return i + "Milliard";
    } else if (input >= 10 ** 12 && input < 10 ** 15) {
        var i = Math.round(input / 10 ** 10) / 100;
        return i + "Billion";
    } else if (input >= 10 ** 15 && input < 10 ** 18) {
        var i = Math.round(input / 10 ** 13) / 100;
        return i + "Billiard";
    } else if (input >= 10 ** 18 && input < 10 ** 21) {
        var i = Math.round(input / 10 ** 16) / 100;
        return i + "Trillion";
    } else if (input >= 10 ** 21 && input < 10 ** 24) {
        var i = Math.round(input / 10 ** 19) / 100;
        return i + "Trilliard";
    } else if (input >= 10 ** 24 && input < 10 ** 27) {
        var i = Math.round(input / 10 ** 22) / 100;
        return i + "Quadrillion";
    } else if (input >= 10 ** 27 && input < 10 ** 30) {
        var i = Math.round(input / 10 ** 25) / 100;
        return i + "Quadrilliard";
    } else if (input >= 10 ** 30 && input < 10 ** 33) {
        var i = Math.round(input / 10 ** 28) / 100;
        return i + "Quintilion";
    } else if (input >= 10 ** 33 && input < 10 ** 36) {
        var i = Math.round(input / 10 ** 31) / 100;
        return i + "Quintilliard";
    } else if (input >= 10 ** 36 && input < 10 ** 39) {
        var i = Math.round(input / 10 ** 34) / 100;
        return i + "Sextillion";
    } else if (input >= 10 ** 39 && input < 10 ** 42) {
        var i = Math.round(input / 10 ** 37) / 100;
        return i + "Sextilliard";
    } else if (input >= 10 ** 42 && input < 10 ** 45) {
        var i = Math.round(input / 10 ** 40) / 100;
        return i + "Septillion";
    } else if (input >= 10 ** 45 && input < 10 ** 48) {
        var i = Math.round(input / 10 ** 43) / 100;
        return i + "Septilliard";
    } else if (input >= 10 ** 48 && input < 10 ** 51) {
        var i = Math.round(input / 10 ** 46) / 100;
        return i + "Octillion";
    } else {
        return input;
    }

}

function onklik() {
    p = p + plus;
    alle();
}

function setings() {
    document.getElementById("shopside").style.display = "none";
    document.getElementById('klikeside').style.display = 'block';
    document.getElementById('setingsside').style.display = 'none';
}

function openshop() {
    document.getElementById("shopside").style.display = "block";
    document.getElementById('klikeside').style.display = 'none';
    document.getElementById('setingsside').style.display = 'none';
    alle();
}

function startgame() {

    if (localStorage.getItem('saved') == "true") {
        if (localStorage.getItem('p') != null && localStorage.getItem('plus') != null && localStorage.getItem('upgrades') != null && localStorage.getItem('uplevel') != null) {
            p = +localStorage.getItem('p');
            plus = +localStorage.getItem('plus');
            upgrades = +localStorage.getItem('upgrades');
            uplevel = +localStorage.getItem('uplevel');
            alert("Save Loaded")
        } else {
            alert("corrupt  save!")
        }
    }



    document.getElementById("klikeside").style.display = "block";
    document.getElementById('startgame').style.display = 'none';
    document.getElementById('setingsside').style.display = 'none';
    alle();
}

function back() {
    document.getElementById("shopside").style.display = "none";
    document.getElementById('klikeside').style.display = 'block';
    document.getElementById('setingsside').style.display = 'none';
    alle();
}

function prisupg1() {
    if (upgrades == 9) {
        return plus * 10 * upgrades * uplevel * 3;
    } else {
        return plus * 10 * upgrades * uplevel * 1;
    }
}

function upgrade() {
    if (upgrades == 9) {
        if (p >= prisupg1()) {
            p = p - prisupg1();
            plus = plus * 10;
            upgrades = 1;
            uplevel++;
        } else {
            alert("You don't have enough money!!!!!!");
        }
    } else if (p >= prisupg1()) {
        p = p - prisupg1();
        plus = plus * 2;
        upgrades++;
    } else {
        alert("You don't have enough money!!!!!!");
    }
    alle();
}

function reset() {
    if (confirm("Reset?")) {
        p = 0;
        plus = 1;
        upgrades = 1;
        uplevel = 1;
        localStorage.clear();
        back();
    }
}

function save() {
    localStorage.setItem('saved', true);
    localStorage.setItem('p', p);
    localStorage.setItem('plus', plus);
    localStorage.setItem('upgrades', upgrades);
    localStorage.setItem('uplevel', uplevel);
    alert("Saved!");

}