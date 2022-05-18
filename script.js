/*
var my_name = "Andy";
var my_age = 21;
var my_height = 172.5;
var test_number = -6;

document.write("My name is " + my_name);
document.write("<BR/>");
document.write("I am " + my_age + "years old.");
document.write("<BR/>");
document.write("My height is " + my_height + " centimeters.");
document.write("<BR/>");
document.write(Math.abs(test_number));
document.write("<BR/>");
document.write(Math.max(1, 2, 3, 4));
document.write("<BR/>");
document.write(Math.round(my_height));
document.write("<BR/>");
document.write(Math.pow(2, 3));
document.write("<BR/>"); 
document.write(Math.round(Math.random() * 10));
document.write("<BR/>");
var num_1 = prompt("請輸數字1");
var num_2 = prompt("請輸數字2");
num_1 = parseFloat(num_1);
num_2 = parseFloat(num_2);
document.write(num_1 + num_2);
document.write("<BR/>");

// 陣列
var scores = [50, 23, 49, 59, 20];
scores[0] = 30;
document.write(scores);
document.write("<BR/>");
document.write(scores[0]);
document.write("<BR/>");
var names = [true, "Andy", 49];
document.write(names[0] + "," + names[1] + "," + names[2]);
document.write("<BR/>");
*/

// 函式
/*
var num1 = prompt("請輸數字1");
var num2 = prompt("請輸數字2");
num1 = parseFloat(num1);
num2 = parseFloat(num2);
function add(num1, num2){
    document.write(num1 + num2);
    document.write("<BR/>");
    return 10;
}
value = add(num1, num2);
document.write(value);
*/

/*
// if else
var num1 = prompt("請輸數字1");
var num2 = prompt("請輸數字2");
var num3 = prompt("請輸數字3");
num1 = parseFloat(num1);
num2 = parseFloat(num2);
num3 = parseFloat(num3);

function max_num(num1, num2, num3){
    if(num1 >= num2 && num1 >= num3){
        return num1;
    }
    else if(num2 >= num1 && num2 >= num3){
        return num2;
    }
    else{
        return num3;
    }
}

document.write("The maximum number is: " + max_num(num1, num2, num3));
*/

// object
// key value

/*
var person = {
    name: "Andy",
    age: "21",
    is_male: "True",
    print_name: function(){
        return this.name;
    }
}

document.write("The person's name is: " + person.print_name());
*/

var record1 = 1000000;
var record2 = 1000000;
var record3 = 1000000;
var record4 = 1000000;
var record5 = 1000000;
var record6 = 1000000;
var record7 = 1000000;
var record8 = 1000000;
var badtrigger = 0;
var timeout = -1;
var state = 1;
var a = 0;
//var A = ['o', '_', '_', '_', '_', '_', '_', '_', '_']
var content = document.getElementById("content");
var num = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
var hard = 0.57;
var count = 0;
var level = 2;
var goback = 0;
var btn_easy = document.getElementById("btn_easy");
var btn_normal = document.getElementById("btn_normal");
var btn_hard = document.getElementById("btn_hard");
var btn_professional = document.getElementById("btn_professional");
var btn_interesting_easy = document.getElementById("btn_interesting_easy");
var btn_interesting_normal = document.getElementById("btn_interesting_normal");
var btn_interesting_hard = document.getElementById("btn_interesting_hard");
var btn_interesting_professional = document.getElementById("btn_interesting_professional");

for (var i = 1; i <= 10; i++){
    for (var j = 1; j <= 10; j++) num[i][j] = Math.round(Math.random() * hard);
}

//let timer2 = setInterval(myTimer2, 1000);
//let timer3 = setInterval(myTimer3, 1000);
//let timer4 = setInterval(myTimer4, 1000);
//let timer5 = setInterval(myTimer5, 1000);

btn_easy.addEventListener("click", function(){
    badtrigger = 0;
    goback = 0;
    hard = 0.52;
    timeout = -1;
    for (var x = 0; x <= 9; x++) {
        for (var y = 0; y <=  9; y++) btn[x][y].disabled = false;
    }
    for (var k = 0; k <= 9; k++) {
        for (var l = 0; l <= 9; l++) btn[k][l].innerText = "X";
    }
    content.innerHTML = "Game Start！"
    for (var i = 1; i <= 10; i++){
        for (var j = 1; j <= 10; j++) num[i][j] = Math.round(Math.random() * hard);
    }
    level = 1;
    state = 1;
});

