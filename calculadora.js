document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('result').style.display = 'none';

    function calculateIMC() {
        // Input del usuario
        var weight = parseFloat(document.getElementById('weight').value);
        var peso = parseFloat(document.getElementById('height').value);

        // Calculo de índice de masa corporal
        var bmi = weight / (peso * peso);

        // Resultado en el DOM
        var resultElement = document.getElementById('result');
        resultElement.textContent = 'Tu IMC es: ' + bmi.toFixed(2);
        resultElement.style.display = 'block';
    }

    // Evento boton "Calculadora IMC"
    document.querySelector('button').addEventListener('click', calculateIMC);
});
