const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * (9 / 5)) + 32;

const temperatureInFahrenheit = (temperature) => {
  setTimeout(() => {
    console.log(`Atualmente está ${toFahrenheit(temperature)}ºF em Marte`);
  }, messageDelay);
}

const greet = (temperature) => {
  setTimeout(() => {
    console.log(`Olá! Curiosity aqui. Nesse momento está ${temperature}ºC em Marte`);
  }, messageDelay());
}
 

// Definição da função sendMarsTemperature...
const sendMarsTemperature = (callback) => {
  callback(getMarsTemperature());
}

sendMarsTemperature(temperatureInFahrenheit); // Imprime "Atualmente está 46.4ºF em Marte", por exemplo

sendMarsTemperature(greet); // Imprime "Olá! Curiosity aqui. Nesse momento são 36ºC em Marte", por exemplo