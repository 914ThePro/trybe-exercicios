import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'NEXT_COLOR':
      if (state.index >= state.colors.length - 1 ) return state;
      return {
        colors: state.colors,
        index: state.index + 1,
      }
    case 'PREVIOUS_COLOR':
      if (state.index <= 0) return state;
      return {
        colors: state.colors,
        index: state.index - 1,
      }
    case 'RANDOM_COLOR':
      const newColors = [...state.colors, criarCor()];
      return {
        colors: newColors,
        index: newColors.length - 1,
      } 
    default:
      return state;
  }
}

const NEXT_COLOR = {type: "NEXT_COLOR"}
const PREVIOUS_COLOR = {type: "PREVIOUS_COLOR"}
const RANDOM_COLOR = {type: "RANDOM_COLOR"}

const store = createStore(reducer, composeWithDevTools());

store.subscribe(() => {
  const globalState = store.getState();
  colorName.innerHTML = globalState.colors[globalState.index];
})

const colorName = document.querySelector('#value');
const prevButton = document.querySelector('#previous');
const nextButton = document.querySelector('#next');
const randomColor = document.querySelector('#randomColor');

nextButton.addEventListener('click', () => {
  store.dispatch(NEXT_COLOR);
});

prevButton.addEventListener('click', () => {
  store.dispatch(PREVIOUS_COLOR);
});

randomColor.addEventListener('click', () => {
  store.dispatch(RANDOM_COLOR);
});


function criarCor() {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
      cor += oneChar[aleatorio()];
  }
  return cor;
}