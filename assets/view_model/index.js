'use strict';
import model from '../model/index.js';
import CalElem from './CalElem.js';
//document.body.appendChild(CalElem(new model.Month(new Date())));
document.body.appendChild(
  CalElem(new model.Month(new Date('2022-03-08T03:24:00')))
);
