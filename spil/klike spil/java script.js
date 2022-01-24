var p = 0;
var plus = 1;
var upgrades = 1;
var uplevel = 1;


function opensetings(){
    document.getElementById('shopside').style.display='none';
    document.getElementById('klikeside').style.display='none';
    document.getElementById('setingsside').style.display='block'; 
}

function load(){
    alle();
    document.getElementById('shopside').style.display='none';
    document.getElementById('klikeside').style.display='none';
    document.getElementById('setingsside').style.display='none';
}

function alle(){

    document.getElementById("antalklik").innerHTML = "penge: " + rundop(p); 


    document.getElementById("prisup1").innerHTML = "pris: " + rundop(prisupg1()); 
    document.getElementById("upgrads").innerHTML = "level:" + upgrades + "-" + uplevel;
}

function rundop(input){
    if(input>=1000 && input<1000000){
        var i = Math.round(input/10)/100;
        return i + "k"; 
    }else if(input>=1000000 && input <1000000000){
        var i = Math.round(input/10000)/100;
        return i +"M"; 
    }else if(input>=1000000000 && input <1000000000000){
        var i = Math.round(input/10000000)/100;
        return i +"B"; 
    }else if(input>=1000000000000 && input <1000000000000000){
        var i = Math.round(input/10000000000)/100;
        return i +"T"; 
    }else{
        return input;
    }
 
}

function onklik(){
    p = p + plus;
    alle();
}

function setings(){
    document.getElementById("shopside").style.display = "none";
    document.getElementById('klikeside').style.display='block';
    document.getElementById('setingsside').style.display='none';
}

function openshop(){
    document.getElementById("shopside").style.display = "block";
    document.getElementById('klikeside').style.display='none';
    document.getElementById('setingsside').style.display='none';
    alle();
}

function startgame(){
    document.getElementById("klikeside").style.display = "block";
    document.getElementById('startgame').style.display='none';
    document.getElementById('setingsside').style.display='none';
    alle();
}

function back(){
    document.getElementById("shopside").style.display = "none";
    document.getElementById('klikeside').style.display='block';
    document.getElementById('setingsside').style.display='none';
    alle();
}

function prisupg1(){
    if(upgrades == 9){
        return plus*10*upgrades * uplevel * 3;
    }else{
        return plus*10*upgrades * uplevel * 1;
    }
}

function upgrade(){
    if (upgrades == 9 ){ 
        if(p >= prisupg1()){
            p = p - prisupg1();
            plus = plus * 10;
            upgrades = 1;
            uplevel++;
        }else {
            alert("du har ikke nok penge!!!!!!");
        }
    }else if (p >= prisupg1()){
        p = p - prisupg1();
        plus = plus * 2;
        upgrades++;
    }else{
        alert("du har ikke nok penge!!!!!!");
    }
    alle();
}