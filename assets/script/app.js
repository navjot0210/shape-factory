'use strict';

import author, { Shape } from './Shape.js';
import { select, listen } from './utils.js';

const shape = select('.shape');
const colour = select('.colour');
const btn = select('.create');
const shapeBox = select('.grid-container');
const message = select('.shape-info');
const STORAGE = 24;
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

function getSelectedText(element) {
  if (element.selectedIndex !== -1) {
    return element.options[element.selectedIndex].text;
  }
}

function createShapeObj() {
  let colorText = getSelectedText(colour);
  let newShape = new Shape(shape.value, colorText);
  array.push(newShape);
}

function create(elementType) {
  return document.createElement(elementType);
}

function createShape() {
  count++;
  let newShape = create('div');
  if (shape.value === "circle") {
    newShape.classList.add('circle');
  }
  newShape.style.backgroundColor = `#${colour.value}`;
  newShape.classList.add(`item-${count}`);
  shapeBox.appendChild(newShape);
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
    createShapeObj();
    createShape();
  } else if (array.length === STORAGE) {
    message.innerText = `Storage is full!`;
    clear();
  }
}

listen('click', btn, buttonClick);

function getUnit(ele) {
  let className = ele[ele.length - 1];
  let classArr = className.split('-');
  let unit = classArr[classArr.length - 1];
  return unit;
}

function setInfo(unit, info) {
  message.innerText = `Unit ${unit}: ${info}`;
}

listen('click', window, (event) => {
  if (shapeBox.hasChildNodes()) {
    shapeBox.childNodes.forEach(node => {
      if (node.contains(event.target)) {
        let unit = getUnit(node.classList);
        let info = array[unit - 1].getInfo();
        setInfo(unit, info);
      }
    });
  }
});












