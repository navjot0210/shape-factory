'use strict';

import author, { Shape } from './Shape.js';
import { select, listen } from './utils.js';

const shape = select('.shape');
const colour = select('.colour');
const btn = select('.create');
const shapeBox = select('.grid-container');
const message = select('.shape-info');
const STORAGE = 20;
let array = [];
let count = 0;

function validInputs() {
  if (shape.value !== '' && colour.value !== '') {
    return true;
  } else {
    message.innerText = 'Please select a shape and colour';
    return false;
  }
}

function getSelectedColour(element) {
  if (element.selectedIndex !== -1) {
    return element.options[element.selectedIndex].text;
  }
}

function create(elementType) {
  return document.createElement(elementType);
}

function createShapes() {
  let colourCode = getSelectedColour(colour);
  let newShape = new Shape(shape.value, colourCode);
  array.push(newShape);

  count++;
  let newElement = create('div');
  if (shape.value === "circle") {
    newElement.classList.add('circle');
  }
  newElement.style.backgroundColor = `${colour.value}`;
  newElement.classList.add(`item-${count}`);
  shapeBox.appendChild(newElement);
}

function clear() {
  btn.classList.add('clear');
  btn.value = 'Clear';
}

function clickClear() {
  if (btn.value === 'Clear') {
    location.reload();
  }
}

function buttonClick() {
  clickClear();
  if (array.length < STORAGE && validInputs()) {
    createShapes();
  } else if (array.length === STORAGE) {
    message.innerText = `Storage is full!`;
    clear();
  }
}

function getUnit(element) {
  let unitNumber = element[element.length - 1].split('-');
  let unitCount = unitNumber[unitNumber.length - 1];
  return unitCount;
}

function showDetails(unitCount, info) {
  message.innerText = `Unit ${unitCount}: ${info}`;
}

function returnShapeInfo(event) {
  if (shapeBox.hasChildNodes()) {
    shapeBox.childNodes.forEach(node => {
      if (node.contains(event.target)) {
        let unit = getUnit(node.classList);
        let info = array[unit - 1].getInfo();
        showDetails(unit, info);
      }
    });
  }
}

listen('click', btn, buttonClick);
listen('click', window, returnShapeInfo);













