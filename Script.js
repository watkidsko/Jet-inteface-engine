let rpm = 0;
let temperature = 0;
let fuelLevel = 80;

function updateGauges() {
    const rpmNeedle = document.getElementById("rpm-needle");
    const tempNeedle = document.getElementById("temp-needle");
    const fuelBar = document.getElementById("fuel-bar");

    rpmNeedle.style.transform = `rotate(${rpm}deg)`;
    tempNeedle.style.transform = `rotate(${temperature}deg)`;
    fuelBar.style.height = `${fuelLevel}%`;

    if (fuelLevel > 20) {
        fuelBar.style.backgroundColor = "#00ff00";
    } else {
        fuelBar.style.backgroundColor = "#ff0000";
    }
}

function increaseRPM() {
    if (rpm < 180) rpm += 10;
    if (temperature < 180) temperature += 5;
    if (fuelLevel > 0) fuelLevel -= 1;
    updateGauges();
}

function decreaseRPM() {
    if (rpm > 0) rpm -= 10;
    if (temperature > 0) temperature -= 5;
    if (fuelLevel < 100) fuelLevel += 1;
    updateGauges();
}

document.addEventListener("DOMContentLoaded", updateGauges);
