function convertTemperature(){
    var inputTemp = parseFloat(document.getElementById('inputTemp').value);
    var fromScale = document.getElementById('fromScale').value;
    var outputElement = document.getElementById('output');
    var outputTemp;
    if(fromScale === 'celsius'){
        outputTemp = {
            celsius: inputTemp,
            fahrenheit: (inputTemp * 9/5) + 32,
            kelvin: inputTemp + 273.15
        };
    }
    else if(fromScale === 'fahrenheit'){
        outputTemp = {
            celsius: (inputTemp - 32) * 5/9,
            fahrenheit: inputTemp,
            kelvin: (inputTemp - 32) * 5/9 + 273.15
        };
    }
    else if(fromScale === 'kelvin'){
        outputTemp = {
            celsius: inputTemp - 273.15,
            fahrenheit: (inputTemp - 273.15) * 9/5 + 32,
            kelvin: inputTemp
        };
    }

    outputElement.innerText = `Celsius: ${outputTemp.celsius},
    Fahrenheit: ${outputTemp.fahrenheit},
   Kelvin: ${outputTemp.kelvin}`;

}