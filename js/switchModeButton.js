

export const addSwitchModule =(formTimer,form) => {
    const button = document.getElementById('method');

    let method='datecalc';
    button.innerHTML=`${button.innerHTML}`
    const clickHandler = (e)=>{
        method= method==='datecalc'? 'timer':'datecalc';
        e.target.innerHTML=`${e.target.innerHTML.split(" ").slice(0,-1).join(" ")} ${method}`;
        formTimer.style.display=method==='timer'? 'block': 'none';
        form.style.display=method==='datecalc'? 'block': 'none';
    }
    button.addEventListener('click' ,clickHandler);
    formTimer.style.display=method==='timer'? 'block': 'none';
    form.style.display=method==='datecalc'? 'block': 'none';
}
