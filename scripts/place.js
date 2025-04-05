// Static values based on displayed data
const temperature = 10; // in °C
const windSpeed = 5;    // in km/h

// Wind Chill Calculation Formula (Metric)
function calculateWindChill(temp, wind) {
  return (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(1);
}

// Run on page load
window.addEventListener('DOMContentLoaded', () => {
  const windChillElement = document.getElementById('windchill');

  if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed);
    windChillElement.textContent = `${windChill}`;
  } else {
    windChillElement.textContent = 'N/A';
  }
});

// Get current year for copyright
const currentYear = new Date().getFullYear();
document.querySelector('footer p:first-of-type').innerHTML = `&copy; ${currentYear} 🏀 Enias Gramu 🏀 Zimbabwe.`;

// Get last modified date
const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last modified: ${lastModified}`;