function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function celsiusToFahrenheit(degree_celsius) {
    return (degree_celsius * 1.8 + 32);
}

// module.exports requires in package.json: "type" = "commonjs"
module.exports = {
    generateRandomNumber,
    celsiusToFahrenheit,
};