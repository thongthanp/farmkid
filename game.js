var Math1 = ["5","10","15","20"];
var Math2 = ["3","6","9","12"];
var Math3 = ["7","14","21","28"];
var Math4 = ["9","11","13","15"];
var Math5 = ["10","20","30","40"];
var Math6 = ["36","48","60","72"];
var Math7 = ["16","20","24","28"];
var Math8 = ["19","24","29","34"];
var Math9 = ["30","60","90","120"];
var Math10 = ["100","200","300","400"];
var Math11 = ["650","700","750","800"];
var Math12 = ["100","125","150","175"];
var Math13 = ["630","660","690","720"];
var Math14 = ["29","58","87","116"];
var Math15 = ["518","552","586","620"];
var Math16 = ["198","297","396","495"];
var Math17 = ["348","435","522","609"];


var ch,num, count=0, score=0


document.getElementById("q1").style.font = "italic bold 60px cursive, sans-serif";
document.getElementById("q2").style.font = "italic bold 60px cursive, sans-serif";
document.getElementById("q3").style.font = "italic bold 60px cursive, sans-serif";
document.getElementById("q4").style.font = "italic bold 60px cursive, sans-serif";

document.getElementById("a1").style.font = "italic bold 60px cursive, sans-serif";
document.getElementById("a2").style.font = "italic bold 60px cursive, sans-serif";
document.getElementById("a3").style.font = "italic bold 60px cursive, sans-serif";
document.getElementById("a4").style.font = "italic bold 60px cursive, sans-serif";

var bg = new Audio("./resouce/audio/Flower Garden - Yoshi's Island.mp3");
var audio1 = new Audio('./resouce/sfx/click.mp3');
var audio2 = new Audio('./resouce/sfx/over.mp3');


function ms(){
    audio1.play()
}

