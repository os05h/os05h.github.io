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
    if (input >= 1000 && input < 1000000) {
        var i = Math.round(input / 10) / 100;
        return i + "k";
    } else if (input >= 1000000 && input < 1000000000) {
        var i = Math.round(input / 10000) / 100;
        return i + "M";
    } else if (input >= 1000000000 && input < 1000000000000) {
        var i = Math.round(input / 10000000) / 100;
        return i + "B";
    } else if (input >= 1000000000000 && input < 1000000000000000) {
        var i = Math.round(input / 10000000000) / 100;
        return i + "T";
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
            p = localStorage.getItem('p');
            plus = localStorage.getItem('plus');
            upgrades = localStorage.getItem('upgrades');
            uplevel = localStorage.getItem('uplevel');
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