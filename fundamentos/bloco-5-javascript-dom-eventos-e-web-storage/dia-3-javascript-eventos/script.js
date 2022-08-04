function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

function creteDaysOfTheMonth(){
  let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
  13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  
  const monthDaysList = document.querySelector('#days');
  for(day of decemberDaysList){
    let li = document.createElement('li');
    li.innerText = day;
    li.className = "day";
    monthDaysList.appendChild(li);


    if(day == 24 || day == 25 || day == 31){
      li.className += " holiday";
    }

    if(day == 4 || day == 11 || day == 18 || day == 25){
      li.className += " friday";
    }
  }
  
}

function createHolidayButton(buttonName){
  let buttonsContainer = document.querySelector('.buttons-container');
  let btnHoliday = document.createElement('button');
  btnHoliday.innerText = buttonName;
  buttonsContainer.appendChild(btnHoliday);
}

createDaysOfTheWeek();
creteDaysOfTheMonth();
createHolidayButton('Feriados');

// Escreva seu código abaixo.