btn_normal.addEventListener("click", function(){
    badtrigger = 0;
    hard = 0.57;
    timeout = -1;
    goback = 0;
    for (var x = 0; x <= 9; x++) {
        for (var y = 0; y <=  9; y++) btn[x][y].disabled = false;
    }
    for (var k = 0; k <= 9; k++) {
        for (var l = 0; l <= 9; l++) btn[k][l].innerText = "X";
    }
    content.innerHTML = "Game Start！"
    for (var i = 1; i <= 10; i++){
        for (var j = 1; j <= 10; j++) num[i][j] = Math.round(Math.random() * hard);
    }
    level = 2;
    state = 1;
});

btn_hard.addEventListener("click", function(){
    badtrigger = 0;
    hard = 0.62;
    timeout = -1;
    goback = 0;
    for (var x = 0; x <= 9; x++) {
        for (var y = 0; y <=  9; y++) btn[x][y].disabled = false;
    }
    for (var k = 0; k <= 9; k++) {
        for (var l = 0; l <= 9; l++) btn[k][l].innerText = "X";
    }
    content.innerHTML = "Game Start！"
    for (var i = 1; i <= 10; i++){
        for (var j = 1; j <= 10; j++) num[i][j] = Math.round(Math.random() * hard);
    } 
    level = 3;
    state = 1;
});

btn_professional.addEventListener("click", function(){
    badtrigger = 0;
    hard = 0.67;
    timeout = -1;
    goback = 0;
    for (var x = 0; x <= 9; x++) {
        for (var y = 0; y <=  9; y++) btn[x][y].disabled = false;
    }
    for (var k = 0; k <= 9; k++) {
        for (var l = 0; l <= 9; l++) btn[k][l].innerText = "X";
    }
    content.innerHTML = "Game Start！"
    for (var i = 1; i <= 10; i++){
        for (var j = 1; j <= 10; j++) num[i][j] = Math.round(Math.random() * hard);
    }
    level = 4;
    state = 1;
});

btn_interesting_easy.addEventListener("click", function(){
    hard = 0.52;
    timeout = -1;
    if (badtrigger == 0) badtrigger = 1;
    else {
        badtrigger = 2;
        alert ("想再挑戰本模式請按restart!");
        goback = 1;
        for (var xx1 = 0; xx1 <= 9; xx1++) {
            for (var yy1 = 0; yy1 <=  9; yy1++) btn[xx1][yy1].disabled = true;
        }
    }
    if (badtrigger == 1) {
        for (var x = 0; x <= 9; x++) {
            for (var y = 0; y <=  9; y++) btn[x][y].disabled = false;
        }
        for (var k = 0; k <= 9; k++) {
            for (var l = 0; l <= 9; l++) btn[k][l].innerText = "X";
        }
        content.innerHTML = "Game Start！"
        for (var i = 1; i <= 10; i++){
            for (var j = 1; j <= 10; j++) num[i][j] = Math.round(Math.random() * hard);
        }
    }
    level = 5;
    state = 1;
});

btn_interesting_normal.addEventListener("click", function(){
    hard = 0.57;
    timeout = -1;
    if (badtrigger == 0) badtrigger = 1;
    else {
        badtrigger = 2;
        alert ("想再挑戰本模式請按restart!");
        goback = 1;
        for (var xx1 = 0; xx1 <= 9; xx1++) {
            for (var yy1 = 0; yy1 <=  9; yy1++) btn[xx1][yy1].disabled = true;
        }
    }
    if (badtrigger == 1) {
        for (var x = 0; x <= 9; x++) {
            for (var y = 0; y <=  9; y++) btn[x][y].disabled = false;
        }
        for (var k = 0; k <= 9; k++) {
            for (var l = 0; l <= 9; l++) btn[k][l].innerText = "X";
        }
        content.innerHTML = "Game Start！"
        for (var i = 1; i <= 10; i++){
            for (var j = 1; j <= 10; j++) num[i][j] = Math.round(Math.random() * hard);
        }
    }
    level = 6;
    state = 1;
});

