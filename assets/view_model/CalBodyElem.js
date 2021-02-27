'use strict';
function createMonthWeekElem(week) {
  const tableRowElement = document.createElement('tr');
  week.days.forEach((day) => {
    tableRowElement.appendChild(createWeekDay(day));
  });
  return tableRowElement;
}

function createWeekDay(day) {
  const tableDataElem = document.createElement('td');
  tableDataElem.innerText = day.date.toLocaleString('ru-RU', {
    day: '2-digit',
  });
  return tableDataElem;
}

export default function (month) {
  const tableBodyElem = document.createElement('tbody');
  month.weeks.forEach((week) => {
    tableBodyElem.appendChild(createMonthWeekElem(week));
  });
  return tableBodyElem;
}
