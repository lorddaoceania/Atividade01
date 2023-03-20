import React from "react";

const Temp = () => {
  const CelsiusParaFahrenheit = (valor) => {
    const f = valor * (9 / 5) + 32;
    alert("Fahrenheit: " + f);
  };

  const FahrenheitParaCelsius = (valor) => {
    const c = (valor - 32) / 1.8;
    alert("Celsius: " + c);
  };

  const KelvinParaCelsius = (valor) => {
    const c = valor - 273.15;
    alert("Celsius: " + c);
  };

  return (
    <>
      <button onClick={() => CelsiusParaFahrenheit(40)}>Celsius</button>
      <button onClick={() => FahrenheitParaCelsius(40)}>
        FahrenheitParaCelsius
      </button>
      <button onClick={() => KelvinParaCelsius(40)}>Kelvin</button>
    </>
  );
};

export default Temp;