btn_interesting_hard.addEventListener("click", function(){
    hard = 0.62;
    timeout = -1;
    if (badtrigger == 0) badtrigger = 1;
    else {
        badtrigger = 2;
        alert ("想再挑戰本模式請按restart!");
        goback = 1;
        for (var xx1 = 0; xx1 <= 9; xx1++) {
            for (var yy1 = 0; yy1 <=  9; yy1++) btn[xx1][yy1].disabled = true;
        }
    }
    if (badtrigger == 1) {
        for (var x = 0; x <= 9; x++) {
            for (var y = 0; y <=  9; y++) btn[x][y].disabled = false;
        }
        for (var k = 0; k <= 9; k++) {
            for (var l = 0; l <= 9; l++) btn[k][l].innerText = "X";
        }
        content.innerHTML = "Game Start！"
        for (var i = 1; i <= 10; i++){
            for (var j = 1; j <= 10; j++) num[i][j] = Math.round(Math.random() * hard);
        }
    }
    level = 7;
    state = 1;
});

btn_interesting_professional.addEventListener("click", function(){
    hard = 0.67;
    timeout = -1;
    if (badtrigger == 0) badtrigger = 1;
    else {
        badtrigger = 2;
        alert ("想再挑戰本模式請按restart!");
        goback = 1;
        for (var xx1 = 0; xx1 <= 9; xx1++) {
            for (var yy1 = 0; yy1 <=  9; yy1++) btn[xx1][yy1].disabled = true;
        }
    }
    if (badtrigger == 1) {
        for (var x = 0; x <= 9; x++) {
            for (var y = 0; y <=  9; y++) btn[x][y].disabled = false;
        }
        for (var k = 0; k <= 9; k++) {
            for (var l = 0; l <= 9; l++) btn[k][l].innerText = "X";
        }
        content.innerHTML = "Game Start！"
        for (var i = 1; i <= 10; i++){
            for (var j = 1; j <= 10; j++) num[i][j] = Math.round(Math.random() * hard);
        }
    }
    level = 8;
    state = 1;
});

setInterval(badgame, 6000);
function badgame() {
    if (badtrigger == 1 && state == 1) {
        for (var ss1 = 1; ss1 <= 10; ss1++){
            for (var tt1 = 1; tt1 <= 10; tt1++) {
                var gg1 = Math.round(Math.random() * 10);
                var gg2 = Math.round(Math.random() * 10);
            }
        }
        if (btn[gg1][gg2].disabled == true)
            btn[gg1][gg2].innerText = "X";
            btn[gg1][gg2].disabled = false;
    } 
}

setInterval(myTimer, 1000);
function myTimer() {
    timeout++;
    document.getElementById("content_2").innerHTML = timeout;
} 

setInterval(myFunction, 1000)
function myFunction() {
    const d = new Date();
    document.getElementById("content_3").innerHTML = d.toLocaleTimeString();
//    timeout++;
//    document.getElementById("content_2").innerHTML = timeout;
} 


