const input = document.getElementById('inputValue');
const unit = document.getElementById('inputUnit');
const celsiusOutput = document.getElementById('celsiusOutput');
const fahrenheitOutput = document.getElementById('fahrenheitOutput');
const kelvinOutput = document.getElementById('kelvinOutput');

function convertTemperature() {
  const value = parseFloat(input.value);
  const from = unit.value;

  if (isNaN(value)) {
    celsiusOutput.textContent = "Celsius: --";
    fahrenheitOutput.textContent = "Fahrenheit: --";
    kelvinOutput.textContent = "Kelvin: --";
    return;
  }

  let celsius, fahrenheit, kelvin;

  switch (from) {
    case "celsius":
      celsius = value;
      fahrenheit = (value * 9) / 5 + 32;
      kelvin = value + 273.15;
      break;
    case "fahrenheit":
      celsius = (value - 32) * 5 / 9;
      fahrenheit = value;
      kelvin = celsius + 273.15;
      break;
    case "kelvin":
      celsius = value - 273.15;
      fahrenheit = (celsius * 9) / 5 + 32;
      kelvin = value;
      break;
  }

  celsiusOutput.textContent = `Celsius: ${celsius.toFixed(2)}°C`;
  fahrenheitOutput.textContent = `Fahrenheit: ${fahrenheit.toFixed(2)}°F`;
  kelvinOutput.textContent = `Kelvin: ${kelvin.toFixed(2)}K`;
}

input.addEventListener("input", convertTemperature);
unit.addEventListener("change", convertTemperature);
