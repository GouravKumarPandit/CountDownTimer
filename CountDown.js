let endDate = new Date('13 November 2022, 11:59:59 PM');
endDate = endDate.toLocaleString('en-us');
// document.getElementById('lastDate').innerText = endDate;

function countDown(){
    let lastDate = new Date(endDate);
    let currDate = new Date();
    let diffTime = (lastDate.getTime() - currDate.getTime()) / 1000;
    
    if(diffTime < 0){
        document.getElementById('birthDayMsg').innerText = 'Happy Birthday VIBHUU';
        return;
    }
    let timeElm = document.querySelectorAll('input');

    timeElm[0].value = Math.floor(diffTime / 3600 / 24);

    timeElm[1].value = Math.floor(diffTime / 3600) % 24;

    timeElm[2].value = Math.floor(diffTime / 60) % 60;

    timeElm[3].value = Math.floor(diffTime) % 60;
}

setInterval('countDown()',1000);

