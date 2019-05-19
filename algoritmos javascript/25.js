
var a=prompt("digita un numero de 4 cifras");
var b=(a%1000);
var c=a-(b*1000);
var d=(c%100);
var e=c-(d*100);
var f=(e%10);
var g=e-(f*10);

document.write(str(g)+str(f)+str(d)+str(b));
