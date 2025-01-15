let cnt = 0;

function print(){
    cnt++;
    console.log(cnt);
}

setInterval(print, 1000);