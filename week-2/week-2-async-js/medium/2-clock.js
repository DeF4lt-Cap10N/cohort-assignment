
const clock = () => {
    const data = new Date();

    const hours24 = data.getHours().toString().padStart(2,"0");
    const minutes = data.getMinutes().toString().padStart(2,'0');
    const second = data.getSeconds().toString().padStart(2,'0');

    const hours12 =(((hours24)%12)).toString().padStart(2,'0');
    const aMpM = (hours24<=12)? "am":"pm";

    console.log(`Railway Time: ${hours24} : ${minutes} : ${second}`);
    console.log(`Railway Time: ${hours12} : ${minutes} : ${second} : ${aMpM}`);
    
    setTimeout(clock, 1000);
}

clock();