function up(){

if(count==0){
document.getElementById('q1').innerHTML = Math1[0]
document.getElementById('q2').innerHTML = Math1[1]
document.getElementById('q3').innerHTML = Math1[2]
document.getElementById('q4').innerHTML = ""

document.getElementById('a1').innerHTML = 7
document.getElementById('a2').innerHTML = 8
document.getElementById('a3').innerHTML = 10
document.getElementById('a4').innerHTML = 20//

count=1
}

if(count==1){
    if(num==4){
        displayResult()
    document.getElementById('q1').innerHTML = ""
    document.getElementById('q2').innerHTML = Math2[1]
    document.getElementById('q3').innerHTML = Math2[2]
    document.getElementById('q4').innerHTML = Math2[3]

    document.getElementById('a1').innerHTML = 3//
    document.getElementById('a2').innerHTML = 8
    document.getElementById('a3').innerHTML = 18
    document.getElementById('a4').innerHTML = 15
    count=2
    }else{

    }
    
}
if(count==2){
    if(num==1){
        displayResult()
    document.getElementById('q1').innerHTML = Math3[0]
    document.getElementById('q2').innerHTML = ""
    document.getElementById('q3').innerHTML = Math3[2]
    document.getElementById('q4').innerHTML = Math3[3]

    document.getElementById('a1').innerHTML = 9
    document.getElementById('a2').innerHTML = 8
    document.getElementById('a3').innerHTML = 18
    document.getElementById('a4').innerHTML = 14//

    count=3
}
}

if(count==3){
    if(num==4){
        displayResult()
    document.getElementById('q1').innerHTML = Math4[0]
    document.getElementById('q2').innerHTML = Math4[1]
    document.getElementById('q3').innerHTML = ""
    document.getElementById('q4').innerHTML = Math4[3]

    document.getElementById('a1').innerHTML = 5
    document.getElementById('a2').innerHTML = 25
    document.getElementById('a3').innerHTML = 13//
    document.getElementById('a4').innerHTML = 12

    count=4

}
}

if(count==4){
    if(num==3){
        displayResult()
    document.getElementById('q1').innerHTML = Math5[0]
    document.getElementById('q2').innerHTML = ""
    document.getElementById('q3').innerHTML = Math5[2]
    document.getElementById('q4').innerHTML = Math5[3]

    document.getElementById('a1').innerHTML = 30
    document.getElementById('a2').innerHTML = 80
    document.getElementById('a3').innerHTML = 90
    document.getElementById('a4').innerHTML = 20//

    count=5

}
}

if(count==5){
    if(num==4){
        displayResult()
    document.getElementById('q1').innerHTML = Math6[0]
    document.getElementById('q2').innerHTML = Math6[1]
    document.getElementById('q3').innerHTML = ""
    document.getElementById('q4').innerHTML = Math6[3]

    document.getElementById('a1').innerHTML = 120
    document.getElementById('a2').innerHTML = 60//
    document.getElementById('a3').innerHTML = 90
    document.getElementById('a4').innerHTML = 80

    count=6
}
}


if(count==6){
    if(num==2){
        displayResult()
    document.getElementById('q1').innerHTML = ""
    document.getElementById('q2').innerHTML = Math7[1]
    document.getElementById('q3').innerHTML = Math7[2]
    document.getElementById('q4').innerHTML = Math7[3]

    document.getElementById('a1').innerHTML = 16//
    document.getElementById('a2').innerHTML = 12
    document.getElementById('a3').innerHTML = 19
    document.getElementById('a4').innerHTML = 20

    count=7
}
}

if(count==7){
    if(num==1){
        displayResult()
    document.getElementById('q1').innerHTML = Math8[0]
    document.getElementById('q2').innerHTML = Math8[1]
    document.getElementById('q3').innerHTML = Math8[2]
    document.getElementById('q4').innerHTML = ""

    document.getElementById('a1').innerHTML = 34//
    document.getElementById('a2').innerHTML = 25
    document.getElementById('a3').innerHTML = 17
    document.getElementById('a4').innerHTML = 35

    count=8
}
}

if(count==8){
    if(num==1){
        displayResult()
    document.getElementById('q1').innerHTML = Math9[0]
    document.getElementById('q2').innerHTML = Math9[1]
    document.getElementById('q3').innerHTML = Math9[2]
    document.getElementById('q4').innerHTML = ""

    document.getElementById('a1').innerHTML = 12
    document.getElementById('a2').innerHTML = 120//
    document.getElementById('a3').innerHTML = 90
    document.getElementById('a4').innerHTML = 48

    count=9
}
}

if(count==9){
    if(num==2){
        displayResult()
    document.getElementById('q1').innerHTML = Math10[0]
    document.getElementById('q2').innerHTML = Math10[1]
    document.getElementById('q3').innerHTML = ""
    document.getElementById('q4').innerHTML = Math10[3]

    document.getElementById('a1').innerHTML = 150
    document.getElementById('a2').innerHTML = 500
    document.getElementById('a3').innerHTML = 300//
    document.getElementById('a4').innerHTML = 250

    count=10
}
}

if(count==10){
    if(num==3){
        displayResult()
    document.getElementById('q1').innerHTML = Math11[0]
    document.getElementById('q2').innerHTML = ""
    document.getElementById('q3').innerHTML = Math11[2]
    document.getElementById('q4').innerHTML = Math11[3]

    document.getElementById('a1').innerHTML = 700//
    document.getElementById('a2').innerHTML = 200
    document.getElementById('a3').innerHTML = 900
    document.getElementById('a4').innerHTML = 550

    count=11
}
}

if(count==11){
    if(num==1){
        displayResult()
    document.getElementById('q1').innerHTML = Math12[0]
    document.getElementById('q2').innerHTML = Math12[1]
    document.getElementById('q3').innerHTML = ""
    document.getElementById('q4').innerHTML = Math12[3]

    document.getElementById('a1').innerHTML = 190
    document.getElementById('a2').innerHTML = 180
    document.getElementById('a3').innerHTML = 150//
    document.getElementById('a4').innerHTML = 110

    count=12
}
}

if(count==12){
    if(num==3){
        displayResult()
    document.getElementById('q1').innerHTML = Math13[0]
    document.getElementById('q2').innerHTML = Math13[1]
    document.getElementById('q3').innerHTML = Math13[2]
    document.getElementById('q4').innerHTML = ""

    document.getElementById('a1').innerHTML = 705
    document.getElementById('a2').innerHTML = 710
    document.getElementById('a3').innerHTML = 700
    document.getElementById('a4').innerHTML = 720//

    count=13
}
}

if(count==13){
    if(num==4){
        displayResult()
    document.getElementById('q1').innerHTML = Math14[0]
    document.getElementById('q2').innerHTML = Math14[1]
    document.getElementById('q3').innerHTML = Math14[2]
    document.getElementById('q4').innerHTML = ""

    document.getElementById('a1').innerHTML = 116//
    document.getElementById('a2').innerHTML = 234
    document.getElementById('a3').innerHTML = 103
    document.getElementById('a4').innerHTML = 114

    count=14
}
}

if(count==14){
    if(num==1){
        displayResult()
    document.getElementById('q1').innerHTML = ""
    document.getElementById('q2').innerHTML = Math15[1]
    document.getElementById('q3').innerHTML = Math15[2]
    document.getElementById('q4').innerHTML = Math15[3]

    document.getElementById('a1').innerHTML = 501
    document.getElementById('a2').innerHTML = 518//
    document.getElementById('a3').innerHTML = 501
    document.getElementById('a4').innerHTML = 520

    count=15
}
}

if(count==15){
    if(num==2){
        displayResult()
    document.getElementById('q1').innerHTML = Math16[0]
    document.getElementById('q2').innerHTML = ""
    document.getElementById('q3').innerHTML = Math16[2]
    document.getElementById('q4').innerHTML = Math16[3]

    document.getElementById('a1').innerHTML = 294
    document.getElementById('a2').innerHTML = 288
    document.getElementById('a3').innerHTML = 297//
    document.getElementById('a4').innerHTML = 295

    count=16
}
}

if(count==16){
    if(num==3){
        displayResult()
    document.getElementById('q1').innerHTML = ""
    document.getElementById('q2').innerHTML = Math17[1]
    document.getElementById('q3').innerHTML = Math17[2]
    document.getElementById('q4').innerHTML = Math17[3]

    document.getElementById('a1').innerHTML = 343
    document.getElementById('a2').innerHTML = 333
    document.getElementById('a3').innerHTML = 380
    document.getElementById('a4').innerHTML = 348//

    count=17
}
}

if(count==16){
    if(num==3){
        displayResult()
    document.getElementById('q1').innerHTML = 623
    document.getElementById('q2').innerHTML = ""
    document.getElementById('q3').innerHTML = 651
    document.getElementById('q4').innerHTML = 665

    document.getElementById('a1').innerHTML = 675
    document.getElementById('a2').innerHTML = 637//
    document.getElementById('a3').innerHTML = 666
    document.getElementById('a4').innerHTML = 612

    count=17
}
}

if(count==17){
    if(num==2){
        displayResult()
    document.getElementById('q1').innerHTML = ""
    document.getElementById('q2').innerHTML = 652
    document.getElementById('q3').innerHTML = 776
    document.getElementById('q4').innerHTML = 900

    document.getElementById('a1').innerHTML = 528//
    document.getElementById('a2').innerHTML = 530
    document.getElementById('a3').innerHTML = 550
    document.getElementById('a4').innerHTML = 524

    count=18
}
}

if(count==17){
    if(num==2){
        displayResult()
    document.getElementById('q1').innerHTML = 111
    document.getElementById('q2').innerHTML = 148
    document.getElementById('q3').innerHTML = 185
    document.getElementById('q4').innerHTML = ""

    document.getElementById('a1').innerHTML = 209
    document.getElementById('a2').innerHTML = 215
    document.getElementById('a3').innerHTML = 220
    document.getElementById('a4').innerHTML = 222//

    count=18
}
}

if(count==17){
    if(num==2){
        displayResult()
    document.getElementById('q1').innerHTML = 111
    document.getElementById('q2').innerHTML = 148
    document.getElementById('q3').innerHTML = 185
    document.getElementById('q4').innerHTML = ""

    document.getElementById('a1').innerHTML = 209
    document.getElementById('a2').innerHTML = 215
    document.getElementById('a3').innerHTML = 220
    document.getElementById('a4').innerHTML = 222//

    count=18
}
}

///
}

    $(window).on('load',function(){
        $('#myModal').modal('show');
    });

