let myMes = [];
myMes[0] = "こんばんは午前０時です";
myMes[1] = "こんばんは午前１時です";
myMes[2] = "こんばんは午前２時です";
myMes[3] = "こんばんは午前３時です";
myMes[4] = "こんばんは午前４時です";
myMes[5] = "おはようございます午前５時です";
myMes[6] = "おはようございます午前６時です";
myMes[7] = "おはようございます午前７時です";
myMes[8] = "おはようございます午前８時です";
myMes[9] = "おはようございます午前９時です";
myMes[10] = "おはようございます午前１０時です";
myMes[11] = "おはようございます午前１１時です";
myMes[12] = "こんにちは午後０時です。お昼ご飯の時間ですね";
myMes[13] = "こんにちは午後１時です";
myMes[14] = "こんにちは午後２時です";
myMes[15] = "こんにちは午後３時です";
myMes[16] = "こんにちは午後４時です";
myMes[17] = "こんにちは午後５時です";
myMes[18] = "こんばんは午後６時です";
myMes[19] = "こんばんは午後７時です";
myMes[20] = "こんばんは午後８時です";
myMes[21] = "こんばんは午後９時です";
myMes[22] = "こんばんは午後１０時です";
myMes[23] = "こんばんは午後１１時です";
js.innerHTML= myMes[new Date().getHours()];

let count =1;
const p1 =document.getElementById("p1");
const p2 =document.getElementById("p2");

function myFunc(){
    p1.innerHTML="サイト閲覧時間："+ count+"秒"
    p2.innerHTML= "支払い料金(100円/5秒)："+Math.floor(count/5)*100+"円"
    count++;
}
setInterval("myFunc()",1000);
