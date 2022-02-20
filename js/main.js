import {printError, printREsult} from './printResult.js'
import getDateDiff from './getDateDiff.js'
import {addSwitchModule} from './switchModeButton.js'


const form = document.getElementById('datecalc');
const formTimer = document.getElementById('timer');

addSwitchModule(formTimer,form);


formTimer.onsubmit= (e) =>{
    e.preventDefault();
    const formData = new FormData(e.target)
    const timeOut = formData.get('timerField')
    const result = document.getElementById('timerResult');
    let sec=timeOut;
    let timerId = setInterval(() => {
        result.innerText = `${sec}`;
        sec--;
    } , 1000);
    setTimeout(() => { clearInterval(timerId);
        {
            result.innerText = `Куку`;
            let sound = new Howl({
                src: ['https://music.yandex.ru/album/21173342/track/100727720']
            });

            sound.play();
        } }, (+timeOut)*1000);
}


form.onsubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    const firsDate = formData.get('firstDate')
    const secondDate = formData.get('secondDate')
    if (!firsDate || !secondDate) {
        printError('Oooooopppsss - введите текст!!!!')
    } else {
        const dateDiff = getDateDiff(firsDate, secondDate);
        printREsult({data: dateDiff});

    }
}