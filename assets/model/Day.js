'use strict';

export default class Day {
  constructor(date) {
    this._date = date;
    this._isCurrent = Day.isCurrent; // false
  }
  get date() {
    return this._date;
  }
  get isCurrent() {
    return this._isCurrent;
  }
  set date(newDate) {
    this._date = newDate;
    this._isCurrent = Day.isCurrent(newDate);
  }
  static isCurrentDay(date) {
    return date.toDateString() == Day.current_date.toDateString();
  }
  static current_date = new Date(); // current date
}
