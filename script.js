// Function to fetch data from the API and render cards
function fetchDataAndRenderCards() {
    // Make API request
    fetch('https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco')
      .then(response => response.json())
      .then(data => {
        // Process each event
        data.events.forEach((event, index) => {
          // Create card element
          const card = document.createElement('div');
          card.classList.add('card');
  
          // Create image element
          const img = document.createElement('img');
          // Assuming the image file names are named a.svg, b.svg, c.svg, etc.
          const imageName = String.fromCharCode(97 + index) + '.svg'; // Convert index to ASCII character (a, b, c, ...)
          img.src = 'images/' + imageName;
          card.appendChild(img);
  
          // Create overlay text element
          const overlayText = document.createElement('div');
          overlayText.classList.add('overlay-text');
  
          // Populate overlay text with event details
          overlayText.innerHTML = `
            <p class="eventName" style="font-size: 1.2em;">Make agree</p>
            <p class="date">${formatDate(event.date)}</p>
            <p class="location"><i class="fas fa-map-marker-alt"></i> ${event.cityName}</p>
            <p class="weather">${event.weather} &deg;C | <span id="km">${Math.round(event.distanceKm)} Km</span></p>
          `;
  
          card.appendChild(overlayText);
  
          // Append card to container
          document.getElementById('container').appendChild(card);
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  }
  
  // Function to format date
  function formatDate(dateString) {
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  }
  
  // Call the function to fetch data and render cards
  fetchDataAndRenderCards();

  const container = document.getElementById('container');

container.addEventListener('wheel', (event) => {
  container.scrollLeft += event.deltaY;
  event.preventDefault();
});

  