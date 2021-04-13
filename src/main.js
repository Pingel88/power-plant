import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {stateControl, changeState} from './js/plant.js';

const feed = changeState("soil")(1);
const blueFood = changeState("soil")(5);
const yuckyFood = changeState("soil")(-5);

const hydrate = changeState("water")(1);
const superWater = changeState("water")(5);
const brawndo = changeState("water")(20);

const sunlight = changeState("light")(1);
const uvLight = changeState("light")(5);
const darkness = changeState("light")(-5);

// This function has side effects because we are using jQuery. Manipulating the DOM will always be a side effect. Note that we only use one of our functions to alter soil. You can easily add more.

$('#feed').click(function() {
  const newState = stateControl(feed);
  $('#prop-value').text(`Soil: ${newState.soil}`);
});

$('#bluefood').click(function() {
  const newState = stateControl(blueFood);
  $('#prop-value').text(`Soil: ${newState.soil}`);
});

$('#yuckyfood').click(function() {
  const newState = stateControl(yuckyFood);
  $('#prop-value').text(`Soil: ${newState.soil}`);
});

$('#hydrate').click(function() {
  const newState = stateControl(hydrate);
  $('#prop-value').text(`Water: ${newState.water}`);
});

$('#superwater').click(function() {
  const newState = stateControl(superWater);
  $('#prop-value').text(`Water: ${newState.water}`);
});

$('#brawndo').click(function() {
  const newState = stateControl(brawndo);
  $('#prop-value').text(`Water: ${newState.water}`);
});

$('#sunlight').click(function() {
  const newState = stateControl(sunlight);
  $('#prop-value').text(`Light: ${newState.light}`);
});

$('#uvLight').click(function() {
  const newState = stateControl(uvLight);
  $('#prop-value').text(`Light: ${newState.light}`);
});

$('#darkness').click(function() {
  const newState = stateControl(darkness);
  $('#prop-value').text(`Light: ${newState.light}`);
});

// This function doesn't actually do anything useful in this application - it just demonstrates how we can "look" at the current state (which the DOM is holding anyway). However, students often do need the ability to see the current state without changing it so it's included here for reference.

$('#show-state').click(function() {
  // We just need to call stateControl() without arguments to see our current state.
  const currentState = stateControl();
  $('#current-value').text(`Soil: ${currentState.soil}, Water: ${currentState.water}, Light ${currentState.light}`);
});