document.addEventListener("DOMContentLoaded", () => {
    // Footer
    const hoje = new Date();
    document.querySelector("#anoatual").innerHTML = `${hoje.getFullYear()}`;
    document.querySelector("#ultimaModificacao").innerHTML = `Last modification: ${document.lastModified}`;

    const temperature = 8; // °C
    const windSpeed = 12; // km/h

    // 3. Uma linha que retorna o cálculo - fórmula MÉTRICA
    function calcularSensacaoTermica(temp, velocidadeVento) {
        return 13.12 + 0.6215 * temp - 11.37 * Math.pow(velocidadeVento, 0.16) + 0.3965 * temp * Math.pow(velocidadeVento, 0.16);
    }

    // 4. Só chama se atender às condições viáveis
    const windChillElement = document.querySelector("#wind-chill");

    if (temperature <= 10 && windSpeed > 4.8) {
        const windChill = calcularSensacaoTermica(temperature, windSpeed);
        windChillElement.textContent = `${windChill.toFixed(1)} °C`;
    } else {
        windChillElement.textContent = "N/A";
    }
});