import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const regForm = document.querySelector('.feedback-form');

regForm.addEventListener('input', throttle(onFillForm, 500));
regForm.addEventListener('submit', onSubmit);

let currentData = {};

if (localStorage.getItem(STORAGE_KEY)) {
  currentData = JSON.parse(localStorage.getItem(STORAGE_KEY));
}
if (currentData.email) {
  regForm[0].value = currentData.email;
}
if (currentData.message) {
  regForm[1].value = currentData.message;
}

function onFillForm(e) {
  if (e.target.name === 'email') {
    currentData.email = e.target.value;
  }
  if (e.target.name === 'message') {
    currentData.message = e.target.value;
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(currentData));
}
function onSubmit(e) {
  e.preventDefault();

  console.log('Submit successful!');
  console.log(currentData);
  e.target.reset();
  localStorage.removeItem(STORAGE_KEY);
}