var btn = [
        [document.getElementById("btn1"), document.getElementById("btn2"), document.getElementById("btn3"), document.getElementById("btn4"), document.getElementById("btn5"), document.getElementById("btn6"), document.getElementById("btn7"), document.getElementById("btn8"), document.getElementById("btn9"), document.getElementById("btn10")],
        [document.getElementById("btn11"), document.getElementById("btn12"), document.getElementById("btn13"), document.getElementById("btn14"), document.getElementById("btn15"), document.getElementById("btn16"), document.getElementById("btn17"), document.getElementById("btn18"), document.getElementById("btn19"), document.getElementById("btn20")],
        [document.getElementById("btn21"), document.getElementById("btn22"), document.getElementById("btn23"), document.getElementById("btn24"), document.getElementById("btn25"), document.getElementById("btn26"), document.getElementById("btn27"), document.getElementById("btn28"), document.getElementById("btn29"), document.getElementById("btn30")],
        [document.getElementById("btn31"), document.getElementById("btn32"), document.getElementById("btn33"), document.getElementById("btn34"), document.getElementById("btn35"), document.getElementById("btn36"), document.getElementById("btn37"), document.getElementById("btn38"), document.getElementById("btn39"), document.getElementById("btn40")],
        [document.getElementById("btn41"), document.getElementById("btn42"), document.getElementById("btn43"), document.getElementById("btn44"), document.getElementById("btn45"), document.getElementById("btn46"), document.getElementById("btn47"), document.getElementById("btn48"), document.getElementById("btn49"), document.getElementById("btn50")],
        [document.getElementById("btn51"), document.getElementById("btn52"), document.getElementById("btn53"), document.getElementById("btn54"), document.getElementById("btn55"), document.getElementById("btn56"), document.getElementById("btn57"), document.getElementById("btn58"), document.getElementById("btn59"), document.getElementById("btn60")],
        [document.getElementById("btn61"), document.getElementById("btn62"), document.getElementById("btn63"), document.getElementById("btn64"), document.getElementById("btn65"), document.getElementById("btn66"), document.getElementById("btn67"), document.getElementById("btn68"), document.getElementById("btn69"), document.getElementById("btn70")],
        [document.getElementById("btn71"), document.getElementById("btn72"), document.getElementById("btn73"), document.getElementById("btn74"), document.getElementById("btn75"), document.getElementById("btn76"), document.getElementById("btn77"), document.getElementById("btn78"), document.getElementById("btn79"), document.getElementById("btn80")],
        [document.getElementById("btn81"), document.getElementById("btn82"), document.getElementById("btn83"), document.getElementById("btn84"), document.getElementById("btn85"), document.getElementById("btn86"), document.getElementById("btn87"), document.getElementById("btn88"), document.getElementById("btn89"), document.getElementById("btn90")],
        [document.getElementById("btn91"), document.getElementById("btn92"), document.getElementById("btn93"), document.getElementById("btn94"), document.getElementById("btn95"), document.getElementById("btn96"), document.getElementById("btn97"), document.getElementById("btn98"), document.getElementById("btn99"), document.getElementById("btn100")],
    ];

