const result = document.getElementById('result')

export const printError = (errText) => {
  result.innerText = errText
}

export const printREsult = ({data}) => {
    result.innerText = `Год: ${data.years} - Месяц: ${data.months} - День: ${data.days}`;

}