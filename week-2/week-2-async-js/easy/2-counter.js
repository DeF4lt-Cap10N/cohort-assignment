let cnt = 0;

function print(){
    cnt++;
    console.log(cnt);
    setTimeout(print, 1000);
}

print();