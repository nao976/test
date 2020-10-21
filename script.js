document.write("問１<br>");
function menseki(num){
    return (num*num*3.14);
}

document.write(menseki(5));
document.write("<br>");
document.write(menseki(7));
document.write("<br>");
document.write(menseki(10));
document.write("<br>");

document.write("問２<br>");
function calcFee(adultCount,childCount){
    return adultCount*500+childCount*200;
}

document.write("Aグループの合計金額は"+calcFee(2,4)+"円です。<br>");
document.write(" Bグループの合計金額は"+calcFee(1,5)+"円です。<br>");
document.write(" Cグループの合計金額は"+calcFee(3,7)+"円です。<br>");