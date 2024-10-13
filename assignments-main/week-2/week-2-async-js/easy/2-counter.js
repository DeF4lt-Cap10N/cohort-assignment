let cnt = 0;

function counter(){
    cnt+=1;
    console.log(cnt);
    setTimeout(counter, 1000);
}

counter();