btn[0][0].addEventListener("click", function(){ 
    var s = 0;
    var t = 0;
    btn[0][0].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }

    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[0][1].addEventListener("click", function(){  
    var s = 0;
    var t = 1;
    
    btn[0][1].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[0][2].addEventListener("click", function(){  
    var s = 0;
    var t = 2;
    
    btn[0][2].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[0][3].addEventListener("click", function(){  
    var s = 0;
    var t = 3;
    
    btn[0][3].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[0][4].addEventListener("click", function(){  
    var s = 0;
    var t = 4;
    
    btn[0][4].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[0][5].addEventListener("click", function(){  
    var s = 0;
    var t = 5;
    
    btn[0][5].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[0][6].addEventListener("click", function(){  
    var s = 0;
    var t = 6;
    
    btn[0][6].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[0][7].addEventListener("click", function(){  
    var s = 0;
    var t = 7;
    
    btn[0][7].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[0][8].addEventListener("click", function(){  
    var s = 0;
    var t = 8;
    
    btn[0][8].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[0][9].addEventListener("click", function(){  
    var s = 0;
    var t = 9;
    
    btn[0][9].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[1][0].addEventListener("click", function(){  
    var s = 1;
    var t = 0;
    
    btn[1][0].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[1][1].addEventListener("click", function(){  
    var s = 1;
    var t = 1;
    
    btn[1][1].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[1][2].addEventListener("click", function(){  
    var s = 1;
    var t = 2;
    
    btn[1][2].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[1][3].addEventListener("click", function(){  
    var s = 1;
    var t = 3;
    
    btn[1][3].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[1][4].addEventListener("click", function(){  
    var s = 1;
    var t = 4;
    
    btn[1][4].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[1][5].addEventListener("click", function(){  
    var s = 1;
    var t = 5;
    
    btn[1][5].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[1][6].addEventListener("click", function(){  
    var s = 1;
    var t = 6;
    
    btn[1][6].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[1][7].addEventListener("click", function(){  
    var s = 1;
    var t = 7;
    
    btn[1][7].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[1][8].addEventListener("click", function(){  
    var s = 1;
    var t = 8;
    
    btn[1][8].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[1][9].addEventListener("click", function(){  
    var s = 1;
    var t = 9;
    
    btn[1][9].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[2][0].addEventListener("click", function(){  
    var s = 2;
    var t = 0;
    
    btn[2][0].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[2][1].addEventListener("click", function(){  
    var s = 2;
    var t = 1;
    
    btn[2][1].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[2][2].addEventListener("click", function(){  
    var s = 2;
    var t = 2;
    
    btn[2][2].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[2][3].addEventListener("click", function(){  
    var s = 2;
    var t = 3;
    
    btn[2][3].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[2][4].addEventListener("click", function(){  
    var s = 2;
    var t = 4;
    
    btn[2][4].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[2][5].addEventListener("click", function(){  
    var s = 2;
    var t = 5;
    
    btn[2][5].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[2][6].addEventListener("click", function(){  
    var s = 2;
    var t = 6;
    
    btn[2][6].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[2][7].addEventListener("click", function(){  
    var s = 2;
    var t = 7;
    
    btn[2][7].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[2][8].addEventListener("click", function(){  
    var s = 2;
    var t = 8;
    
    btn[2][8].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[2][9].addEventListener("click", function(){  
    var s = 2;
    var t = 9;
    
    btn[2][9].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[3][0].addEventListener("click", function(){  
    var s = 3;
    var t = 0;
    
    btn[3][0].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[3][1].addEventListener("click", function(){  
    var s = 3;
    var t = 1;
    
    btn[3][1].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[3][2].addEventListener("click", function(){  
    var s = 3;
    var t = 2;
    
    btn[3][2].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[3][3].addEventListener("click", function(){  
    var s = 3;
    var t = 3;
    
    btn[3][3].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[3][4].addEventListener("click", function(){  
    var s = 3;
    var t = 4;
    
    btn[3][4].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[3][5].addEventListener("click", function(){  
    var s = 3;
    var t = 5;
    
    btn[3][5].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[3][6].addEventListener("click", function(){  
    var s = 3;
    var t = 6;
    
    btn[3][6].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[3][7].addEventListener("click", function(){  
    var s = 3;
    var t = 7;
    
    btn[3][7].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[3][8].addEventListener("click", function(){  
    var s = 3;
    var t = 8;
    
    btn[3][8].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[3][9].addEventListener("click", function(){  
    var s = 3;
    var t = 9;
    
    btn[3][9].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[4][0].addEventListener("click", function(){  
    var s = 4;
    var t = 0;
    
    btn[4][0].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[4][1].addEventListener("click", function(){  
    var s = 4;
    var t = 1;
    
    btn[4][1].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[4][2].addEventListener("click", function(){  
    var s = 4;
    var t = 2;
    
    btn[4][2].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[4][3].addEventListener("click", function(){  
    var s = 4;
    var t = 3;
    
    btn[4][3].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[4][4].addEventListener("click", function(){  
    var s = 4;
    var t = 4;
    
    btn[4][4].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[4][5].addEventListener("click", function(){  
    var s = 4;
    var t = 5;
    
    btn[4][5].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[4][6].addEventListener("click", function(){  
    var s = 4;
    var t = 6;
    
    btn[4][6].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[4][7].addEventListener("click", function(){  
    var s = 4;
    var t = 7;
    
    btn[4][7].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[4][8].addEventListener("click", function(){  
    var s = 4;
    var t = 8;
    
    btn[4][8].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[4][9].addEventListener("click", function(){  
    var s = 4;
    var t = 9;
    
    btn[4][9].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[5][0].addEventListener("click", function(){  
    var s = 5;
    var t = 0;
    
    btn[5][0].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[5][1].addEventListener("click", function(){  
    var s = 5;
    var t = 1;
    
    btn[5][1].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[5][2].addEventListener("click", function(){  
    var s = 5;
    var t = 2;
    
    btn[5][2].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[5][3].addEventListener("click", function(){  
    var s = 5;
    var t = 3;
    
    btn[5][3].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[5][4].addEventListener("click", function(){  
    var s = 5;
    var t = 4;
    
    btn[5][4].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[5][5].addEventListener("click", function(){  
    var s = 5;
    var t = 5;
    
    btn[5][5].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[5][6].addEventListener("click", function(){  
    var s = 5;
    var t = 6;
    
    btn[5][6].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[5][7].addEventListener("click", function(){  
    var s = 5;
    var t = 7;
    
    btn[5][7].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[5][8].addEventListener("click", function(){  
    var s = 5;
    var t = 8;
    
    btn[5][8].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[5][9].addEventListener("click", function(){  
    var s = 5;
    var t = 9;
    
    btn[5][9].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[6][0].addEventListener("click", function(){  
    var s = 6;
    var t = 0;
    
    btn[6][0].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[6][1].addEventListener("click", function(){  
    var s = 6;
    var t = 1;
    
    btn[6][1].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[6][2].addEventListener("click", function(){  
    var s = 6;
    var t = 2;
    
    btn[6][2].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[6][3].addEventListener("click", function(){  
    var s = 6;
    var t = 3;
    
    btn[6][3].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[6][4].addEventListener("click", function(){  
    var s = 6;
    var t = 4;
    
    btn[6][4].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[6][5].addEventListener("click", function(){  
    var s = 6;
    var t = 5;
    
    btn[6][5].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[6][6].addEventListener("click", function(){  
    var s = 6;
    var t = 6;
    
    btn[6][6].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[6][7].addEventListener("click", function(){  
    var s = 6;
    var t = 7;
    
    btn[6][7].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[6][8].addEventListener("click", function(){  
    var s = 6;
    var t = 8;
    
    btn[6][8].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[6][9].addEventListener("click", function(){  
    var s = 6;
    var t = 9;
    
    btn[6][9].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[7][0].addEventListener("click", function(){  
    var s = 7;
    var t = 0;
    
    btn[7][0].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[7][1].addEventListener("click", function(){  
    var s = 7;
    var t = 1;
    
    btn[7][1].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[7][2].addEventListener("click", function(){  
    var s = 7;
    var t = 2;
    
    btn[7][2].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[7][3].addEventListener("click", function(){  
    var s = 7;
    var t = 3;
    
    btn[7][3].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[7][4].addEventListener("click", function(){  
    var s = 7;
    var t = 4;
    
    btn[7][4].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[7][5].addEventListener("click", function(){  
    var s = 7;
    var t = 5;
    
    btn[7][5].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[7][6].addEventListener("click", function(){  
    var s = 7;
    var t = 6;
    
    btn[7][6].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[7][7].addEventListener("click", function(){  
    var s = 7;
    var t = 7;
    
    btn[7][7].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[7][8].addEventListener("click", function(){  
    var s = 7;
    var t = 8;
    
    btn[7][8].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[7][9].addEventListener("click", function(){  
    var s = 7;
    var t = 9;
    
    btn[7][9].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[8][0].addEventListener("click", function(){  
    var s = 8;
    var t = 0;
    
    btn[8][0].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[8][1].addEventListener("click", function(){  
    var s = 8;
    var t = 1;
    
    btn[8][1].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[8][2].addEventListener("click", function(){  
    var s = 8;
    var t = 2;
    
    btn[8][2].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[8][3].addEventListener("click", function(){  
    var s = 8;
    var t = 3;
    
    btn[8][3].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[8][4].addEventListener("click", function(){  
    var s = 8;
    var t = 4;
    
    btn[8][4].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[8][5].addEventListener("click", function(){  
    var s = 8;
    var t = 5;
    
    btn[8][5].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[8][6].addEventListener("click", function(){  
    var s = 8;
    var t = 6;
    
    btn[8][6].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[8][7].addEventListener("click", function(){  
    var s = 8;
    var t = 7;
    
    btn[8][7].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[8][8].addEventListener("click", function(){  
    var s = 8;
    var t = 8;
    
    btn[8][8].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[8][9].addEventListener("click", function(){  
    var s = 8;
    var t = 9;
    
    btn[8][9].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[9][0].addEventListener("click", function(){  
    var s = 9;
    var t = 0;
    
    btn[9][0].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[9][1].addEventListener("click", function(){  
    var s = 9;
    var t = 1;
    
    btn[9][1].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[9][2].addEventListener("click", function(){  
    var s = 9;
    var t = 2;
    
    btn[9][2].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[9][3].addEventListener("click", function(){  
    var s = 9;
    var t = 3;
    
    btn[9][3].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[9][4].addEventListener("click", function(){  
    var s = 9;
    var t = 4;
    
    btn[9][4].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[9][5].addEventListener("click", function(){  
    var s = 9;
    var t = 5;
    
    btn[9][5].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[9][6].addEventListener("click", function(){  
    var s = 9;
    var t = 6;
    
    btn[9][6].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
    if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[9][7].addEventListener("click", function(){  
    var s = 9;
    var t = 7;
    
    btn[9][7].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
        if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[9][8].addEventListener("click", function(){  
    var s = 9;
    var t = 8;
    
    btn[9][8].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
        if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});

btn[9][9].addEventListener("click", function(){  
    var s = 9;
    var t = 9;
    
    btn[9][9].disabled = true;
    if (num[s + 1][t + 1] == 1) {
        this.innerText = "！";
        for (var a = 0; a < 10; a++) {
            for (var b = 0; b < 10; b++) {
                if (num[a + 1][b + 1] == 1) btn[a][b].innerText = "！";
            }
        }
        content.innerHTML  = "Game Over！"
        state = 0;
        for (var g = 0; g <= 9; g++) {
            for (var h = 0; h <=  9; h++) btn[g][h].disabled = true;
        }
    }
    else {
        this.innerText = num[s][t] + num[s][t + 1] + num[s][t + 2] + num[s + 1][t] + num[s + 1][t + 2] + num[s + 2][t] + num[s + 2][t + 1] + num[s + 2][t + 2];
    }
    var z = 0;
    for (var a1 = 1; a1 <= 10; a1++) {
        for (var b1 = 1; b1 <= 10; b1++) {
            if (num[a1][b1] == 0) z++;
        }
    }
    
    for (var c1 = 0; c1 <= 9; c1++) {
        for (var d1 = 0; d1 <= 9; d1++) {
            if (btn[c1][d1].disabled == true) z--;
        }
    }
        if (z == 0) {  
        alert("恭喜! 你的紀錄是：" +  timeout + " 秒! ");
        state = 0;
        if (timeout < record1 && level == 1) {
            record1 = timeout;
            document.getElementById("content_4").innerHTML = "目前easy版本最快紀錄是" + record1 + "秒";
        }
        if (timeout < record2 && level == 2) {
            record2 = timeout;
            document.getElementById("content_5").innerHTML = "目前normal版本最快紀錄是" + record2 + "秒";
        }
        if (timeout < record3 && level == 3) {
            record3 = timeout;
            document.getElementById("content_6").innerHTML = "目前hard版本最快紀錄是" + record3 + "秒";
        }
        if (timeout < record4 && level == 4) {
            record4 = timeout;
            document.getElementById("content_7").innerHTML = "目前professional版本最快紀錄是" + record4 + "秒";
        }
        if (timeout < record5 && level == 5) {
            record5 = timeout;
            document.getElementById("content_8").innerHTML = "目前special(easy)版本最快紀錄是" + record5 + "秒";
        }
        if (timeout < record6 && level == 6) {
            record6 = timeout;
            document.getElementById("content_9").innerHTML = "目前special(normal)版本最快紀錄是" + record6 + "秒";
        }
        if (timeout < record7 && level == 7) {
            record7 = timeout;
            document.getElementById("content_10").innerHTML = "目前special(hard)版本最快紀錄是" + record7 + "秒";
        }
        if (timeout < record8 && level == 8) {
            record8 = timeout;
            document.getElementById("content_11").innerHTML = "目前special(professional)版本最快紀錄是" + record8 + "秒";
        }
        for (var r1 = 0; r1 <= 9; r1++) {
            for (var r2 = 0; r2 <=  9; r2++) btn[r1][r2].disabled = true;
        }
    }
});
    
var btn101 = document.getElementById("btn101");
btn101.addEventListener("click", function(){
    for (var x = 0; x <= 9; x++) {
        for (var y = 0; y <=  9; y++) btn[x][y].disabled = false;
    }
    for (var k = 0; k < 10; k++) {
        for (var l = 0; l < 10; l++) btn[k][l].innerText = "X";
    }
    content.innerHTML = "Game Start！"
    for (var i = 1; i <= 10; i++){
        for (var j = 1; j <= 10; j++) num[i][j] = Math.round(Math.random() * hard);
    }
    timeout = -1;
    if (goback == 1) badtrigger = 1;
    state = 1;
});

//content_1.innerHTML = z;

    







/*
//獲得秒數
const d = new Date();
document.write(d.getSeconds());
*/

