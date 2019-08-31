const view = document.querySelector('.inputview');

const insert = ({target}) => {
  const capture = view.value;
  view.focus();
  view.value += target.value;
};

const equal = () => {
  const capture = view.value;
  if (capture) {
    view.value = eval(capture);
  }
};

const clear = () => {
  view.value = "";
};

const back = () => {
  const capture = view.value;
  view.value = capture.substr(0, capture.length - 1);
};

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {

  switch (button.value) {
    case 'clear':
      button.addEventListener('click', clear);
      break;

    case 'back':
      button.addEventListener('click', back);
      break;

    case 'equals':
      button.addEventListener('click', equal);
      break;

    default:
      button.addEventListener('click', insert);
      break;
  }
});