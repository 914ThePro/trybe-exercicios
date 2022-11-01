import { legacy_createStore as createStore, combineReducers } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';

const THEME_INITIAL_STATE = {
  theme: 'dark',
};

const themeReducer = (state = THEME_INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CHANGE_THEME':
      return {
        theme: state.theme === 'dark' ? 'light' : 'dark',
      }
    default:
      return state;
  }
};

const STATUS_INITIAL_STATE = {
  status: 'offline',
};

const statusReducer = (state = STATUS_INITIAL_STATE, action) => {
  switch (action.type) {
    case "CHANGE_STATUS":
      return {
        status: state.status === 'offline' ? 'online' : 'offline',
      }
    default:
      return state;
  }
};

const combinedReducers = combineReducers({statusReducer, themeReducer});
const store = createStore(combinedReducers, composeWithDevTools());

const CHANGE_THEME = {type: "CHANGE_THEME"};
const CHANGE_STATUS = {type: "CHANGE_STATUS"};

const themeButton = document.getElementById('toggle-theme');
const statusButton = document.getElementById('toggle-status');

themeButton.addEventListener('click', () => {
  store.dispatch(CHANGE_THEME);
});

statusButton.addEventListener('click', () => {
  store.dispatch(CHANGE_STATUS);
});

store.subscribe(() => {
  const globalState = store.getState();
  const { theme } = globalState.themeReducer;
  const { status } = globalState.statusReducer;
  document.querySelector('#body').className = theme;
  themeButton.innerText = theme === 'dark' ? 'light mode' : 'dark mode';
  document.querySelector('#status').innerText = status;
  statusButton.innerText = status === 'offline' ? ' ficar online' : 'ficar offline';
});