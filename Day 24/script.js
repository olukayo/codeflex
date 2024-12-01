// Select the button and container elements
const fetchButton = document.querySelector('.nav button');
const container = document.getElementById('container');

// Event listener for the "Fetch Countries" button
fetchButton.addEventListener('click', () => {
  fetchCountries();
});

// Function to fetch countries from the CountriesNow API
async function fetchCountries() {
  const apiURL = 'https://countriesnow.space/api/v0.1/countries/population/cities';
  try {
    // Fetch data from the API
    const response = await fetch(apiURL);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();

    // Clear the container before displaying new data
    container.innerHTML = '';

    // Display country information (name and population)
    data.data.forEach((countryInfo) => {
      const countryCard = document.createElement('div');
      countryCard.className = 'country-card';

      const countryName = document.createElement('h3');
      countryName.textContent = `Country: ${countryInfo.country}`;

      const cityName = document.createElement('p');
      cityName.textContent = `City: ${countryInfo.city}`;

      const population = document.createElement('p');
      population.textContent = `Population: ${countryInfo.populationCounts?.[0]?.value || 'N/A'}`;

      countryCard.appendChild(countryName);
      countryCard.appendChild(cityName);
      countryCard.appendChild(population);

      container.appendChild(countryCard);
    });
  } catch (error) {
    console.error('Error fetching countries:', error);
    container.innerHTML = '<p>Error fetching country data. Please try again later.</p>';
  }
}