function end(){
    $('#myModal2').modal('show');
    document.getElementById('score2').innerHTML = all

}


function click1(){
    num = document.getElementById('as1').value = 1
    up()
    ms()
}

function click2(){
    num = document.getElementById('as2').value = 2
    up()
    ms()

}
function click3(){
    num = document.getElementById('as3').value = 3
    up()
    ms()

}
function click4(){
    num = document.getElementById('as4').value = 4
    up()
    ms()
}



function bgMs(){
    bg.play()
}


function timeout(){
    audio2.play()
    bg.pause()
}



function reset(){
    score = 0
    gameStart()

}

var all=0


function displayResult(){
    score = score+100
    document.getElementById("score").style.font = "italic bold 50px cursive, sans-serif";
    document.getElementById('score').innerHTML = score
    count++
    all = score;
}


function rerun(){
    location.reload();
}


function gameStart() {
    bgMs()
    var timeleft = 60;
    var downloadTimer = setInterval(function () {
        document.getElementById("countdown").style.font = "italic bold 80px cursive, sans-serif";
        document.getElementById("countdown").innerHTML = timeleft;
        timeleft -= 1;
        if (timeleft < 0) {
            clearInterval(downloadTimer);
            timeout()
            document.getElementById("countdown").style.font = "italic bold 40px cursive, sans-serif";
            document.getElementById("countdown").innerHTML = "หมดเวลา"
            end()
        } 
    }, 1000);
    up()
}




  