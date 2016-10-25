var now =new Date();
var h = now.getHours();
var m = now.getMinutes();
var s = now.getSeconds();

h = (h > 12)?h - 12:h ;
var sDealy = -(s + 15);
var mDealy = - ((m + 15) * 60 + s);
var hDealy = - ((h + 3) * 3600 + m * 60 + s);


document.querySelector('.scend').style.animationDelay = sDealy + 's';
document.querySelector('.minn').style.animationDelay = mDealy + 's';
document.querySelector('.hours').style.animationDelay = hDealy + 's';
