const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
}

const toFahrenheit = (degreeCelsius) => (degreeCelsius * (9 / 5)) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) => {
  setTimeout(() => {
    console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);
  }, messageDelay());
}
  

const handleError = (errorReason) => {
  setTimeout(() => {
    console.log(`Error getting temperature: ${errorReason}`);
  }, messageDelay());
}
  

// definição da função sendMarsTemperature...
const sendMarsTemperature = (callback, errorCallback) => {
  if(Math.random() < 0.6)
    callback(getMarsTemperature());
  else
    errorCallback(); 
}

// imprime "It is currently 47ºF at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(temperatureInFahrenheit, handleError);

// imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(greet, handleError);